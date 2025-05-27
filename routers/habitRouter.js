// Habit routes
const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();

let habits = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/habits.json')));

// --- Get all habits ---
router.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,
        data: { habits }
    });
});

// --- Get a single habit by ID ---
const getHabits = (req, res) => {
    const id = Number(req.params.id);
    const habit = habits.find(el => el.id === id);
    if (!habit) {
        return res.status(404).json({
            status: 'failed',
            message: 'Invalid'
        });
    }
    res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,
        data: { habit }
    });
};

// --- Create a new habit ---
const createHabits = (req, res) => {
    const newHabit = {
        id: habits.length ? habits[habits.length - 1].id + 1 : 1,
        name: req.body.name,
        streak: 1,
        lastCompleted: new Date().toISOString().split('T')[0],
        completedToday: true
    };
    habits.push(newHabit);
    fs.writeFile(
        path.join(__dirname, '../db/habits.json'),
        JSON.stringify(habits, null, 2),
        (err) => {
            if (err) {
                console.error('Error writing file:', err);
            }
        }
    );
    res.status(201).json({
        status: 'success',
        requestedAt: req.requestTime,
        data: { habit: newHabit }
    });
};

// --- Update a habit by ID ---
const updateHabits = (req, res) => {
    const id = Number(req.params.id);
    const habit = habits.find(el => el.id === id);
    if (!habit) {
        return res.status(404).json({
            status: 'failed',
            message: 'Invalid id'
        });
    }
    if (req.body.name) habit.name = req.body.name;
    fs.writeFile(
        path.join(__dirname, '../db/habits.json'),
        JSON.stringify(habits, null, 2),
        (err) => {
            if (err) {
                console.error('Error writing file:', err);
            }
        }
    );
    res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,
        data: { habit }
    });
};

// --- Delete a habit by ID ---
const deleteHabits = (req, res) => {
    const id = Number(req.params.id);
    const habitIndex = habits.findIndex(el => el.id === id);
    if (habitIndex === -1) {
        return res.status(404).json({
            status: 'failed',
            message: 'Invalid id'
        });
    }
    habits.splice(habitIndex, 1);
    fs.writeFile(
        path.join(__dirname, '../db/habits.json'),
        JSON.stringify(habits, null, 2),
        (err) => {
            if (err) {
                console.error('Error writing file:', err);
            }
        }
    );
    res.status(204).json({
        status: 'success',
        requestedAt: req.requestTime,
        data: null
    });
};

router
  .route('/')
  .get((req, res) => {
      res.status(200).json({
          status: 'success',
          requestedAt: req.requestTime,
          data: { habits }
      });
  })
  .post(createHabits);

router
  .route('/:id')
  .get(getHabits)
  .patch(updateHabits)
  .delete(deleteHabits);

module.exports = router;