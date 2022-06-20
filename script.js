const container= document.querySelector(".container")
const singleGrids= document.querySelectorAll(".grid")

const humMove= () => {

for (let i=0; i < singleGrids.length; i++){
singleGrids[i].addEventListener("click", (e)=> {
    const humanImg= document.createElement("img");
    humanImg.classList.add("humans");
    humanImg.src="human token.png";
    e.target.appendChild(humanImg)
    }) 
 }
}

humMove();

const compMove= () => {
let randomSquare= Math.floor(Math.random() * 9)
let chooseSquare= singleGrids[randomSquare]
const alienImg= document.createElement("img");
    alienImg.classList.add("aliens");
    alienImg.src="alien token.png";
    chooseSquare.appendChild(alienImg)
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