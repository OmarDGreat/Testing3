const amountInput = document.getElementById("amountInput")
const amountDisplay = document.getElementById("amountDisplay")
const submitButton = document.getElementById("submitButton")
const limitButton = document.getElementById("limitButton")

function displayAmount(){
    const enteredAmount = amountInput.value;
    console.log(enteredAmount);
    const currentTotalAmount = amountDisplay.textContent
    const newTotalAmount = parseInt(currentTotalAmount) + parseInt(enteredAmount)
    console.log(newTotalAmount);
    amountDisplay.textContent = newTotalAmount;
}

function limitPrompt(){
    let userInput = prompt("Enter budget limit")


}

submitButton.addEventListener('click',displayAmount);
limitButton.addEventListener('click',limitPrompt);



console.log("test");
