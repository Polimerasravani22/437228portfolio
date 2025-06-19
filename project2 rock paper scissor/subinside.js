let resultDisplay = document.getElementById("resultDisplay");
let playerDisplay = document.getElementById("play-choice");
let computerDisplay = document.getElementById("computer-choice");
let btn = ['Rock', 'Paper', 'Scissors'];

function Game(playerChoice) {
    let computerChoice = btn[Math.floor(Math.random() * 3)];

    let getResult = (playerChoice, computerChoice) => {
        return playerChoice === computerChoice ? "It's Tie!😵" :
            (playerChoice === "Paper" && computerChoice === "Rock") ||
            (playerChoice === "Scissors" && computerChoice === "Paper") ||
            (playerChoice === "Rock" && computerChoice === "Scissors") ?
            "You Win🏆" :
            "You lose😓";
    };

    let result = getResult(playerChoice, computerChoice);
    resultDisplay.textContent = result;
    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;

    resultDisplay.style.backgroundColor =
        result === "It's Tie!😵" ? "blue"
        : result === "You Win🏆" ? "green"
        : "red";

    resultDisplay.style.border = "2px solid transparent";
    resultDisplay.style.color = "white";
}
