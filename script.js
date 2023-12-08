const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const resultText = document.querySelector('#resultText');
const choiceBtns = document.querySelectorAll('.choiceBtns');
let player;
let computer;
let result;

choiceBtns.forEach(button =>
    button.addEventListener('click', () => {
        player = button.textContent;
        computer = computerPlay();

        playerText.textContent = `Player:  ${player}`;
        computerText.textContent = `Computer:  ${computer}`;
        resultText.textContent = checkWinner();
    })
);

function computerPlay() {
    const Random = Math.floor(Math.random() * 3) + 1;
    switch (Random) {
        case 1:
            return 'Rock';
            break;
        case 2:
            return 'Paper';
            break;
        case 3:
            return 'Scissors';
            break;
    }
}

function checkWinner() {
    if (player == computer) {
        return 'Draw';
    } else if (computer == "Rock") {
        return (player == "PAPER") ? "You Win" : "You Lose";
    } else if (computer == "Paper") {
        return (player == "SCISSORS") ? "You Win" : "You Lose";
    } else if (computer == "Scissors") {
        return (player == "Rock") ? "You Win" : "You Lose";
    }
}