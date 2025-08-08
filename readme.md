<img width="3672" height="1837" alt="screen-1" src="https://github.com/user-attachments/assets/95407c6c-14c6-40e7-8986-87029d333a6b" />

# 🎯 Weekly Work (Progress) Tracker 

[![Live Demo](https://img.shields.io/badge/Demo-View%20Now-4CAF50?style=for-the-badge)](https://weekly-work-tracker.vercel.app)
[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-%E2%98%95-ffdd57?style=for-the-badge)](https://pagarevijayy.gumroad.com/coffee)

A **local-first, privacy-friendly** weekly task tracker to help you stay consistent, productive, and goal-oriented — with your data stored securely in your own browser.  

Plan your week, track your progress, and keep your motivation high.

---

## 🧠 Overview

A responsive web app to **track daily tasks** based on difficulty levels. Designed to help you manage your week with a structure of hard, medium, easy, and chill days.

> Example: DSA & system design on Monday/Tuesday (hard), lighter work mid-week (medium/easy), and a chill Friday.

---

## 🌟 Features

* 📆 **Weekly Planning & Navigation**
  * Navigate between weeks (past and future)
  * Choose the starting day of your week (Monday–Sunday)

* 🗂 **Daily Task Cards**
  * Add, complete, or delete tasks for each day
  * Color-coded by difficulty (hard, medium, easy, chill)

* 📊 **Weekly Progress Summary**
  * Completion rate & motivational feedback
  * Perfect-day streak counter
  * Dynamic progress bar with pulse effect for high completion

* 💾 **Data Export/Import**
  * Export tasks as JSON
  * Re-import anytime for backup or transfer

* 📱 **Responsive Design**
  * Works on desktop and mobile
  * 100% offline after first load

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/weekly-work-tracker.git
cd weekly-work-tracker
```

### 2. Open in Browser

```bash
open index.html
# or double-click it in your file manager
```

> No build step or server required – it’s a single HTML file. Works offline.

---

## 🧱 Folder Structure

```
.
├── index.html     # Main file with HTML, CSS, and JavaScript
├── README.md      # You're reading it!
```

---

## ✍️ Customization Tips

* **Difficulty Setup** – Edit the `dayConfigs` object in JS to adjust difficulty or descriptions.
* **Motivational Messages** – Update `motivationalMessages` array with your own inspiration.
* **Styling** – All CSS is in a `<style>` block in `index.html`.  
  Extract to `.css` if you prefer modularity.

---

## 📦 Data Format (for Import/Export)

Exported JSON includes:

* `weekStartDay`: 0–6 (Sunday to Saturday)
* `weeklyData`: tasks per day per week
* `metadata`: summary info

Example:

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
* Vanilla JavaScript

No frameworks. No dependencies.

---

## 🙌 Credits & Support

Created with 💜 by Vijay Pagare.  
Inspired by the need to balance deep work, learning, and restful time throughout the week.  

If you found this useful, consider sharing it or supporting my work:

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-%E2%98%95-ffdd57?style=for-the-badge)](https://pagarevijayy.gumroad.com/coffee)

---

## 📄 License

MIT License – Feel free to use, share, and modify.

---

## 📸 Snapshots

<img width="3672" height="1837" alt="screen-1" src="https://github.com/user-attachments/assets/95407c6c-14c6-40e7-8986-87029d333a6b" />
<img width="3638" height="1787" alt="screen-2" src="https://github.com/user-attachments/assets/ca6bacfa-37ed-48b8-87de-e8bbe4e51ef6" />
