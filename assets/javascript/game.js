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
    "darthvader",
]
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

// create win counter
// create guess counter
// create variable/array for already guessed letters

var winCounter = 0;
var guessCounter = 12;
var wrong = [];
var selectedLetters = [];
var answer = [];
var image = document.getElementById("image");

//Set the variable 'word' as a random word from within the 'words' array

var word = words[Math.floor(Math.random() * words.length)];

// var word = words[0]; - To test the for loop on the first word of 'words' array only

// Creates the dotted line based on the length of the random word
function initialize() {
    for (var i = 0; i < word.length; i++) {
        if (word[i] == "-") {
            answer += "-";
        }
        else {
        answer += "_";
        }
    }
    guessCounter = 12;
    wrong = [];
    selectedLetters = [];
    image.src = "";

    var wordDiv = document.getElementById("word");
    wordDiv.textContent = answer;

    var winDiv = document.getElementById("wins");
    winDiv.textContent = winCounter;

    var guessDiv = document.getElementById("guesses");
    guessDiv.textContent = guessCounter;

    var wrongDiv = document.getElementById("letters");
    wrongDiv.textContent = wrong;
}
console.log(word);
console.log(answer);

initialize();


   
// create onkeyup function

document.onkeyup = function(event) {
    var userGuess = event.key;
    var selection = "";

    if (alphabet.includes(userGuess)) {
       selectedLetters.push(userGuess); 
        if (word.includes(userGuess)) {
            for (var j = 0; j < word.length; j++) {
                if (selectedLetters.includes(word[j])) {
                    selection += word[j];
                }
                else {
                    selection +="_";
                }
                answer = selection;
            }
            console.log(answer);
            document.getElementById("word").innerHTML = answer;
        }
        else if (!word.includes(userGuess)) {
            guessCounter -= 1;
            wrong.push(userGuess);
            document.getElementById("letters").innerHTML = wrong;
            document.getElementById("guesses").innerHTML = guessCounter;
            console.log(wrong)
        
        }
    }
    else {
            alert("Invalid key, please select a letter")
    }

    if (answer == word) {
        alert("You win!")
        // var img = document.createElement("img");
        image.src = "assets/images/youwin.gif";
        // var src = document.getElementById("image");
        // src.appendChild(img);
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







