import { test, expect } from '@playwright/test';

async function addTask(page, dayName: string, text: string) {
    const card = page.locator('.day-card').filter({ has: page.locator('.day-name', { hasText: dayName }) });
    await card.getByPlaceholder('Add a task...').fill(text);
    await card.getByRole('button', { name: 'Add' }).click();
}

test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => { try { localStorage.clear(); } catch {} });
    await page.goto('/');
});

test('add tasks, toggle complete, delete, and progress updates', async ({ page }) => {
    // Add two tasks on Monday
    await addTask(page, 'Monday', 'Task A');
    await addTask(page, 'Monday', 'Task B');

    const mondayTasks = page.locator('#tasks-Monday .task-item');
    await expect(mondayTasks).toHaveCount(2);
    await expect(page.locator('#totalTasks')).toHaveText('2');
    await expect(page.locator('#completedTasks')).toHaveText('0');
    await expect(page.locator('#completionRate')).toHaveText('0%');

    // Complete one task (toggle)
    await mondayTasks.nth(0).locator('input[type="checkbox"]').check();
    await expect(page.locator('#completedTasks')).toHaveText('1');
    await expect(page.locator('#completionRate')).toHaveText('50%');

    // Complete second task
    await mondayTasks.nth(1).locator('input[type="checkbox"]').check();
    await expect(page.locator('#completedTasks')).toHaveText('2');
    await expect(page.locator('#completionRate')).toHaveText('100%');

    // Delete one task
    await mondayTasks.nth(0).getByRole('button', { name: 'Delete' }).click();
    await expect(page.locator('#totalTasks')).toHaveText('1');

    // Remaining completion should be 100% if the remaining one is completed
    await expect(page.locator('#completionRate')).toHaveText('100%');
});

test('enter key adds task', async ({ page }) => {
    const card = page.locator('.day-card').filter({ has: page.locator('.day-name', { hasText: 'Tuesday' }) });
    const input = card.getByPlaceholder('Add a task...');
    await input.fill('Via enter');
    await input.press('Enter');
    await expect(page.locator('#tasks-Tuesday .task-item')).toHaveCount(1);
});


