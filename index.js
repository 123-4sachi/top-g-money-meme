// Counter game!
const decreaseBTN = document.getElementById("decreaseBTN");
const BdecreaseBTN = document.getElementById("BdecreaseBTN");
const resetBTN = document.getElementById("resetBTN");
const countLabel = document.getElementById("countLabel");

let count = 370000000;

// Function to update display with formatted number and "million dollars"
function updateDisplay() {
    countLabel.textContent = count.toLocaleString() + " million dollars";
}

decreaseBTN.onclick = function(){
    count -= 500000;
    updateDisplay();
}

BdecreaseBTN.onclick = function(){
    count -= 1000000;
    updateDisplay();
}

resetBTN.onclick = function(){
    count = 370000000;
    updateDisplay();
}

// Initialize display with formatted number and label
updateDisplay();
