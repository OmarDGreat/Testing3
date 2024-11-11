const amountInput = document.getElementById("amountInput")
const amountDisplay = document.getElementById("amountDisplay")
const submitButton = document.getElementById("submitButton")
const limitButton = document.getElementById("limitButton")
const categorySelect = document.getElementById("categorySelect");

// Budget Limit and alerts
function limitPrompt() {
    const userInput = prompt("Enter budget limit");
    budgetLimit = parseInt(userInput);
    if (isNaN(budgetLimit)) {
        alert("Please enter a valid number for the budget limit.");
        budgetLimit = 0; // Reset if invalid input
    } else {
        console.log(`Budget Limit Set: ${budgetLimit}`);
    }
}


function displayAmount(){
    const enteredAmount = amountInput.value;
    console.log(enteredAmount);
    const currentTotalAmount = amountDisplay.textContent
    const newTotalAmount = parseInt(currentTotalAmount) + parseInt(enteredAmount)
    console.log(newTotalAmount);
    amountDisplay.textContent = newTotalAmount;
    if(newTotalAmount > budgetLimit){
        alert("You are over the limit")
    }
}



submitButton.addEventListener('click',displayAmount);
limitButton.addEventListener('click',limitPrompt);



console.log("test");
