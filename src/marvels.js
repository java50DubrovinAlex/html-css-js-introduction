//references to HTML elements
const questionElement = document.getElementById("question");
const wordInputElement = document.getElementById("word-input");
const remainedLettersElement = document.getElementById("letters-remained");
const letterInputElement = document.getElementById("letter-input");
const wordElement = document.querySelector(".word");
const resultMessage = document.getElementById("result-message");
const playAgain = document.getElementById("play-again");
let wordLettersElement;
const guessButton = document.getElementById("guess-button");
const questionsWords = [["The best soccer player in the world?", "Messi"], ["Where was Charlie Chaplin born?","London"], 
["What is the capital of Scotland?","Edinburg"], ["What is the capital of Wales?","Cardiff"]];
// let currentIndex = 0;
let remainedLettersNumber;
let numOfCurGame = 0;
//functions
function startGame(){
    guessButton.style.display = "inline";
    letterInputElement.readOnly = false;
    wordInputElement.value = '';
    wordInputElement.readOnly = true;
    questionElement.innerHTML = questionsWords[numOfCurGame][0];
    playAgain.style.display ='none'
    resultMessage.innerHTML ='';
    wordElement.innerHTML = getWordDivs(questionsWords[numOfCurGame][1]);
    remainedLettersNumber = Math.round (questionsWords[numOfCurGame][1].length / 3);
    wordLettersElement = document.querySelectorAll(".letter");
    remainedLettersElement.innerHTML = `You can open ${remainedLettersNumber} letters`;
}

function getWordDivs(questionsWords) {
    //TODO
    let res="";
    for(let i = 0 ; i < questionsWords.length; i++){
        res = res + `<div class="letter"></div>`
    }
    return res;
}

function checkWord() {
  finishGame(questionsWords[numOfCurGame][1].toLowerCase() === wordInputElement.value.toLowerCase() ? true : false);
  wordInputElement.readOnly = true;
}

function checkLetterInWord (array, inputLetter){
    if(!inputLetter){
    for(let i = 0; i < array.length; i++){
        wordLettersElement[i].innerHTML = array[i];
        wordLettersElement[i].style.background = "white";  
    }
}else {
    for(let i = 0; i < array.length; i++){
        if(inputLetter.toLowerCase() == array[i].toLowerCase()){
            wordLettersElement[i].innerHTML = array[i];
            wordLettersElement[i].style.background = "white";
            remainedLettersNumber--;
        }
    }
}
}

function processLetter() {
    //TODO
    if(!remainedLettersNumber){
        letterInputElement.readOnly = true;
    } else {
        checkLetterInWord (questionsWords[numOfCurGame][1], document.getElementById("letter-input").value);
    }
        remainedLettersElement.innerHTML = `You can open ${(remainedLettersNumber < 0) ? remainedLettersNumber = 0 : remainedLettersNumber}
        ${remainedLettersNumber > 1 || remainedLettersNumber == 0 ? "letters" : "letter"}`;
        letterInputElement.value = "";
}

function takeChance() {
    //TODO
    wordInputElement.readOnly=false;
    letterInputElement.readOnly = true;
}

function finishGame(winOrLose) {
    //TODO
    checkLetterInWord(questionsWords[numOfCurGame][1]);
    numOfCurGame++;
    numOfCurGame > questionsWords.length - 1 ? numOfCurGame = 0 : numOfCurGame;
    playAgain.style.display = "flex"
    winOrLose ? resultMessage.innerHTML= "*** YOU WIN !!! ***" : resultMessage.innerHTML= "*** YOU LOSE !!! ***";
    guessButton.style.display = "none";
}

//actions
startGame();