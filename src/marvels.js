//references to HTML elements
const questionElement = document.getElementById("question");
const wordInputElement = document.getElementById("word-input");
const remainedLettersElement = document.getElementById("letters-remained");
const letterInputElement = document.getElementById("letter-input");
const wordElement = document.querySelector(".word");
const resultMessage = document.getElementById("result-message");
const playAgain = document.getElementById("play-again");
let wordLettersElement;
//global variables
const questionsWords = [["question1", "answer1"], ["question2","answer2"]];
// let currentIndex = 0;
let initialLettersNumber;
let remainedLettersNumber;
//functions
let numOfCurGame = 0; 
numOfCurGame = finishGame() ? numOfCurGame++ : numOfCurGame;
function startGame(){
    wordInputElement.value = '';
    wordInputElement.readOnly = true;
    questionElement.innerHTML = questionsWords[numOfCurGame][0];
    playAgain.style.display='none'
    resultMessage.innerHTML='';
    wordElement.innerHTML = getWordDivs(questionsWords[numOfCurGame][1]);

}

function getWordDivs(questionsWords) {
    //TODO
    let res;
    for(let i = 0 ; i < questionsWords.lenght; i++){
        res = res + `<div class="letter"></div>`
    }
    wordLettersElement = document.querySelectorAll(".letter");
}
function checkWord() {
  //TODO
}
function processLetter() {
    //TODO
}
function takeChance() {
    //TODO
}
function finishGame() {
    //TODO
}
//actions
startGame();