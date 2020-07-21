// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();
console.log('Counter1: ', counter1);


// counter2 code
let count = 0;

function counter2() {
  return count++;
}

console.log('Counter2: ', counter2(), count);

/* Task 1:
  1. The difference between counter1 and counter2 is that the variable count is global for counter2 while counter1 is only accessible through the function

  2. counter2 uses closure because the function is utilizing a variable created outside of its scope.

  3. A scenario in which counter1 would be preferrable is if you want the value of count to reset every time the web page is reloaded. The value is kept only as the function is called. 
  Counter2's count variable is global and the value of it is continually incrementing. 
*/


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  return Math.round(Math.random() * 2);
}

console.log('Task 2: ', inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(score, num) {
  let scores = {
    "Home": 0,
    "Away": 0,
  };

  for(let i = 0; i < num; i++) {
    scores.Home += score();
    scores.Away += score();
  }
  return scores;
}

console.log('Task 3: ', finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`/'getFinalScore
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(getInningScore, inning, numInnings) {
  let finalScores = {
    "Home": 0,
    "Away": 0,
  }

  for(let i = 1; i <= numInnings; i++) {
    let scores = getInningScore(inning, 1);

    finalScores.Home += scores.Home;
    finalScores.Away += scores.Away;

    console.log(`Inning ${i}: Away ${finalScores.Away} - Home ${finalScores.Home}`);
  }

  return `Final Score: Away ${finalScores.Away} - Home ${finalScores.Home}`;
}

console.log('Task 4: ', scoreboard(finalScore, inning, 9));



// walk-through solution from zoom call with everyone 
// come back and compare to your solution
/*
function inning() {
  return Math.floor(Math.random() *3);
};

const finalScore = function(func, num) {
  let score = {
    'Home':0,
    'Away':0
  }

  for(let i = 0; i < num; i++) {
    score.Home += func();
    score.Away += func();
  }

  return score;
}


function scoreboard(inningSB, inning, num) {
  let total = {
    'Home':0,
    'Away':0
  }

  for(let i = 0; i < num; i++) {
    let score = inningSB(inning, 1);

    total.Home += score.Home;
    total.Away += score.Away;

    console.log(`Inning ${i}: Away ${score.Away} - Home ${score.Home}`);
  }

  return `Final Score ${i}: Home ${total.Home} - Away ${total.Away}`;
}

console.log(scoreboard(finalScore, inning, 9)); */


/* 2b. 

  1. Closure is when you have a function reaching outward to a variable. 

  2a. Closure happens in this function when the nest function is reaching toward the argument passed through the outside function. You can tell this because the inner function is utilzing a component passed through the function on the outside. 

  2b. The output will always be a number between 1 and 6. What can change is the number output from the function. Dan's roll will always run Math.random

  2c. The lexical scope of newRoll is personalDice.

*/ 


function personalDice(name){
  return function(){
      // generate random number between 1 and 6
    const newRoll = Math.floor(Math.random() * 6);
    console.log(`${name} rolled a ${newRoll}`)
  }
}

const dansRoll = personalDice("Dan");

const zoesRoll = personalDice("Zoe");


dansRoll();
dansRoll();