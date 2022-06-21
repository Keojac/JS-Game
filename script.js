const container= document.querySelector(".container")
const singleGrids= document.querySelectorAll(".grid")


let emptyDivs= []
let picDivs= []
const compMove= () => {
    
let randomSquare= Math.floor(Math.random() * emptyDivs.length)
let chooseSquare= emptyDivs[randomSquare]
const alienImg= document.createElement("img");
    alienImg.classList.add("aliens");
    alienImg.src="alien token.png";
    chooseSquare.appendChild(alienImg);
    picDivs.push(chooseSquare)
    checkEmptyDiv();
}


const humMove= () => {

    for (let i=0; i < singleGrids.length; i++){
    singleGrids[i].addEventListener("click", (e)=> {
        const humanImg= document.createElement("img");
        humanImg.classList.add("humans");
        humanImg.src="human token.png";
        e.target.appendChild(humanImg);
        emptyDivs.push(e.target)
        checkEmptyDiv();
        compMove();
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



// console.log(picDivs);




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