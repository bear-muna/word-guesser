// Psuedo Code
// Make a container for the guesser
    // Guesser will have a random word
        // Maybe word was already stored somewhere?
            // Stored in an array?
    // Word will be displayed onto the screen
        // Some letters will be displayed
        // Some letters will have to be guessed by user
    // To guess letter, keydown/keyup events must occur
        // How to match the correct key?
            // Property within the event object?
        // Match event.key?
            // Conditional statements used
// Make a container for the counter
    // Set time limit to guess the word
    // If timer ends before word is guessed correctly ... 
        // Game ends
    // If word is guessed correctly before time ends ...
        // Timer resets
        // New word is displayed
        // Score is updated
// Score counter
    // Everytime new word is guessed correctly
        // Score++
    // If game over
        // Score displayed onto high scores
    // Possibly store in local storage? 

// TODO: EDGE CASE: WHAT HAPPENS WHEN A WORD HAS MORE THAN ONE OF THE SAME LETTERS



var highScores = document.querySelector("#high-scores");
var options = document.querySelector("#options");
var start = document.querySelector('#start');
var restart = document.querySelector('#restart');
var randomWord = document.querySelector('#random-word');
var timer = document.querySelector('#timer');

var words = ["JAVASCRIPT", "JSON", "DOCUMENT", "CASCADING", "HYPERTEXT"];
var characterArray = [];
var dashedArray = [];
var displayWord;
var secondsLeft = 30;
var wins = 0;
var losses = 0;

// What do I want to do with the array?
    // I want to pick a random word?
        // For loop with random number out of array.length
    // Change string to character array
        // 
    // Replace some letters in that character array with a space " "
        // splice(x, y, z)
    // Display that new array into the <h1>

function showWord(x) {
    displayWord = x.join("");
    randomWord.textContent = displayWord;
}

function arraySeparate() {
    
    characterArray = words[Math.floor(Math.random() * words.length)].split("");
    console.log(characterArray);
    
    for (let i = 0; i < characterArray.length; i++) {
        dashedArray.push("-");
    }

    showWord(dashedArray);
    
};

// Keydown event to confirm pressing a key to match the word

document.addEventListener("keydown", function(event) {
    var key = event.key.toUpperCase();

    if (characterArray.includes(key)) {
        var index = characterArray.indexOf(key);
        dashedArray[index] = key;
        showWord(dashedArray);
    }
    
    console.log(index);
    console.log(event);
    console.log(dashedArray);
});

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds remaining!";

        if (secondsLeft > 0 && dashedArray === characterArray) {
            secondsLeft = 30;
            wins++;
            arraySeparate();
            showWord(dashedArray);
        }
        
        if (secondsLeft === 0 && !(dashedArray === characterArray)) {
            clearInterval(timerInterval);
            showWord(characterArray);
            losses++;
        }


    }, 1000);
};











// Click any button on the options container to either start or stop the application
options.addEventListener("click", function(event) {

});

arraySeparate();
setTime();




