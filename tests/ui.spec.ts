import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
        try { localStorage.clear(); } catch { }
    });
    await page.goto('/');
});

test('renders header and base UI', async ({ page }) => {
    await expect(page.getByRole('heading', { name: '🚀 Weekly Work Tracker' })).toBeVisible();
    await expect(page.getByText('Stay consistent, track progress, achieve your goals!')).toBeVisible();

    await expect(page.locator('#currentWeek')).toBeVisible();
    await expect(page.getByRole('button', { name: /Previous Week/ })).toBeVisible();
    await expect(page.getByRole('button', { name: /Next Week/ })).toBeVisible();

    await expect(page.locator('#weekStartDay')).toBeVisible();
    await expect(page.locator('.days-grid .day-card')).toHaveCount(7);

    // Check stat cards and progress bar
    await expect(page.locator('#totalTasks')).toHaveText('0');
    await expect(page.locator('#completedTasks')).toHaveText('0');
    await expect(page.locator('#completionRate')).toHaveText('0%');
    await expect(page.locator('#streakCount')).toHaveText('0');
    await expect(page.locator('#progressFill')).toHaveText('0%');
});

test('day cards have names, badges, inputs and add buttons', async ({ page }) => {
    const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    for (const name of dayNames) {
        const card = page.locator('.day-card').filter({ has: page.locator('.day-name', { hasText: name }) });
        await expect(card).toHaveCount(1);
        await expect(card.locator('.difficulty-badge')).toBeVisible();
        await expect(card.getByPlaceholder('Add a task...')).toBeVisible();
        await expect(card.getByRole('button', { name: 'Add' })).toBeVisible();
    }
});


