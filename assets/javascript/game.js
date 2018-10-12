// create the array of words to be guessed

var words = [
    "lightsaber", 
    "podracing", 
    "ewoks",
    "master",
    "separatist",
    "chancellor",
    "grievous",
    "destroyer",
    "deathstar",
    "padme",
    "amidala",
    "tatooine",
    "palpatine",
    "chewbacca",
    "wookie",
    "coruscant",
    "galaxy",
    "sithlord",
    "force",
    "jedi",
    "skywalker",
    "darth-vader",
]

// create win counter
// create guess counter
// create variable/array for already guessed letters

var winCounter = 0;
var guessCounter = 0;
var guessed = [];

//Set the variable 'word' as a random word from within the 'words' array

var word = words[Math.floor(Math.random() * words.length)];

// var word = words[0]; - To test the for loop on the first word of 'words' array only

// Creates the dotted line based on the length of the random word
var answer = "";
for (var i = 0; i < word.length; i++) {
    if (word[i] == "-") {
        answer += "- ";
    }
    else {
    answer += "_ ";
    }
}
console.log(word);
console.log(answer);

// append variables to their corresponding divs

var wordDiv = document.getElementById("word");
wordDiv.textContent = answer;

var winDiv = document.getElementById("wins");
winDiv.textContent = winCounter;

var guessDiv = document.getElementById("guesses");
guessDiv.textContent = guessCounter;

var wrongDiv = document.getElementById("letters");
wrongDiv.textContent = guessed;
   
// create onkeyup function

document.onkeyup = function(event) {
    var userGuess = event.key;
    if (word.includes(userGuess)) {
        console.log(userGuess);
        for (var j = 0; j < word.length; j++) {
            if (word[j] == userGuess) {
                answer[j] = userGuess;
            }
            else if (word[j] == "-") {
                word[j] = "-"
            }
            else {
                word[j] = "_"
            }
        } 
        console.log(answer);
        // var wordDiv = document.getElementById("word");
        // wordDiv.textContent = answer;
    }
    else {
    guessed.push(userGuess);
    document.getElementById("letters").innerHTML = guessed;
    console.log(guessed)
    }
}
    // within onkeyup function... 
        // create if statement if button clicked is contained in word being guessed...
            // ...add letter to variable "answer" in place of corresponding "_" + DO NOT affect the guess counter
            // ELSE add letter to var of guessed letters + change guess counter -1

        // create if statement if var "answer" = var "word"... 
            // ...then user wins + win counter increases +1 + resets
            // ELSE IF number of guesses = 0
            // ... user loses + resets

    // reset function should reset all values EXCEPT win counter
        // randomly select new word
        // reset guess counter
        // reset already guessed words
    // consider: game reset as game setup as well to initialize the game. Then "call" the function once at the start and at the end







