const habitForm = document.querySelector('.add-habit__form');
const addBtn = document.querySelector('.add-habit__button');
const habitCard = document.querySelector('.section-card');
const deletedCard = document.querySelector('.section-card--deleted');
const input = document.querySelector('.add-habit__input');
const list = document.querySelector('.habits__list');
const completedList = document.querySelector('.history__list');
const deletedList = document.querySelector('.deleted-history__list');
const habitArray = [];
const completedHabitArray = [];
const deletedHabitArray = [];

//Handles the event to push the habit to the array
habitForm.addEventListener('submit', function(e){
    e.preventDefault();
    const inputValue = input.value;  
    const isoDate = new Date().toISOString().split('T')[0]; // e.g., "2025-05-22"
    const habitObj = {
        name: inputValue,
        streak: 1,
        lastCompleted: isoDate,
        completedToday: true
    };

    habitArray.push(habitObj);
    console.log(habitObj);
    input.value = "";
    renderUi();
});

//Renders the display to show the added habit card
function renderUi(){
    list.innerHTML = ""; // Clear the list before rendering
    for (let i = 0; i < habitArray.length; i++){
        const card = document.createElement('div');
        card.className = 'habit-card';

        // Name
        const nameLabel = document.createElement('div');
        nameLabel.className = 'habit-card__label';
        nameLabel.textContent = 'Habit';
        const nameDiv = document.createElement('div');
        nameDiv.className = 'habit-card__name';
        nameDiv.textContent = habitArray[i].name;

        // Streak
        const streakLabel = document.createElement('div');
        streakLabel.className = 'habit-card__label';
        streakLabel.textContent = 'Streak';
        const streakDiv = document.createElement('div');
        streakDiv.className = 'habit-card__streak';
        streakDiv.textContent = habitArray[i].streak;

        // Last Completed
        const lastCompletedLabel = document.createElement('div');
        lastCompletedLabel.className = 'habit-card__label';
        lastCompletedLabel.textContent = 'Last Completed';
        const lastCompletedDiv = document.createElement('div');
        lastCompletedDiv.className = 'habit-card__lastCompleted';
        lastCompletedDiv.textContent = habitArray[i].lastCompleted;

        // Completed Today
        const completedTodayLabel = document.createElement('div');
        completedTodayLabel.className = 'habit-card__label';
        completedTodayLabel.textContent = 'Completed Today';
        const completedTodayDiv = document.createElement('div');
        completedTodayDiv.className = 'habit-card__completedToday';
        completedTodayDiv.textContent = habitArray[i].completedToday ? "Yes" : "No";

        // Buttons
        const completedBtn = document.createElement('button');
        completedBtn.className = 'habit-card__complete-btn';
        completedBtn.textContent = '✓';

        const deletedBtn = document.createElement('button');
        deletedBtn.textContent = 'X';
        deletedBtn.className = 'habit-card__delete-btn';

        card.append(
            nameLabel, nameDiv,
            streakLabel, streakDiv,
            lastCompletedLabel, lastCompletedDiv,
            completedTodayLabel, completedTodayDiv,
            completedBtn, deletedBtn
        );
        list.append(card);

        completedBtn.addEventListener('click', function () {
            completedHabitArray.push(habitArray[i]);
            habitArray.splice(i, 1);
            renderUi();
            addToCompleted();
            renderDeleted();
        });

        deletedBtn.addEventListener('click', function(){
            deletedHabitArray.push(habitArray[i]);
            habitArray.splice(i, 1);
            renderUi();
            renderDeleted();
        });
    }
}


function addToCompleted(){
    completedList.innerHTML = ""; // Clear the list before rendering
    for (let i = 0; i < completedHabitArray.length; i++){

        const completedCard = document.createElement('div');
        completedCard.className = 'habit-card'; 
        

        const completedNameDiv = document.createElement('div');
        completedNameDiv.className = 'habit-card__name';
        completedNameDiv.textContent = completedHabitArray[i].name;


        const completedStreakDiv = document.createElement('div');
        completedStreakDiv.className = 'habit-card__streak';
        completedStreakDiv.textContent = completedHabitArray[i].streak;

        const lastCompletedDiv = document.createElement('div');
        lastCompletedDiv.className = 'habit-card__info';
        lastCompletedDiv.textContent = completedHabitArray[i].lastCompleted;
        
        const completedTodayDiv = document.createElement('div');
        completedTodayDiv.className = 'habit-card__info';
        completedTodayDiv.textContent = completedHabitArray[i].completedToday;

        completedCard.append(completedNameDiv, completedStreakDiv, lastCompletedDiv, completedTodayDiv);
        completedList.append(completedCard);    
    }
}

function renderDeleted(){
        deletedList.innerHTML = ""; // Clear the list before rendering
    for (let i = 0; i < deletedHabitArray.length; i++){
        const deletedCard = document.createElement('div');
        deletedCard.className = 'habit-card'; 
    
        const deletedNameDiv = document.createElement('div');
        deletedNameDiv.className = 'habit-card__name';
        deletedNameDiv.textContent = deletedHabitArray[i].name;


        const deletedStreakDiv = document.createElement('div');
        deletedStreakDiv.className = 'habit-card__streak';
        deletedStreakDiv.textContent = deletedHabitArray[i].streak;
        

        const deletedLastCompletedDiv = document.createElement('div');
        deletedLastCompletedDiv.className = 'habit-card__lastCompleted';
        deletedLastCompletedDiv.textContent = deletedHabitArray[i].lastCompleted;
      

        const deletedCompletedTodayDiv = document.createElement('div');
        deletedCompletedTodayDiv.className = 'habit-card__completedToday';
        deletedCompletedTodayDiv.textContent = deletedHabitArray[i].completedToday

        const reAddBtn = document.createElement('button');
        reAddBtn.className = 'habit-card__complete-btn';
        reAddBtn.textContent = '✓'; // This will look clean and centered  

        reAddBtn.addEventListener('click', function(){
            const habitToRestore = deletedHabitArray[i];
            deletedHabitArray.splice(i, 1);
            habitArray.push(habitToRestore);
            console.log('Added back to active habits array');
            console.log(JSON.stringify(habitArray));
            renderUi();
            addToCompleted();
            renderDeleted();
        });



        deletedCard.append(deletedNameDiv, deletedStreakDiv, deletedLastCompletedDiv, deletedCompletedTodayDiv, reAddBtn);
        deletedList.append(deletedCard);
    }
}

