<img width="2880" height="1702" alt="demo-weekly-1-focus" src="https://github.com/user-attachments/assets/436b6860-6b0a-4ae8-b988-11fe6907ddc3" />

# **🎯 Weekly Work Tracker: Your Privacy-First Productivity Partner**
[![Buy on Gumroad](https://img.shields.io/badge/Buy_on_Gumroad-FF90E8?style=for-the-badge&logo=gumroad&logoColor=black)](https://pagarevijayy.gumroad.com/l/weekly-work-tracker)
[![weekly.technologypro.in](https://img.shields.io/badge/weekly.technologypro.in-blue?style=for-the-badge)](https://weekly.technologypro.in)
[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-%E2%98%95-ffdd57?style=for-the-badge)](https://pagarevijayy.gumroad.com/coffee)

A **privacy-first** weekly task tracker that helps you stay consistent and productive.

Your data is stored securely on your device and now **syncs seamlessly across all your devices** using peer-to-peer technology. No servers, no compromises.

Plan your week, track your progress, and stay motivated. It's the perfect companion for balancing deep work, learning, and rest.

<img width="1500" height="500" alt="weekly" src="https://github.com/user-attachments/assets/721fab7d-4cde-4a97-90e2-b3e0a0dd09d6" />

## **🧠 Overview**

The **Weekly Work Tracker** is a privacy-first web app designed to help you plan your week with intention.

It lets you define your days by **customizable difficulty levels** (hard, medium, easy, chill), so you can balance deep work with rest. Need to focus on a tough project on Monday and take it easy on Wednesday? This app adapts to you.

With new **WebRTC peer-to-peer sync**, your data stays on your devices—never on a server. Your tasks and settings are always up-to-date, from desktop to phone, ensuring **ultimate privacy and a seamless workflow**.

This isn't just a to-do list; it's a tool to help you work smarter and stay motivated, all while keeping your data private.

## 🌟 Features

#### 📆 Weekly Planning & Navigation
* Easily move between past, present, and future weeks.
* Customize your week's start day to fit your schedule.

#### 🎯 Focus View
* Switch to a distraction-free view to see only today's or upcoming tasks.

#### 🗂 Dynamic Daily Task Cards
* Add, complete, or delete tasks effortlessly.
* Tasks are color-coded by difficulty (**hard, medium, easy, chill**).
* **Drag & Drop** tasks to reorder them or move them to different days.

#### 📊 Intelligent Weekly Progress
* Get instant stats on your completion rate and total tasks.
* Track your **"Perfect Day Streak"** for motivation.
* A vibrant progress bar and contextual messages keep you inspired.

#### 🔗 Seamless WebRTC P2P Data Sync 
* **Privacy-first sync:** Securely sync all data between devices without a server.
* Connect devices by exchanging a simple, temporary code.
* Real-time updates ensure your data is always consistent.

#### ⚙️ Comprehensive App Settings
* **Personalize days:** Customize daily difficulty and add descriptions.
* **Manage motivation:** Add or remove your own inspirational messages.
* Adjust auto-save intervals and confetti animations.

#### 💾 Robust Data Export/Import
* Export your entire dataset as a JSON file for secure backups.
* Import data to either merge with or replace your current tasks.

#### 📱 Fully Responsive & Offline-First
* Enjoy a seamless experience on any device, from desktop to mobile.
* The app works completely **offline** after the first load, so you never need an internet connection for daily use.

## **💰 Want to support weekly?**

[![Buy on Gumroad](https://img.shields.io/badge/Buy_on_Gumroad-FF90E8?style=for-the-badge&logo=gumroad&logoColor=black)](https://pagarevijayy.gumroad.com/l/weekly-work-tracker)

#### What do you get:
* **Ultimate Privacy:** Your data stays on your device—period. The app is local-first, ensuring your sensitive plans and tasks never touch a server.
* **Seamless P2P Sync:** Thanks to new WebRTC peer-to-peer syncing, your progress and settings are always up-to-date across all your devices—from desktop to phone to tablet. No cloud, no accounts, no compromise on your privacy.
* **Structured Planning:** Go beyond a simple to-do list. The tracker lets you define your week with custom difficulty levels (**hard, medium, easy, chill days**) to balance deep work, learning, and essential rest.
* **Built-in Motivation:** Get real-time progress summaries, track your "**Perfect Day Streak**," and receive encouraging, customizable messages to keep your momentum high.
* **Drag & Drop Simplicity:** Easily organize, reorder, and move tasks between days with an intuitive, responsive design.

If you value digital autonomy and a tool that genuinely helps you work smarter without asking for your personal information, the Weekly Work Tracker is for you.



## **🚀 Getting Started**

### **1\. Clone the Repo**
```
git clone https://github.com/your-username/weekly-work-tracker.git  
cd weekly-work-tracker
```
### **2\. Open in Browser**

```
open index.html  
# or double-click it in your file manager
```

No build step or server required – it’s a single HTML file. Works offline.

## **🧱 Folder Structure**
```
.  
├── index.html     \# Main file with HTML, CSS, and JavaScript  
├── README.md      \# You're reading it\!
```
## **✍️ Customization & Configuration**

Many aspects of the app can now be customized directly within the **App Settings Panel** accessed via the gear icon.

* **Day Customization**: Adjust difficulty and description for each day directly in the Settings Panel.  
* **Motivational Messages**: Add or remove motivational phrases via the Settings Panel.  
* **Auto-Save Interval**: Configure the automatic save frequency in the Settings Panel.  
* **Confetti**: Toggle the confetti animation for task completion in the Settings Panel.  
* **Styling**: All CSS is still in a \<style\> block in index.html. You can extract it to .css files if you prefer modularity for more extensive visual customizations.

## **📦 Data Format (for Import/Export)**

Exported JSON now includes comprehensive application settings in addition to your daily task data.

* version: Current data format version (e.g., "2.2")  
* exportDate: Timestamp of when the data was exported  
* appSettings: All custom app settings (week start day, focus view, day configs, motivational messages, auto-save interval, confetti preference)  
* dailyData: Tasks per day (stored by YYYY-MM-DD date keys)  
* metadata: Summary information

Example:
```
{  
  "version": "2.2",  
  "exportDate": "2025-08-07T12:00:00.000Z",  
  "appSettings": {  
    "weekStartDay": 1,  
    "isFocusView": false,  
    "dayConfigs": {  
      "Monday": { "difficulty": "hard", "description": "DSA & Core SWE Learning" },  
      "Tuesday": { "difficulty": "hard", "description": "DSA & Core SWE Learning" },  
      "Wednesday": { "difficulty": "medium", "description": "Medium Level Activities" },  
      "Thursday": { "difficulty": "easy", "description": "Light Work" },  
      "Friday": { "difficulty": "chill", "description": "Chill Day" },  
      "Saturday": { "difficulty": "medium", "description": "Medium Level Activities" },  
      "Sunday": { "difficulty": "medium", "description": "Medium Level Activities" }  
    },  
    "motivationalMessages": \[  
      "Every expert was once a beginner. Keep going\! 🌟",  
      "Consistency is the mother of mastery\! 💪"  
    \],  
    "autoSaveIntervalMinutes": 2,  
    "enableConfetti": true  
  },  
  "dailyData": {  
    "2025-08-07": {  
      "tasks": \[  
        {  
          "id": 1691378493,  
          "text": "Solve 3 DSA problems",  
          "completed": false,  
          "createdAt": "2025-08-07T12:00:00.000Z"  
        }  
      \]  
    }  
  },  
  "metadata": {  
    "totalDays": 1,  
    "totalTasks": 1  
  }  
}
```
## **🛠 Tech Stack**

* HTML5  
* CSS3  
* Vanilla JavaScript  
* WebRTC (for P2P Sync)

No external frameworks or libraries are used for core functionality, ensuring a lean and performant experience.

## **🙌 Credits & Support**

Created with 💜 by [Vijay Pagare](https://x.com/pagarevijayy). Inspired by the need to balance deep work, learning, and restful time throughout the week. If you found this useful and appreciate the privacy-first approach and the powerful new sync capabilities, consider sharing it or supporting my work:

[![Buy on Gumroad](https://img.shields.io/badge/Buy_on_Gumroad-FF90E8?style=for-the-badge&logo=gumroad&logoColor=black)](https://pagarevijayy.gumroad.com/l/weekly-work-tracker)
## **📄 License**

MIT License – Feel free to use, share, and modify.

## **📸 Preview**
<img width="2880" height="1702" alt="demo-weekly-1-focus" src="https://github.com/user-attachments/assets/436b6860-6b0a-4ae8-b988-11fe6907ddc3" />
<img width="2880" height="1702" alt="demo-weekly-1-week" src="https://github.com/user-attachments/assets/10abd5bc-5a4d-4ec8-8d14-9cbf81564d75" />
<img width="2880" height="1702" alt="demo-weekly-2" src="https://github.com/user-attachments/assets/38be2e97-b0fa-463b-a986-886d91c4d5d4" />
<img width="2880" height="1702" alt="demo-weekly-3" src="https://github.com/user-attachments/assets/f2acd1ab-0e9a-4ab5-b427-acc8e507aa7c" />
<img width="1500" height="500" alt="weekly" src="https://github.com/user-attachments/assets/721fab7d-4cde-4a97-90e2-b3e0a0dd09d6" />


