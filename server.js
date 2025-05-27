require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

// =====================
// Middleware
// =====================
app.use((req, res, next) => {
    console.log('Hello from the middleware 📁');
    next();
});

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    console.log('Request time middleware:', req.requestTime); 
    next();
});

// =====================
// Root Routes
// =====================
app.get('/', (req, res) => {
    res.status(200).json({message: 'Server signal good...'});
});

app.post('/', (req, res) => {
    res.send('You can post to this URL');
})



//This was messy and not clear routing them is better and more clear for us and others to understand.
// app.post('/habit-tracker/v1/habits', createHabits);
// app.get('/habit-tracker/v1/habits/:id', getHabits);
// app.delete('/habit-tracker/v1/habits/:id', deleteHabits);
// app.patch('/habit-tracker/v1/habits/:id', updateHabits);

// =====================
// Mount Routers
// =====================
const habitRouter = require('./routers/habitRouter');
const userRouter = require('./routers/userRouter');

// =====================
// USER ROUTE REGISTRATION
// =====================


// Mount routers
app.use('/habit-tracker/v1/habits', habitRouter);
app.use('/habit-tracker/v1/users', userRouter);

// =====================
// Server Start
// =====================
app.listen(PORT, () => {
    console.log(`Server is running on port...${PORT}`);
});
