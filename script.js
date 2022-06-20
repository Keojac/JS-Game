const container= document.querySelector(".container")
const singleGrids= document.querySelectorAll(".grid")

const humMove= () => {

for (let i=0; i < singleGrids.length; i++){
singleGrids[i].addEventListener("click", (e)=> {
    const humanImg= document.createElement("img");
    humanImg.classList.add("humans");
    humanImg.src="https://img.freepik.com/free-psd/young-businessman-3d-cartoon-avatar-portrait_627936-22.jpg?t=st=1655699814~exp=1655700414~hmac=9399959a481d90b096474bf69e70626be0565a898b79db40a48be4da1c669aab&w=826";
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
    alienImg.src="https://img.freepik.com/free-vector/modern-ufo-abduction-concept-with-flat-design_23-2147912193.jpg?t=st=1655719046~exp=1655719646~hmac=6b0f71fc9d5f590d6697ac64192751309c399d428a32e6e99dd3825d5d53d2ab&w=826";
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