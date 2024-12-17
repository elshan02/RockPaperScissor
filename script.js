var userScore = 0;
var computerScore = 0;         // Global variables
var rounds = 0;

resetScore();

function resetScore(){    // Reset Score button
    document.getElementById("u_score").innerHTML = "Score = 0";
    userScore = 0;
    document.getElementById("c_score").innerHTML = "Score = 0";
    computerScore = 0;
    document.getElementById("rounds").innerHTML = 0;
    rounds = 0;
    document.getElementById("winner").innerHTML = "";
}

function playGame(){      // It is where all magic happens
    var userChoice = findSelection();  // Store the user's selection
    var compChoice = randSelection();  // Store the computer's selection
    console.log(compChoice);

    // Image for user's selection
    document.getElementById("u_img").src = setImage(userChoice);
    // Image for computer's selection 
    document.getElementById("c_img").src = setImage(compChoice);
    // Show who won the battle
    var whoWon = winner(userChoice, compChoice);

    // Keep track of the score
    updateScore(whoWon);
}

function randSelection(){     // Randomize computer's selection
    // 1 - Rock 2 - Paper 3 - Scissors

    var compSelection = Math.floor(Math.random() * 3) + 1;
    var compSelect;

    if(compSelection === 1){
        document.getElementById("c_rock").checked === true;
        compSelect = "rock";
    }
    else if(compSelection === 2){
        document.getElementById("c_paper").checked === true;
        compSelect = "paper";
    }
    else if(compSelection === 3){
        document.getElementById("c_scissor").checked === true;
        compSelect = "scissor";
    }
    return compSelect;
}

function findSelection(){    // Finds out user's selection
    var userSelect;
    if(document.getElementById("u_rock").checked === true){
        userSelect = "rock";
    }
    else if(document.getElementById("u_paper").checked === true){
        userSelect = "paper";
    }
    else if(document.getElementById("u_scissors").checked === true){
        userSelect = "scissor";
    }
    return userSelect;
}

function setImage(choice){     // Decides correct image
    var imageSrc;
    if(choice === "rock"){
        imageSrc = "Images/Rock.jpg";
    }
    else if(choice === "paper"){
        imageSrc = "Images/Paper.jpg";
    }
    else if(choice === "scissor"){
        imageSrc = "Images/Scissors.jpg";
    }
    return imageSrc;
}

function winner(uChoice, computerChoice){
    var result;

    // Tie - 1
    // User - 2
    // Computer - 3

    if(uChoice === computerChoice){
        // Tie
        result = 1;
    }

    else if(uChoice === "rock" && computerChoice === "paper"){
        // Computer wins
        result = 3;
    }
    
    else if(uChoice === "rock" && computerChoice === "scissor"){
        // User wins
        result = 2;
    }

    else if(uChoice === "paper" && computerChoice === "rock"){
        // User wins
        result = 2;
    }

    else if(uChoice === "paper" && computerChoice === "scissor"){
        // Computer wins
        result = 3;
    }

    else if(uChoice === "scissor" && computerChoice === "rock"){
        // Computer wins
        result = 3;
    }

    else if(uChoice === "scissor" && computerChoice === "paper"){
        // User wins
        result = 2;
    }

    return result;
}

function updateScore(winner){
    // Round update:
    document.getElementById("rounds").innerHTML = ++rounds;
    // Winner Results:
    // Tie = 1
    // User = 2
    // Computer = 3
    if (winner === 1){
      //We got a tie
      document.getElementById("winner").innerHTML = "Tie!";
    }
    else if (winner === 2){
      //User won, display winner and update score
      document.getElementById("u_score").innerHTML = "Score: " + (++userScore);
      document.getElementById("winner").innerHTML = "You win!";
    }
    else if (winner === 3){
      //Computer won, display winner and update score
      document.getElementById("c_score").innerHTML = "Score: " + (++computerScore);
      document.getElementById("winner").innerHTML = "You lost!";
    }
  }