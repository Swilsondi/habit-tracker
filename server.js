require('dotenv').config();
const fs = require('fs');
const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
const habits = JSON.parse(fs.readFileSync(`${__dirname}/db/habits.json`));


app.listen(PORT, () => {
    console.log(`Server is running on port...${PORT}`);
});


//Root URL 
app.get('/', (req, res) => {
    res.status(200).json({message: 'Server signal good...'});
})

app.post('/', (req, res) => {
    res.send('You can post to this URL');
})


//Habit tracker api
app.get('/habit-tracker/v1/habits', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
        habits
        }
    });
});

app.post('/habit-tracker/v1/habits', (req, res) => {
     const newHabit = {
        id: habits.length ? habits[habits.length - 1].id + 1 : 1,
        name: req.body.name,
        streak: 1,
        lastCompleted: new Date().toISOString().split('T')[0],
        completedToday: true
    };
    habits.push(newHabit);
    fs.writeFileSync(`${__dirname}/db/habits.json`, JSON.stringify(habits, null, 2));
    res.status(200).json({
        status: 'success',
        message: 'You can post to this URL'
    })
})

