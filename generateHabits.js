// Script to generate 50 random habit objects and save to habits.json

const fs = require('fs');
const path = require('path');

const habitNames = [
  "Drink Water", "Read 10 Pages", "Exercise", "Meditate", "Journal",
  "Walk 5,000 Steps", "Sleep 8 Hours", "Eat Fruit", "No Sugar",
  "Stretch", "Practice Coding", "Write a Gratitude", "Plan Tomorrow",
  "Call Family", "Clean Room", "Cook Meal", "No Fast Food", "Save Money",
  "Study Language", "Listen to Podcast", "Draw", "Yoga", "Read News",
  "No Social Media", "Take Vitamins", "Go Outside", "Declutter Desk",
  "Practice Instrument", "Review Goals", "Drink Tea", "No Soda",
  "Compliment Someone", "Smile", "Do Pushups", "Floss", "Make Bed",
  "Track Expenses", "Meal Prep", "No TV", "Read Email", "Organize Files",
  "Water Plants", "No Snacks", "Take a Walk", "Reflect", "No Complaints",
  "Help Someone", "Do Laundry", "No Caffeine", "Early Wake Up"
];

function randomDate() {
  const start = new Date(2025, 4, 1); // May 1, 2025
  const end = new Date(2025, 4, 25);  // May 25, 2025
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    .toISOString().split('T')[0];
}

const habits = [];

for (let i = 0; i < 50; i++) {
  habits.push({
    id: i + 1,
    name: habitNames[i % habitNames.length],
    streak: Math.floor(Math.random() * 30) + 1,
    lastCompleted: randomDate(),
    completedToday: Math.random() < 0.5
  });
}

const filePath = path.join(__dirname, 'habit-tracker', 'db', 'habits.json');
fs.writeFileSync(filePath, JSON.stringify(habits, null, 2));
console.log('Generated 50 random habits!');