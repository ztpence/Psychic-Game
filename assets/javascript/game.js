// create variables to define game (like rock paper scissors)
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;

//create an array of random choices the computer can choose from
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
   
//need to create a way to hold players guesses upto 9 (array maybe)
var playersGuesses = [];

console.log(wins, losses, guesses, guessesLeft)
//need to create an on key up event function to trigger letter guesses (math random function but for letters may help)
 document.onkeyup = function(event){
    console.log("key pressed");

    var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
     console.log(playerGuess);
    var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];

    console.log(computerGuess);
     //need way to log players guesses
     
     playersGuesses.push(playerGuess);

     console.log(playersGuesses, playerGuess);
    
     if (playerGuess == computerGuess) {
         console.log("win");
        wins++;
        guessesLeft = 9; 
        playersGuesses.length = 0; 
    }
    else if (guessesLeft == 0){
     console.log("losses");
        losses++;
        guessesLeft = 9;
        playersGuesses.length = 0;
        
    }
    else if (playerGuess !== computerGuess){
        guessesLeft--;
        console.log("third option");
    }  

    var html = "<h1>The Psychic Game</h1><br>" + "<h2>Guess What Letter I'm Thinking Of</h2><br>" + "<div> Wins: " + wins + "<div><br>" +"<div> Losses:"+ losses + "<div><br>" + "<div> Guesses Left:"+ guessesLeft + "<div><br>"+"<div> Your Guesses So Far:"+ playersGuesses + "<div>";
        document.querySelector("#Psychic-Game").innerHTML = html
        console.log(html)


 }
//need to create if else statements to define game rules and functions (maybe a loop is needed) 
    //set win loss rules (rock paper sciccors)
    //also a reset function of some kind will be needed to set game back when guesses are up

    //need to make a running total of wins and losses (rock paper siccors may help)

    //need to interact somehow with html lines (maybe innerHTML method) 


