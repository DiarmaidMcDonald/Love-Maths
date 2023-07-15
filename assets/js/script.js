
document.addEventListener("DOMContentListener", function () ) {

    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", fucntion() ) {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
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

    /**
     * Check the answer against the first element in
     * the returned calculateCorrectAnswer array
     */

function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculateCorrectAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right! :D");
    } else {
        alert(`Awww... you answered ${userAnswer}. The correct answer was ${calculateCorrectAnswer[0]}!`);
    }

    runGame(calculatedAnswer[1]);

}

/**
 * Get the operands (the numbers) and the operators (plus, mius, etc)
 * directly from the DOM, and returns the correct answer.
 */
function calculateCorrectAnswer() {
      let operand1 = parseInt(documnet.getElementById('operand1').innerText);
      let operand2 = parseInt(documnet.getElementById('operand2').innerText);
      let operator = documnet.getElementById("operator").innerText;

      if(operator === "+") {
        return[operand1 + operand2, "addition"];
      } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
      }
      }
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