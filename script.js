const container= document.querySelector(".container")
const grid= document.querySelector(".grid")
const singleGrids= document.querySelectorAll(".grid")


// const humanToken= document.querySelector(".humans")
// const toggleHuman= () => {
//     humanToken.classList.toggle(".humans")
// }






singleGrids[0].addEventListener("click", (e)=> {
    const humanImg= document.createElement("img");
    humanImg.classList.add("humans");
    humanImg.src="https://img.freepik.com/free-psd/young-businessman-3d-cartoon-avatar-portrait_627936-22.jpg?t=st=1655699814~exp=1655700414~hmac=9399959a481d90b096474bf69e70626be0565a898b79db40a48be4da1c669aab&w=826";
    e.target.appendChild(humanImg)
     })
    




const compMove= () => {
const singleGrids= document.querySelectorAll(".grid")
let randomSquare= Math.floor(Math.random() * 9)
let chooseSquare= singleGrids[randomSquare]
return chooseSquare
}

// console.log(compMove());













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