// ideas on how to run code:
// choose difficulty level (easy, medium, hard)
// start game button, runs game
// generate a new random number (display an animation while genrating)
// click the place in the tower where you think it belongs
// when placed, generate a new random number (no repeat of first number)
// place that number
// check if the order in the array is correct (newTowerArray, remove any undefined entries, sort array numerically to give sortedArray, compare the two. 
    //If the arrays are the same then carry on game, if theyre different highlight last go and game over)
// repeat until all 6 blocks are filled
// game over if any are placed incorrectly at any time (modal to display message and offer new game / change difficulty)
// incremement lost game counter
// win game if all numbers are placed correctly (modal to display message and offer new game / change difficulty)
// incrememnt win game counter



let genButton = document.querySelector('#generate-button');
let randomNum = document.querySelector('.random-num');
let box = document.querySelector('.piece')
let boxA = document.querySelector('.piece-1')
let numA = Math.floor(Math.random() * 100);
let towerArray = [...Array(6)].fill(0);

// generate a random number and display in the random-num box
// remove button when clicked once

genButton.onclick = function () {
randomNum.innerHTML = numA;
genButton.disabled = true; //disable generate button after clicking and before the number is placed
}

//put the number into the chosen box


box.onclick = function() {
    console.log('you clicked') // test linked
    boxA.innerHTML = numA // fill the clicked button with the random generated number
    towerArray[0] = numA // insert the number into the array
    console.log(towerArray)
    genButton.disabled = false // enable button use again...
    genButton.innerHTML = `Next Number` // change genButton text 
}












