
document.addEventListener("DOMContentListener", function () ) {

    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", fucntion() ) {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        

        }
    }
     runGame("addition");
   

}

/** 
 * The main game "loop", called when the script is first loaded
 * and after the users answer has been processed
 */
function runGame(gameType) {

    // Creates two random numbers between 1 and 25.
    let num1 = Math.floor(Math.random() * 25) +1;
    let num2 = Math.floor(Math.random() * 25) +1;

    if (gameType === "addition") {
        displayAddtionQuestion(num1, num 2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
        }
    }
}

function checkAnswer() {

}
function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswers() {

}

function displayAddtionQuestion(operand1, operand 2) {
    document.getElementById('operand1').textContent = operand 1;
    document.getElementById('operand2').textContent = operand 2;
    document.getElementById('operator').textContent = "+"; 

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivideQuestion() {

}