const container= document.querySelector(".container")
const grid= document.querySelector(".grid")


// const humanToken= document.querySelector(".humans")
// const toggleHuman= () => {
//     humanToken.classList.toggle(".humans")
// }



const compMove= () => {
const singleGrids= document.querySelectorAll(".grid")
let randomSquare= Math.floor(Math.random() * 9)
let chooseSquare= singleGrids[randomSquare]
return chooseSquare
}

console.log(compMove());













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