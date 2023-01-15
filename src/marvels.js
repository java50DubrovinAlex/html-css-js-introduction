//references to HTML elements
const questionElement = document.getElementById("question");
const wordInputElement = document.getElementById("word-input");
const remainedLettersElement = document.getElementById("letters-remained");
const letterInputElement = document.getElementById("letter-input");
const wordElement = document.querySelector(".word");
const resultMessage = document.getElementById("result-message");
const playAgain = document.getElementById("play-again");
let wordLettersElement;
const questionsWords = [["The best soccer player in the world?", "Messi"], ["Where was Charlie Chaplin born?","London"], ["What is the capital of Scotland?", "Edinburg"], ["What is the capital of Wales?","Cardiff"]];
// let currentIndex = 0;
let initialLettersNumber;
let remainedLettersNumber;
let numOfCurGame = 0;
//functions
 

function startGame(){
    letterInputElement.readOnly = false;
    wordInputElement.value = '';
    wordInputElement.readOnly = true;
    questionElement.innerHTML = questionsWords[numOfCurGame][0];
    playAgain.style.display='none'
    resultMessage.innerHTML='';
    wordElement.innerHTML = getWordDivs(questionsWords[numOfCurGame][1]);
    remainedLettersNumber = Math.round (questionsWords[numOfCurGame][1].length / 3);
    wordLettersElement = document.querySelectorAll(".letter");
    remainedLettersElement.innerHTML = `letters remained ${remainedLettersNumber}`;
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
  //TODO
  
  let isWin = questionsWords[numOfCurGame][1].toLowerCase() === wordInputElement.value.toLowerCase() ? true : false;
  finishGame(isWin);
    
  
  wordInputElement.readOnly = true;
}
function processLetter() {
    //TODO
    const answerWord = questionsWords[numOfCurGame][1];
    let inputLetter = document.getElementById("letter-input").value;
    if(!remainedLettersNumber){
        letterInputElement.readOnly = true;
    } else {
        
        for(let i = 0; i < questionsWords[numOfCurGame][1].length; i++){
            if(inputLetter.toLowerCase() == answerWord[i].toLowerCase()){
                wordLettersElement[i].innerHTML = answerWord[i];
                wordLettersElement[i].style.background = "white";
                remainedLettersNumber--;
            }
        }
        
    }
    remainedLettersElement.innerHTML = `letters remained ${(remainedLettersNumber < 0) ? remainedLettersNumber = 0 : remainedLettersNumber}`;
    letterInputElement.value = "";

}
function takeChance() {
    //TODO
    wordInputElement.readOnly=false;
    letterInputElement.readOnly = true;


}
function finishGame(winOrLose) {
    //TODO
   
    const answerWord = questionsWords[numOfCurGame][1];
    for(let i = 0; i < answerWord.length; i++){
        wordLettersElement[i].innerHTML = answerWord[i];
        wordLettersElement[i].style.background = "white";
    }
    numOfCurGame++;
    if(numOfCurGame > questionsWords.length - 1){
        numOfCurGame = 0;
    }
    playAgain.style.display = "flex"
    
    winOrLose ? resultMessage.innerHTML= "*** YOU WIN !!! ***" : resultMessage.innerHTML= "*** YOU LOSE !!! ***";
    
    
}

//actions
startGame();