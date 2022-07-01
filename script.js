// =================================================================================
// Global Variables
// =================================================================================
const container = document.querySelector(".container")
const singleGrids = document.querySelectorAll(".grid")
const gameOver = false;
const hWinScreen = document.getElementById("hwin")
const aWinScreen = document.getElementById("awin")
const dScreen = document.getElementById("draw")
const hScore = document.getElementById("hscore")

// =================================================================================
// Audio Files
// =================================================================================

const cheers = new Audio('cheers.wav');
const sad = new Audio('sad.wav')
const fighting = new Audio('fighting.wav');
const themesong = new Audio('theme.mp3')


let hCount = document.getElementById("hpoints")
let aCount = document.getElementById("apoints")
let hgameScore = 0;
let agameScore = 0;
let isWinner = false;

let emptyDivs = [];
let picDivs = [];

// =================================================================================
// AI coding- Random Square choosing
// =================================================================================


const compMove = () => {
    if (isWinner === true){
        return 
    } else if (picDivs.length === 9) {
        return
    } else { 
    let randomSquare = Math.floor(Math.random() * emptyDivs.length);
    let chooseSquare = emptyDivs[randomSquare];
    const alienImg = document.createElement("img");
    alienImg.classList.add("aliens");
    alienImg.setAttribute("id", "ufo")
    alienImg.src="alien-token.png";
    chooseSquare.appendChild(alienImg);
    checkPicDiv();
    checkEmptyDiv();
    checkWin();
    }
    console.log(picDivs.length);
}

// =================================================================================
// Human Player Clicks
// =================================================================================

const humMove = () => {

    for (let i = 0; i < singleGrids.length; i++){
    singleGrids[i].addEventListener("click", (e)=> {
        if (isWinner === true) {
            return
        }
        else if (picDivs.length === 9){
            return 
        } else if (singleGrids[i].childNodes.length !== 1) {   
            const humanImg= document.createElement("img");
            humanImg.classList.add("humans");
            humanImg.setAttribute("id", "sapien")
            humanImg.src="human-token.png";
            e.target.appendChild(humanImg);
            emptyDivs.push(e.target)
            checkEmptyDiv();
            checkPicDiv();
            checkWin();
            checkDraw();
            compMove();
            themesong.play();
        } else {
            return
        }
    }) 
  } 
}

humMove();

// =================================================================================
// Checking which squares don't have pictures
// =================================================================================

const checkEmptyDiv = () => {
    emptyDivs = [];
    for (let i = 0; i < singleGrids.length; i++){
        if (singleGrids[i].childNodes.length === 0){
            emptyDivs.push(singleGrids[i])      
        }
    } 
}

// =================================================================================
// Checking which squares do have pictures
// =================================================================================

const checkPicDiv = () => {
    picDivs = [];
    for (let i = 0; i < singleGrids.length; i++){
        if (singleGrids[i].childNodes.length === 1){
            picDivs.push(singleGrids[i])
            
        }
    } console.log(picDivs);
}

// =================================================================================
// Winning Conditions and Function to check for win
// =================================================================================

const winConditions = [
[singleGrids[0], singleGrids[1], singleGrids[2]], 
[singleGrids[0], singleGrids[3], singleGrids[6]], 
[singleGrids[0], singleGrids[4], singleGrids[8]], 
[singleGrids[1], singleGrids[4], singleGrids[7]], 
[singleGrids[2], singleGrids[5], singleGrids[8]], 
[singleGrids[2], singleGrids[4], singleGrids[6]],
[singleGrids[3], singleGrids[4], singleGrids[5]],
[singleGrids[6], singleGrids[7], singleGrids[8]]
]


const checkWin= () => {
    for (let i = 0; i<winConditions.length; i++){
        if(winConditions[i][0].childNodes.length !== 0 && winConditions[i][1].childNodes.length !== 0 && winConditions[i][2].childNodes.length !== 0){
            const a = winConditions[i][0].childNodes[0].getAttribute("src")
            const b = winConditions[i][1].childNodes[0].getAttribute("src")
            const c = winConditions[i][2].childNodes[0].getAttribute("src")
        if (a === b && b === c && a === "human-token.png"){
                console.log("Humans win!");
                hWinScreen.classList.add("show");
                hgameScore += 1
                hCount.textContent = hgameScore;
                cheers.play();
                isWinner = true;
        } else if (a === b && b === c && a === "alien-token.png"){
                console.log("Aliens win!");
                aWinScreen.classList.add("ashow");
                agameScore += 1;
                aCount.textContent= agameScore;
                sad.play();
                isWinner = true;
            }
           }
        }
        return false
    }
    
// =================================================================================
// Draw condition functions
// =================================================================================

const checkDraw = () => {
    if (isWinner === true) {
        return
    } else if (picDivs.length === 9 && isWinner === true) {
        return
    } else if (picDivs.length === 9 && isWinner === false) {
        console.log("It's a draw!");
        dScreen.classList.add("dshow");
        fighting.play(); 
        return
    }
}      

// =================================================================================
// Restarts game by removing pictures from squares
// =================================================================================

const restartGame = () => {
    hWinScreen.classList.remove("show")
    aWinScreen.classList.remove("ashow")
    dScreen.classList.remove("dshow")
    for (let i = 0; i < singleGrids.length; i++) {
    singleGrids[i].innerHTML = ''
    }
    checkEmptyDiv();
    checkPicDiv();
    isWinner = false;
}

// =================================================================================
// Event listeners for the restart buttons
// =================================================================================

document.getElementById("hrestartbutton").addEventListener("click", restartGame)
document.getElementById("arestartbutton").addEventListener("click", restartGame)
document.getElementById("drestartbutton").addEventListener("click", restartGame)


// This is for a 9x9 grid if I have time

// const makeSquare = () => {
//     const div= document.createElement("div")
//     div.classList.add("square")
//     container.appendChild(div)
// }

// const creategrid = (squares) => {
//     for (let i=1; i< squares; i++){
//         console.log(i);
//         makeSquare();
//     }
// }

// creategrid(9)

// const div= document.createElement("div")
//     div.classList.add("square")
//     container.appendChild(div)