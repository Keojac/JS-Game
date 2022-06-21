const container= document.querySelector(".container")
const singleGrids= document.querySelectorAll(".grid")
const gameOver= false

let emptyDivs= []
let picDivs= []


const compMove= () => {
    if (picDivs.length === 9){
        return gameOver === true
    } else { 
let randomSquare= Math.floor(Math.random() * emptyDivs.length)
let chooseSquare= emptyDivs[randomSquare]
const alienImg= document.createElement("img");
    alienImg.classList.add("aliens");
    alienImg.src="alien-token.png";
    chooseSquare.appendChild(alienImg);
    picDivs.push(chooseSquare)
    checkEmptyDiv();
    }
}


const humMove= () => {

    for (let i=0; i < singleGrids.length; i++){
    singleGrids[i].addEventListener("click", (e)=> {
        if (picDivs.length === 9){
            return gameOver === true
        } else {   
        const humanImg= document.createElement("img");
        humanImg.classList.add("humans");
        humanImg.src="human-token.png";
        e.target.appendChild(humanImg);
        emptyDivs.push(e.target)
        checkEmptyDiv();
        compMove();
        checkWin();
        }
        }) 
     } 
    }
    humMove();
    


const moveOptions= () => {
    for (let i=0; i < singleGrids.length; i++){
        singleGrids[i].addEventListener("click", (e)=> {
       picDivs.push(singleGrids[i]);
       console.log(picDivs);
    }
 )}
}
    moveOptions();

const checkEmptyDiv = () => {
    emptyDivs= [];
    for (let i=0; i < singleGrids.length; i++){
        if (singleGrids[i].childNodes.length === 0){
            emptyDivs.push(singleGrids[i])
            
        }
} console.log(emptyDivs);
}

const winConditions = [[singleGrids[0], singleGrids[1], singleGrids[2]], [singleGrids[0], singleGrids[3], singleGrids[6]], [singleGrids[0], singleGrids[4], singleGrids[8]], 
[singleGrids[1], singleGrids[4], singleGrids[7]], 
[singleGrids[2], singleGrids[5], singleGrids[8]], [singleGrids[2], singleGrids[4], singleGrids[6]],
[singleGrids[3], singleGrids[4], singleGrids[5]],
[singleGrids[6], singleGrids[7], singleGrids[8]]]

const checkWin= () => {
    for (let i=0; i<winConditions.length; i++){
        // if (winConditions[i] === picDivs){
        //     console.log("You are the winner");
        if(winConditions[i][0].childNodes.length !== 0 && winConditions[i][1].childNodes.length !== 0 && winConditions[i][2].childNodes.length !== 0){
        const a= winConditions[i][0].childNodes[0].getAttribute("src")
        const b= winConditions[i][1].childNodes[0].getAttribute("src")
        const c= winConditions[i][2].childNodes[0].getAttribute("src")
        if (a === b && b === c){
            if (a === "human-token.png"){
                console.log("Humans win!");
                return gameOver === true 
             } else if (a === "alien-token.png"){
                console.log("Aliens win!");
                return gameOver === true
           }
        }
        }
    } 
    }

const checkDraw= () => {
    if (picDivs.length === 9){
        console.log("It's a draw!");
        return gameOver === true;
    }
}      
    





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