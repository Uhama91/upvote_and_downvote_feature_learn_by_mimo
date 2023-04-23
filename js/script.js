// Initialize the vote counter
let counter = 3;

// Function to increment the vote counter
function upvote(){
    counter = counter + 1;
    // Update the votes count displayed on the page
    document.getElementById("votes")
    .innerHTML = counter + " votes";
}

// Function to decrement the vote counter
function downvote(){
    counter = counter - 1;
    // Update the votes count displayed on the page
    document.getElementById("votes")
    .innerHTML = counter + " votes";
}
