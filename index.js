/* Random Number Generators
const min = 45
const max =100

let randomNum = Math.floor(Math.random () * (max-min)) + min
console.log(randomNum)
*/
let min = 1
let max = 5
let randomNum1 
let randomNum2 ;
let randomNum3 ;
const start =document.getElementById('start')
const myButton = document.getElementById('myButton')
const label1 = document.getElementById('label1')
const label2 = document.getElementById('label2')
const label3 = document.getElementById('label3')

myButton.onclick = function(){
    myButton.style.backgroundColor = 'red'
    randomNum1 = Math.floor(Math.random () * max) + min
    randomNum2 = Math.floor(Math.random () * max) + min
    randomNum3 = Math.floor(Math.random () * max) + min
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}
