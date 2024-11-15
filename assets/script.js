const amountInput = document.getElementById("amountInput")
const amountDisplay = document.getElementById("amountDisplay")
const submitButton = document.getElementById("submitButton")
const limitButton = document.getElementById("limitButton")
// const budgetInput = document.getElementById("budgetInput");
const categorySelect = document.getElementById("categorySelect");
const categoryExpensesDisplay = document.getElementById("categoryExpenses");

let budgetLimit = 0;  // Track the budget limit
let totalExpenses = 0;  // Track total expenses
let categoryExpenses = [];  // Track all expenses

// Budget Limit and alerts
function limitPrompt() {
    const userInput = prompt("Enter budget limit");
    budgetLimit = parseInt(userInput);
    if (isNaN(budgetLimit)) {
        alert("Please enter a valid number for the budget limit.");
        budgetLimit = 0; // Reset if invalid input
    } else {
        alert(`Budget Limit Set: $${budgetLimit}`);
        console.log(`Budget Limit Set: ${budgetLimit}`);
    }
}

// Display and calculate total expenses
function displayAmount() {
    const enteredAmount = parseFloat(amountInput.value);
    const selectedCategory = categorySelect.value;
    if (isNaN(enteredAmount) || enteredAmount <= 0) {
        alert("Please enter a valid expense amount.");
        return;
    }
        totalExpenses += enteredAmount;
    amountDisplay.textContent = totalExpenses.toFixed(2);

    if (categoryExpenses[selectedCategory]) {
        categoryExpenses[selectedCategory] += enteredAmount;
    } else {
        categoryExpenses[selectedCategory] = enteredAmount;
    }
    
    // Update category expenses display
    updateCategoryExpensesDisplay();

    // Check if over budget
    if (budgetLimit > 0 && totalExpenses > budgetLimit) {
        alert("Warning: You have exceeded your budget limit!");
    }

    amountInput.value = "";  // Clear input
    categorySelect.value = "Select Category";  // Reset category selector
}

// Update the display for category expenses
function updateCategoryExpensesDisplay() {
    categoryExpensesDisplay.innerHTML = "<strong>Category Totals:</strong><br>";
    for (const [category, amount] of Object.entries(categoryExpenses)) {
        categoryExpensesDisplay.innerHTML += `${category}: $${amount.toFixed(2)}<br>`;
    }
}

//     if (totalExpenses > budgetLimit && budgetLimit > 0) {
//         alert("Warning: You have exceeded your budget limit!");
//     }
//     amountInput.value = "";  // Clear the input
// }

// Event listeners
submitButton.addEventListener('click', displayAmount);
limitButton.addEventListener('click', limitPrompt);


// function displayAmount(){
//     const enteredAmount = amountInput.value;
//     console.log(enteredAmount);
//     const currentTotalAmount = amountDisplay.textContent
//     const newTotalAmount = parseInt(currentTotalAmount) + parseInt(enteredAmount)
//     console.log(newTotalAmount);
//     amountDisplay.textContent = newTotalAmount;
//     if(newTotalAmount > budgetLimit){
//         alert("You are over the limit")
//     }
// }



// submitButton.addEventListener('click',displayAmount);
// limitButton.addEventListener('click',limitPrompt);



// console.log("test");
