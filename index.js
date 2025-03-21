// Counter game!
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const boxRel = document.getElementById("boxRel");
const decreaseBTN = document.getElementById("decreaseBTN");
const BdecreaseBTN = document.getElementById("BdecreaseBTN");
const resetBTN = document.getElementById("resetBTN");
const countLabel = document.getElementById("countLabel");



if(noBtn.checked){
    boxRel.textContent = `Top G would be sad`;  
}
else if (yesBtn.checked){
    boxRel.textContent = `Top G would be proud`;
}


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
