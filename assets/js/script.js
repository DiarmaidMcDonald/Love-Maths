document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }
});
runGame("addition");



/** 
 * The main game "loop", called when the script is first loaded
 * and after the users answer has been processed
 */
function runGame(gameType) {

    // Creates two random numbers between 1 and 25.
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
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
        incrementScore();
    } else {
        alert(`Awww... you answered ${userAnswer}. The correct answer was ${calculateCorrectAnswer[0]}!`);
        incrementWrongAnswers();
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

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}

/**
 * The the correct score from the DOM and increments it by 1
 */

function incrementScore() {

    let oldScore = parseInt(documnet.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

/**
 * The the correct tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswers() {

    let oldScore = parseInt(documnet.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}

function displayDivideQuestion() {

}