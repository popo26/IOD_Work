// You have been hired by
// devsInc to create a landing page for their
// new project. They want to support people playing tabletop games
// from home and require a Dice Generator.
// Features:
// The user should be able to use different dice, such as a D6 or a D10
// (number of faces).


function rollDice(num){
    console.log(Math.floor(Math.random() * num) + 1);
}

rollDice(10);





