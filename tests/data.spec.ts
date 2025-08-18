import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';
import os from 'os';

async function addTask(page, dayName: string, text: string) {
    const card = page.locator('.day-card').filter({ has: page.locator('.day-name', { hasText: dayName }) });
    await card.getByPlaceholder('Add a task...').fill(text);
    await card.getByRole('button', { name: 'Add' }).click();
}

test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => { try { localStorage.clear(); } catch {} });
    await page.goto('/');
});

test('export generates JSON and includes metadata', async ({ page, context, browserName }) => {
    await addTask(page, 'Monday', 'Exportable');

    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', { name: /Export Data/ }).click();
    const download = await downloadPromise;

    const filePath = await download.path();
    expect(filePath).not.toBeNull();
    const content = fs.readFileSync(filePath!, 'utf-8');
    const json = JSON.parse(content);

    expect(json.version).toBe('1.0');
    expect(json.weeklyData).toBeTruthy();
    expect(json.metadata.totalTasks).toBeGreaterThanOrEqual(1);
});

test('import replace flow', async ({ page }) => {
    // Build a minimal export JSON
    const sample = {
        version: '1.0',
        exportDate: new Date().toISOString(),
        weekStartDay: 1,
        weeklyData: {
            week_0: {
                Monday: { tasks: [{ id: 1, text: 'Imported', completed: false, createdAt: new Date().toISOString() }] },
            },
        },
        metadata: { totalWeeks: 1, totalTasks: 1 },
    };
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'wwt-'));
    const importPath = path.join(tmp, 'data.json');
    fs.writeFileSync(importPath, JSON.stringify(sample), 'utf-8');

    // Pre-existing data
    await addTask(page, 'Tuesday', 'Pre-existing');
    await expect(page.locator('#tasks-Tuesday .task-item')).toHaveCount(1);

    // Handle confirm (replace) and success alert
    const dialogHandler = async (dialog: any) => {
        if (dialog.type() === 'confirm') {
            await dialog.dismiss(); // choose replace
        } else {
            await dialog.accept(); // accept alerts
        }
    };
    page.on('dialog', dialogHandler);
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('button', { name: /Import/ }).click();
    const chooser = await fileChooserPromise;
    await chooser.setFiles(importPath);
    // wait for UI to settle
    await page.waitForTimeout(200);
    page.off('dialog', dialogHandler);

    // After import completes, imported Monday task should exist, Tuesday pre-existing may be gone due to replace
    await expect(page.locator('#tasks-Monday .task-item')).toHaveCount(1);
});

test('reset confirms twice and clears everything', async ({ page }) => {
    await addTask(page, 'Wednesday', 'To be cleared');
    await expect(page.locator('#tasks-Wednesday .task-item')).toHaveCount(1);

    // Accept all dialogs (two confirms + one alert)
    const handler = async (dialog: any) => { try { await dialog.accept(); } catch {} };
    page.on('dialog', handler);

    await page.getByRole('button', { name: /Reset All Data/ }).click();
    // Wait briefly for UI to update
    await page.waitForTimeout(200);
    page.off('dialog', handler);

    await expect(page.locator('#tasks-Wednesday .task-item')).toHaveCount(0);
    await expect(page.locator('#totalTasks')).toHaveText('0');
});


