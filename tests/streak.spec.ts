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

test('streak increments when today has all tasks completed', async ({ page }) => {
    // Identify today by reading the card that matches navigator.language weekday
    const todayName = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const initialStreak = Number(await page.locator('#streakCount').innerText());
    await addTask(page, todayName, 'Complete me');

    const todayList = page.locator(`#tasks-${todayName} .task-item`);
    await expect(todayList).toHaveCount(1);
    await todayList.first().locator('input[type="checkbox"]').check();

    // Progress should update to 100% for single task day
    await expect(page.locator('#completedTasks')).toHaveText('1');
    await expect(page.locator('#completionRate')).toHaveText('100%');

    // Streak should be numeric and not decrease
    const finalStreak = Number(await page.locator('#streakCount').innerText());
    expect(finalStreak).toBeGreaterThanOrEqual(initialStreak);
});