// =====================
// PERSONALIZED FEEDBACK & NEXT STEPS
// =====================
//
// 🟢 What You're Doing Well:
// - You are using modular functions for rendering and updating UI.
// - You clear lists before rendering to avoid duplicates.
// - You use event listeners and arrays of objects for state management.
// - You are using BEM-style class names for styling.
//
// 🟡 Mistakes & Tripping Points to Watch For:
// 1. **Array Indexing After Splice:**
//    - When you splice or modify an array inside a loop, the indices can shift. This can cause you to skip items or access undefined values.
//    - Solution: Consider looping backwards when removing items, or always save the object to move before splicing.
//
// 2. **Accessing Properties on Arrays Instead of Objects:**
//    - Example: `completedHabitArray.name` is undefined; you need `completedHabitArray[i].name`.
//
// 3. **Clearing Lists in Event Handlers:**
//    - You sometimes clear lists (`innerHTML = ""`) inside button handlers. Let your render functions handle this.
//
// 4. **Mixing up .append and .appendChild:**
//    - Both work, but `.append()` is more flexible. Stick to one style for consistency.
//
// 5. **Date Formatting:**
//    - You sometimes store/display the full ISO string. Use `.toISOString().split('T')[0]` for `YYYY-MM-DD` or `.toLocaleDateString()` for a user-friendly format.
//
// 6. **Class Naming:**
//    - Make sure each element gets a unique, descriptive class for styling and clarity.
//
// 7. **Global Variables:**
//    - Avoid defining objects (like `habitObj`) globally. Always create new objects inside event handlers to prevent reference bugs.
//
// 8. **UI/UX:**
//    - Consider adding visual feedback for actions (e.g., animations, color changes on complete/delete).
//
// 🟠 What You're Missing (from your original MD/project goals):
// - **API/Database Integration:** You said you'll skip localStorage and use an API/database. You need to:
//     - Replace all array manipulations with API calls (fetch, POST, DELETE, etc.).
//     - Update your UI after each API response.
//     - Handle loading states and errors from the API.
// - **Dynamic Rendering from API:** On page load, fetch habits from your backend and render them.
// - **Authentication (optional):** If your API/database is user-specific, you'll need to handle auth (login, tokens, etc.).
// - **Validation:** Prevent duplicate habits, empty names, etc.
// - **Accessibility:** Add ARIA labels, keyboard navigation, and focus states for better UX.
//
// 🟣 Next Steps for API Practice:
// 1. Replace all direct array pushes/splices with API requests (using `fetch` or `axios`).
// 2. On success, update your arrays and re-render the UI.
// 3. On page load, fetch all habits from the API and populate your arrays/UI.
// 4. Handle errors gracefully (show a message if the API fails).
//
// =====================
// Keep going! You're making great progress and learning real-world dev skills.
// =====================
/*
=====================
PROFESSIONAL BACKEND/API CHECKLIST (Node + Express + SQL)
=====================
1. Project Structure
   - Use folders: /controllers, /models, /routes, /middleware, /db
   - Separate logic: controllers (business), models (DB), routes (endpoints)

2. Database Design (SQL)
   - Tables: users (optional), habits (id, user_id, name, streak, last_completed, completed_today, status)
   - Use proper types, constraints, and foreign keys
   - Plan for soft deletes (status column)

3. API Endpoints (RESTful)
   - GET /api/habits         // get all habits
   - POST /api/habits        // add new habit
   - PUT /api/habits/:id     // update habit
   - DELETE /api/habits/:id  // delete/soft-delete habit
   - GET /api/habits/completed
   - GET /api/habits/deleted
   - (Optional) POST /api/habits/:id/complete

4. Database Connection
   - Use a connection pool (mysql2, pg, or ORM)
   - Store DB credentials in .env, use dotenv
   - Handle connection errors

5. Controllers & Models
   - Controllers: request/response, validation, error handling
   - Models: SQL queries or ORM logic
   - Keep controllers thin

6. Middleware
   - express.json(), CORS, error handling, (optional) auth

7. Validation & Error Handling
   - Validate incoming data
   - Use proper HTTP status codes
   - Send clear error messages

8. Testing
   - Test endpoints with Postman/Insomnia
   - Write unit/integration tests

9. Security
   - Sanitize inputs, use parameterized queries/ORM
   - (Optional) Auth for user-specific data

10. Documentation
    - Document API (README, Swagger, or Postman)
    - Add code comments

11. Frontend Integration
    - Use fetch/axios for API calls
    - Handle loading, error, and success states
    - Remove direct array manipulation in frontend

12. Deployment
    - Use env variables, prepare npm scripts
    - (Optional) Deploy to Heroku/Render/Railway
    - Use production DB

Pro Tips:
- Think in resources (table/model = resource)
- Keep code modular
- Always handle errors
- Use async/await
- Learn SQL basics
- Use Git/version control
- Start simple, iterate, ask why

You’re ready to build a professional backend and connect it to your frontend!
=====================
*/



