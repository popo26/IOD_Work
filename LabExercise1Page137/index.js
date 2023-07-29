// You have been hired by
// devsInc to create a landing page for their
// new project. They want to support people playing tabletop games
// from home and require a Dice Generator.
// Features:
// The user should be able to use different dice, such as a D6 or a D10
// (number of faces).

let pickNumber = 0;

function updateFaceDiceNum(){
    pickNumber = Math.floor(Math.random() * pickNumber) + 1;
    document.getElementById("diceFaceNum").innerHTML = "Your dice is " + pickNumber;
}

function userChoice(number){
 pickNumber = number;
 updateFaceDiceNum();
}









