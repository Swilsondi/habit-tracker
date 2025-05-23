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
        card.className = 'habit-card'; // Corrected class assignment no dot. But why doesn't this have a dot?
    
        const nameDiv = document.createElement('div');
        nameDiv.className = 'habit-card__name';
        nameDiv.textContent = habitArray[i].name;


        const streakDiv = document.createElement('div');
        streakDiv.className = 'habit-card__streak';
        streakDiv.textContent = habitArray[i].streak;
        

        const lastCompletedDiv = document.createElement('div');
        lastCompletedDiv.className = 'habit-card__lastCompleted';
        lastCompletedDiv.textContent = habitArray[i].lastCompleted;
      

        const completedTodayDiv = document.createElement('div');
        completedTodayDiv.className = 'habit-card__completedToday';
        completedTodayDiv.textContent = habitArray[i].completedToday
        
        
        const completedBtn = document.createElement('button');
        completedBtn.className = 'habit-card__complete-btn';
        completedBtn.textContent = '✓'; // This will look clean and centered


        const deletedBtn = document.createElement('button');
        deletedBtn.textContent = 'X'; 
        deletedBtn.className = 'habit-card__delete-btn';


        card.append(nameDiv, streakDiv, lastCompletedDiv, completedTodayDiv, completedBtn, deletedBtn);
        list.append(card);

        completedBtn.addEventListener('click', function () {
            completedHabitArray.push(habitArray[i]);
            habitArray.splice(i, 1);
            console.log('Habit array');
            console.log(JSON.stringify(habitArray));
            console.log('Pushed to completed habit array');
            console.log('Completed habits array'); 
            console.log(JSON.stringify(completedHabitArray));
            renderUi();
            addToCompleted();
            renderDeleted();
        });
    
        

        deletedBtn.addEventListener('click', function(){
            deletedHabitArray.push(habitArray[i]);
            habitArray.splice(i, 1);
            console.log('Deleted Habit array');
            console.log(JSON.stringify(deletedHabitArray));
            console.log('Pushed to deleted habit array');
            renderUi();
            renderDeleted();
            // addToCompleted(); Want to make a function here that adds it back to the your habits section.
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
            deletedList.innerHTML = '';
            const habitToRestore = deletedHabitArray[i];
            deletedHabitArray.splice(i, 1);
            habitArray.push(habitToRestore);
            console.log('Added back to active habits array');
            console.log(JSON.stringify(habitArray));
            renderUi();
            addToCompleted();
        });



        deletedCard.append(deletedNameDiv, deletedStreakDiv, deletedLastCompletedDiv, deletedCompletedTodayDiv, reAddBtn);
        deletedList.append(deletedCard);
    }
}

// =====================
// TODOs & FIXES
// =====================
//  Modular Functions
//    - As your app grows, split logic into smaller functions: addHabit, renderUi, deleteHabit, completeHabit, etc.
//
//  Next Steps
//    - Add "Complete" and "Delete" buttons to each habit card, and attach event listeners to them.
//    - Implement moveToDeleted() to move habits to the deleted section.
//    - Save and load habits from localStorage for persistence.
//    - Format/display the date (lastCompleted) in a user-friendly way.
//
// =====================
// COMMON TRIPPING POINTS EXPLAINED
// =====================
//
// - Only input, textarea, and select elements have a .value property. Use .value for form fields, .innerHTML or .textContent for divs/spans.
// 
// - When you want the current date/time, always use `new Date()` at the moment you need it, not once at the top.
// 
// - When rendering lists, always clear the container first with .innerHTML = "" to avoid duplicates.
// 
// - Use className = 'classname' (no dot) when assigning classes in JS.
// 
// - Use JSON.stringify(obj) to turn an object into a string (for storage or readable logs), but for debugging in the console, just use console.log(obj).
// 
// - Don't nest <li> inside <li>. Use <div> or <span> for custom card layouts.
// =====================