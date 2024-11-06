const amountInput = document.getElementById("amountInput")
const amountDisplay = document.getElementById("amountDisplay")
const submitButton = document.getElementById("submitButton")

function displayAmount(){
    const enteredAmount = amountInput.value;
    amountDisplay.textContent = "Amount : $" + enteredAmount;
}

submitButton.addEventListener('click',displayAmount);


console.log("test");
