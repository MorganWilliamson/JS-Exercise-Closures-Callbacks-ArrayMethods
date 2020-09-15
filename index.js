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
 * counter1 is a more enclosed, reusable function. Having count declared outside of function scope for counter2 makes it more liable to cause an error.
 * 2. Which of the two uses a closure? How can you tell?
 * counter1 uses a closure, because it nests another function one layer deeper. 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * counter1 is preferrable in a situation where you need to apply a general counting function, whereas counter2 is a better for a single count increase.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

// Math.round(Math.random() * (2 - 0) + 0); //Generates a random number between 0-2, then rounds it up to a whole number.

// function inning(){
//     homeScore = Math.round(Math.random() * (2 - 0) + 0); //Generates score for Home Team
//     awayScore = Math.round(Math.random() * (2 - 0) + 0); //Generates score for Away Team
//     return `Home: ${homeScore}, Away: ${awayScore}`; //Returns individual scores
// }

// console.log(inning());

function inning(){
    return Math.round(Math.random() * (2 - 0) + 0);
}

inning();

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

/* attempt # 3 */

function finalScore(game, rounds){
  let home = 0;
  let away = 0;
  for (let i = 0; i < rounds; i++){
    home+= game();
    away+= game();
  }
  return {Home: home, Away: away}
}

console.log("Final Score: ", finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`  (finalScore ?)
(2) Callback function `inning`
(2) A number of innings

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

function scoreboard(rulesCb, totalCb, rounds) {
  const container = [ ];
  for(let i = 0; i < rounds; i++){
    container.push({Home: rulesCb(), Away: rulesCb()});
  };
  container.push(totalCb(rulesCb, rounds));

  sum = ;

  return container;
}

console.log("Scoreboard: ", scoreboard(inning, finalScore, 9))


