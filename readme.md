<img width="3672" height="1837" alt="screen-1" src="https://github.com/user-attachments/assets/95407c6c-14c6-40e7-8986-87029d333a6b" />

# **🎯 Weekly Work (Progress) Tracker**
[![Live Demo](https://img.shields.io/badge/Demo-View%20Now-4CAF50?style=for-the-badge)](https://weekly-work-tracker.vercel.app)
[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-%E2%98%95-ffdd57?style=for-the-badge)](https://pagarevijayy.gumroad.com/coffee)

A **local-first, privacy-friendly** weekly task tracker designed to help you stay consistent, productive, and goal-oriented. Your data is stored securely in your own browser, now with the added power of **peer-to-peer syncing** across your devices\!

Plan your week, track your progress, keep your motivation high, and ensure your data is always up-to-date, wherever you are. This app is designed to be your indispensable companion for balancing deep work, continuous learning, and essential rest throughout your week.

## **🧠 Overview**

The Weekly Work Tracker is a responsive web app that empowers you to **track daily tasks** based on customizable difficulty levels. It's built to help you manage your week with a structured approach, allowing you to designate hard, medium, easy, and chill days. Whether you're dedicating Monday and Tuesday to intensive DSA and system design (hard days) or scheduling lighter work mid-week, this tool adapts to your flow.

With its new **WebRTC peer-to-peer synchronization**, your progress and personalized settings seamlessly follow you across multiple devices without ever touching a server, ensuring ultimate privacy and convenience. This is more than just a tracker; it's a commitment to your productivity, designed to keep you focused and motivated across all your work environments.

## **🌟 Features**

* 📆 **Weekly Planning & Navigation**  
  * Effortlessly navigate between past, current, and future weeks.  
  * Set your preferred start day for the week (Monday–Sunday) to align with your personal or professional schedule.  
* 🎯 **Focus View**  
  * Toggle to a streamlined "Focus View" to concentrate solely on tasks for the current or upcoming days, minimizing distractions and enhancing immediate productivity.  
* 🗂 **Dynamic Daily Task Cards**  
  * Add, mark complete, or delete tasks with ease for each day.  
  * Tasks are intuitively color-coded by customizable difficulty levels (hard, medium, easy, chill), providing a quick visual overview of your workload.  
  * **Drag & Drop functionality**: Reorder tasks within a day or seamlessly move them between different days to adapt to changing priorities.  
* 📊 **Intelligent Weekly Progress Summary**  
  * Get instant feedback on your overall completion rate, total tasks, and completed tasks.  
  * Track your "Perfect Day Streak" to stay motivated and celebrate consistent effort.  
  * A vibrant, dynamic progress bar with a subtle "pulse" effect (for high completion rates) visually encourages you.  
  * **Contextual Motivational Messages**: Receive encouraging messages that dynamically update based on your weekly progress, providing a constant source of inspiration.  
* 🔗 **Seamless WebRTC Peer-to-Peer (P2P) Data Sync** (NEW\!)  
  * **Serverless Synchronization**: Securely sync all your daily tasks and app settings between multiple devices (e.g., desktop to laptop, phone to tablet) directly, without any data ever being stored on external servers. Your privacy is paramount.  
  * **Offer/Answer Code Exchange**: Initiate sync sessions easily by exchanging short, temporary codes between your devices.  
  * **Real-time Updates**: Changes on one device are merged and reflected on connected devices, ensuring your data is always consistent.  
* ⚙️ **Comprehensive App Settings Panel** (NEW\!)  
  * **Day Customization**: Personalize the difficulty level (hard, medium, easy, chill) and add a custom description for each day of the week to perfectly match your workflow (e.g., "Wednesday: Brainstorming & Planning").  
  * **Motivational Message Management**: Add new personalized motivational messages, or remove existing ones, to keep your inspiration tailored to you.  
  * **Auto-Save Interval**: Adjust how frequently your data is automatically saved to local storage.  
  * **Confetti on Completion**: Enable or disable celebratory confetti animations when you achieve significant task milestones.  
* 💾 **Robust Data Export/Import**  
  * Export your entire dataset, including all tasks and current app settings, as a JSON file for secure backups or manual transfers.  
  * Import data effortlessly, with options to either merge with existing data (applying Last-Write-Wins for tasks) or completely replace your current data.  
* 📱 **Fully Responsive & Offline-First Design**  
  * Enjoy a consistent and optimized experience across all devices, from mobile phones to large desktop monitors.  
  * The app works 100% offline after the initial load, meaning no internet connection is required for daily use.

## **💰 Why Consider Supporting This Project? (Value Proposition)**

The Weekly Work Tracker goes beyond a basic to-do list, offering a unique blend of productivity, privacy, and seamless cross-device utility:

* **Uncompromised Privacy (Local-First & P2P Sync)**: In an age where almost every app demands your data, this tracker stands apart. Your tasks and progress remain entirely on your devices. The WebRTC P2P sync allows you to collaborate or keep your data synchronized without uploading it to any cloud server, making it ideal for sensitive planning or simply for those who value digital autonomy.  
* **Enhanced Productivity & Motivation**: The customizable day difficulties, motivational messages, and real-time progress tracking are designed to keep you engaged and accountable. It's not just about listing tasks, but intelligently structuring your week to prevent burnout and maximize deep work.  
* **Always Up-to-Date, Anywhere**: The new P2P sync means you can start planning on your desktop, update tasks on your phone during a commute, and reflect on your tablet in the evening—all with the latest data, no manual transfers needed, and no internet required after the initial sync handshake.  
* **Zero Dependencies, Pure Performance**: Built with plain HTML, CSS, and JavaScript, the app is incredibly lightweight, fast, and reliable. There's no complex setup, no accounts to create, and no frameworks to slow you down.  
* **Continuous Improvement**: Supporting this project enables ongoing development, new features, and refinement to make your productivity journey even smoother.

If you value privacy, seek a powerful yet simple productivity tool, and appreciate software that just works, then this tracker offers immense value. Your support helps ensure it remains a robust, independent, and user-centric solution.

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

Created with 💜 by Vijay Pagare.  
Inspired by the need to balance deep work, learning, and restful time throughout the week.  
If you found this useful and appreciate the privacy-first approach and the powerful new sync capabilities, consider sharing it or supporting my work:

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-%E2%98%95-ffdd57?style=for-the-badge)](https://pagarevijayy.gumroad.com/coffee)
## **📄 License**

MIT License – Feel free to use, share, and modify.

## **📸 Snapshots**

<img width="3672" height="1837" alt="screen-1" src="https://github.com/user-attachments/assets/95407c6c-14c6-40e7-8986-87029d333a6b" />
<img width="3638" height="1787" alt="screen-2" src="https://github.com/user-attachments/assets/ca6bacfa-37ed-48b8-87de-e8bbe4e51ef6" />

(PS - The snapshots need to be updated; they’re old.)