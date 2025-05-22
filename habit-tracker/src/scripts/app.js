const habitForm = document.querySelector('.add-habit__form');
const addBtn = document.querySelector('.add-habit__button');
const habitCard = document.querySelector('.section-card');
const deletedCard = document.querySelector('.section-card--deleted');
const input = document.querySelector('.add-habit__input');
const list = document.querySelector('.habits__list');
const habitArray = [];
const currentDate = new Date(); // Returns the current date and time

//Handles the event to push the habit to the array
addBtn.addEventListener('click', function(e){
    e.preventDefault();
    const inputValue = input.value;   
    const habitObj = {
        name: inputValue,
        streak: 0,
        lastCompleted: currentDate,
        completedToday: true
    };

    habitArray.push(habitObj);
TODO: //Currently the habit array is displaying as object: object instead of the objects data im trying to set in habitObj
TODO: //I think I can wrap it in a function and call it in this function to seperate the behaviors for better modularity.
    console.log(`Habit added ${habitArray}`);
    input.value = "";
    renderUi();
});

TODO: //Add the other object fields into the rendered display. Make sure it's updating the DOM correctly. 

//Renders the display to show the added habit card
function renderUi(){
    input.value = ""; 
    for (let i = 0; i < habitArray.length; i++){
        const card = document.createElement('div');
        card.className = '.habits__list';
        const li = document.createElement('li');
        li.innerHTML = `<li>${habitArray[i].value}</li>`;
        card.append(li);
    }
}

function moveToDeleted(){

}

// =====================
// TODOs & FIXES
// =====================
// 1. Fix how habits are rendered in renderUi():
//    - Currently, you're creating <li> elements with habitArray[i].value, but habit objects don't have a 'value' property.
//    - Use habitArray[i].name, habitArray[i].streak, etc. to display correct data.
//    - Also, don't set card.className = '.habits__list'; Instead, use 'habit-card' for each card and append to the .habits__list container.
//
// 2. Clear the habits__list container before re-rendering in renderUi() to avoid duplicate cards.
//
// 3. Use habitForm's submit event instead of the button's click event for better accessibility.
//
// 4. When logging habitArray, use console.log(habitArray) or JSON.stringify(habitArray) to see the actual objects, not [object Object].
//
// 5. Add logic to mark habits as completed, increment streak, and update lastCompleted.
//
// 6. Implement moveToDeleted() to move habits to the deleted section.
//
// 7. Save and load habits from localStorage for persistence.
//
// 8. Add event listeners to dynamically created buttons (complete/delete) in each habit card.
//
// 9. Improve modularity by splitting logic into smaller functions (addHabit, renderUi, deleteHabit, etc.).
//
// 10. Format/display the date (lastCompleted) in a user-friendly way.
//
// =====================