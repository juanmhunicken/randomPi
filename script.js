//import "https://cdnjs.cloudflare.com/ajax/libs/mathjs/9.4.3/math.js";

let coprimes = 0;
let rolls = 0;

function rollDice(numRolls) {
  const dieSize = document.getElementById("diceSize").value;

  for (let i = 0; i < numRolls; i++) {
    const die1 = Math.floor(Math.random() * dieSize) + 1;
    const die2 = Math.floor(Math.random() * dieSize) + 1;
    document.getElementById(
      "lastRoll"
    ).innerHTML = `Last roll: Die 1 = ${die1} // Die 2 = ${die2}`;

    if (math.gcd(die1, die2) === 1) {
      coprimes++;
    }
    rolls++;
  }

  main();
}

function getPi(coprimes, rolls) {
  return Math.sqrt(6 / (coprimes / rolls));
}

function main() {
  let pi = getPi(coprimes, rolls);
  
  // Prints number of rolls
  document.getElementById(
    "totalRolls"
  ).innerHTML = `The dice have been rolled ${rolls} times`;

  // Prints number of cofactors and coprimes
  document.getElementById(
    "coprimesCofactors"
  ).innerHTML = `So far there have been ${coprimes} coprimes and ${
    rolls - coprimes
  } cofactors.`;

  // Prints pi estimation
  document.getElementById("result").innerHTML = `Pi is approximately ${pi}`;
}

main();
