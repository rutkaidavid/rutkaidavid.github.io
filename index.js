let win = 0;
let lose = 0;
let draw = 0;

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

let playerChoice = "";
let computerChoice = "";

let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScore");
let drawScore = document.getElementById("drawScore");

playerScore.innerHTML = win;
computerScore.innerHTML = lose;
drawScore.innerHTML = draw;

let computerplay = () => {
  let choices = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * 3);
  return choices[random];
}

let playerplay = () => {
    rock.addEventListener("click", () => {
        playerChoice = "rock";
        selectwinner();
    });
    paper.addEventListener("click", () => {
        playerChoice = "paper";
        selectwinner();
    });
    scissors.addEventListener("click", () => {
        playerChoice = "scissors";
        selectwinner();
    });
}

let selectwinner = () => {
    computerChoice = computerplay();
    if (playerChoice==="rock" && computerChoice==="scissors") {
       win++;
       playerScore.innerHTML = win;
    }
    else if (playerChoice==="rock" && computerChoice==="paper") {
       lose++;
       computerScore.innerHTML = lose;
    }
    else if (playerChoice==="paper" && computerChoice==="rock") {
       win++;
       playerScore.innerHTML = win;
    }
    else if (playerChoice==="paper" && computerChoice==="scissors") {
       lose++;
       computerScore.innerHTML = lose;
    }
    else if (playerChoice==="scissors" && computerChoice==="paper") {
       win++;
       playerScore.innerHTML = win;
    }
    else if (playerChoice==="scissors" && computerChoice==="rock") {
       lose++;
       computerScore.innerHTML = lose;
    }
    else if(playerChoice===computerChoice) {
       draw++;
       drawScore.innerHTML = draw;
    }
}
playerplay();
