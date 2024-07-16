// ideas on how to run code:
// choose difficulty level (easy, medium, hard)
// start game button, runs game
// generate a new random number (display an animation while genrating)
// click the place in the tower where you think it belongs
// when placed, generate a new random number (no repeat of first number)
// place that number
// repeat until all 6 blocks are filled
// game over if any are placed incorrectly at any time (modal to display message and offer new game / change difficulty)
// incremement lost game counter
// win game if all numbers are placed correctly (modal to display message and offer new game / change difficulty)
// incrememnt win game counter




// generate a random number and display in the random-num box
// remove button when clicked once
let genButton = document.querySelector('#generate-button');
let randomNum = document.querySelector('.random-num');
let piece = document.querySelectorAll('.piece')

genButton.onclick = function () {
let numA = Math.floor(Math.random() * 100);
randomNum.innerHTML = numA;
genButton.disabled = true;
}








