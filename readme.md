# 🎯 Weekly Work Progress Tracker

A beautifully designed, fully client-side weekly task tracker to help you stay consistent, productive, and goal-oriented throughout your week.

## 🧠 Overview

This is a responsive web app to **track daily tasks** based on difficulty levels. Designed to help you manage your week with a structure of hard, medium, easy, and chill days.

> Example use case: DSA and system design on Monday/Tuesday (hard), lighter work mid-week (medium/easy), and a chill Friday.

---

## 🌟 Features

* 📆 **Weekly Planning & Navigation**

  * Navigate between weeks (past and future)
  * Choose the starting day of your week (Monday–Sunday)

* 🗂 **Daily Task Cards**

  * Add, complete, or delete tasks for each day
  * Days are color-coded by difficulty (hard, medium, easy, chill)

* 📊 **Weekly Progress Summary**

  * Completion rate & motivational feedback
  * Task streak counter for perfect days
  * Dynamic progress bar with pulse effect when you're crushing it 💪

* 💾 **Data Export/Import**

  * Export your weekly tasks as JSON
  * Re-import them anytime for backup or transfer

* 📱 **Responsive Design**

  * Works smoothly on desktop and mobile devices

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/weekly-work-tracker.git
cd weekly-work-tracker
```

### 2. Open in Browser

Just open the `index.html` file in your browser:

```bash
open index.html
# or manually double-click it in your file manager
```

> No build step or server required – it's 100% static.

---

## 🧱 Folder Structure

```
.
├── index.html     # Main file with HTML, CSS, and JavaScript combined
├── README.md      # You're reading it!
```

---

## ✍️ Customization Tips

* **Difficulty Setup**:
  You can modify the `dayConfigs` object in the JavaScript section to change task difficulty or descriptions for each day.

* **Motivational Messages**:
  Want personalized inspiration? Edit the `motivationalMessages` array to suit your style.

* **Styling**:
  All styles are in a `<style>` block inside the `index.html`. Modify them directly or extract into a `.css` file if you prefer modularity.

---

## 📦 Data Format (for Import/Export)

Exported JSON includes:

* `weekStartDay`: 0–6 (Sunday to Saturday)
* `weeklyData`: Contains tasks per day per week
* `metadata`: Summary info

Example snippet:

```json
{
  "version": "1.0",
  "exportDate": "2025-08-07T12:00:00.000Z",
  "weekStartDay": 1,
  "weeklyData": {
    "week_0": {
      "Monday": {
        "tasks": [
          {
            "id": 1691378493,
            "text": "Solve 3 DSA problems",
            "completed": false,
            "createdAt": "2025-08-07T12:00:00.000Z"
          }
        ]
      }
    }
  }
}
```

---

## 🛠 Tech Stack

* HTML5
* CSS3
* JavaScript (Vanilla)

No frameworks. No dependencies.

---

## 🙌 Credits

Created with 💜 by Vijay Pagare.

Inspired by the need to balance deep work, learning, and restful time throughout the week. If you found this useful, consider sharing or contributing!

---

## 📄 License

MIT License – Feel free to use, share, and modify.

