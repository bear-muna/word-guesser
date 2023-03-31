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

var highScores = document.querySelector("#high-scores");
var options = document.querySelector("#options");
var start = document.querySelector('#start');
var restart = document.querySelector('#restart');
var randomWord = document.querySelector('#random-word');

var words = ["JAVASCRIPT", "JSON", "DOCUMENT", "CASCADING", "HYPERTEXT"];
var characterArray;

// What do I want to do with the array?
    // I want to pick a random word?
        // For loop with random number out of array.length
    // Change string to character array
        // 
    // Replace some letters in that character array with a space " "
        // splice(x, y, z)
    // Display that new array into the <h1>

function arraySeparate() {
    
    characterArray = words[Math.floor(Math.random() * words.length)].split("");
    console.log(characterArray);
    
    for (let i = 0; i < (Math.floor(Math.random() * characterArray.length)); i++) {
        characterArray.splice(i, 1, "-");
    }
    
    
    console.log(characterArray);
}











// Click any button on the options container to either start or stop the application
options.addEventListener("click", function(event) {

});

arraySeparate();




