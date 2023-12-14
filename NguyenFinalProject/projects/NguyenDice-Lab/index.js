// note: all of the variables are global variables
var die1, die2, dieSum, balance, banner, outcome, die1Name, die2Name, numRolls; // define variables
balance = 0;  // initial value
var die1Image = new Image();
var die2Image = new Image();


function rollDice() {
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    dieSum = die1 + die2;

    // set the dice images based on the roll
    die1Image = document.querySelectorAll("img")[0];
    die1Name = "images/dice" + die1 + ".png";
    die1Image.setAttribute("src", die1Name);

    die2Image = document.querySelectorAll("img")[1];
    die2Name = "images/dice" + die2 + ".png";
    die2Image.setAttribute("src", die2Name);
}

function whoWon() {
    // in h3 report how much money was won or lost and the balance
    var result;
    if (dieSum <= 5){
      result = -5;
      outcome = "You lose, please pay me " + 5 + " dollars.";
      balance -= 5;
    } else if (dieSum >= 9){
      result = 5;
      outcome = "You win, I pay you " + 5 + " dollars.";
      balance += 5;
    } else {
      result = 0;
      outcome = "Its a draw, nobody wins or loses.";
    }

    // Report the outcome:
    banner = die1 + " + " + die2 + " is: " + dieSum;
    document.querySelector("h3").innerHTML = banner + "<br>" + outcome;

    return result;
}

function letsPlay(){
  numRolls = parseInt(document.getElementById("numRolls").value);

  if (isNaN(numRolls) || numRolls <= 0) {
    alert("Please enter a valid number.");
    return;
  }  

  rollResults = [];


  for (var i = 0; i < numRolls; i++) {
    rollDice();
    var result = whoWon();

    rollResults.push(result);
  }

  alert("Rolling " + numRolls + " times!");
  displayResults();
}



function displayResults() {
  var resultString = "Balance for each roll: $";
  for (var i = 0; i < rollResults.length; i++) {
    resultString += rollResults[i] + ", ";
  }

  resultString += "Total Balance: $" + balance;
  alert(resultString);
} 
  

function restart() {
  die1 = die2 = dieSum = balance = banner = outcome = die1Name = die2Name = numRolls = 0;
  document.querySelector("h3").innerHTML = "";
  document.getElementById("balanceDisplay").textContent = balance;


  document.getElementById("die1Image").setAttribute("src", "");
  document.getElementById("die2Image").setAttribute("src", "");
}