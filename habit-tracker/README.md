# habit-tracker
Tracking User Habits and Data

# 🧠 Habit Tracker App

Track, manage, and build better habits — one day at a time.

# Habit Tracker

## Overview
The Habit Tracker is a web application designed to help users track their habits in a clean and minimalist interface. The application allows users to add new habits, view their progress, and manage their habit history.

## Features
- Add new habits through a user-friendly form.
- View active habits displayed as cards.
- Responsive design that works on both desktop and mobile devices.
- Future integration of JavaScript for dynamic functionality.

## Project Structure
```
habit-tracker
├── src
│   ├── index.html        # Main HTML structure of the application
│   ├── styles
│   │   └── main.css      # Styles for the application using BEM conventions
│   └── scripts
│       └── app.js        # JavaScript logic for handling habits (to be implemented)
├── README.md             # Project documentation
```

## Setup Instructions
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Open `src/index.html` in your web browser to view the application.

## Goals
- To provide a simple and effective way for users to track their habits.
- To implement features such as habit statistics and reminders in future updates.
- To maintain a clean and modern UI that enhances user experience.

## 📌 Overview

This Habit Tracker is a simple web app that allows users to:
- Add new habits
- Track daily completion streaks
- Store progress persistently using **LocalStorage**
- Visualize habits with responsive habit cards

It’s built with **vanilla JavaScript**, **HTML5**, and **modern CSS**, with a focus on solid logic, beginner-friendly architecture, and clean UI.

---

## 🚀 Features

- ✅ Add custom habits via input form
- 🗓 Track daily habit completion and reset streaks
- 🔁 Data saved using `localStorage` so habits persist across refreshes
- 📊 Habit cards show streaks, names, and progress
- ♻️ Clear and refactorable codebase for practice and iteration

---

## 🧠 Tech Stack

| Tech | Description |
|------|-------------|
| HTML | Structure and semantic layout |
| CSS  | Responsive layout and styling |
| JavaScript | Core app logic, habit tracking, rendering, and persistence |
| localStorage | To store habits across sessions |

📈 Future Improvements
Add a calendar view for each habit

Toggle “complete for today” on click

Habit editing & deletion

Sort/filter by streak, date, or name

Responsive animations and user onboarding

## 🧪 Example Habit Object

```js
{
  name: "Meditate",
  streak: 4,
  lastCompleted: "2025-04-27",
  completedToday: false
}

You’ll need:

A form with an input for habit name.

A container to display the habit cards.

A submit event listener.

A renderHabits() function.

Optionally, save/load from local storage.