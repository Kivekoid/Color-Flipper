
const button = document.getElementById("btn");
const box = document.getElementById("box");
const hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"] // Hexadecimal // Hexadecimal

button.addEventListener("click",function(){
    let hexColor = "#";
    let hexColor2 = "#";
    for(let i=0;i<6;i++){
        hexColor += hex[getRandomNumber()];
        hexColor2 += hex[getBoxRandomNumber()];
    }
    document.body.style.backgroundColor = hexColor;
    box.style.backgroundColor = hexColor2;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}
function getBoxRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}