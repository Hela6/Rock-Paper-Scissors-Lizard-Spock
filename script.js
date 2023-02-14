
let userChoice, computerChoice;

const choices = ["rock", "paper", "scissors", "lizard", "spock"];


function getUserChoice(c) {
    userChoice = choices[c];
    logPlayerChoice(`You choose ${userChoice}`);

    togglebuttons(true);

    getComputerChoice();

    setTimeout(winOrLoose, 500);

    setTimeout(clearMessages, 2500);

}


function getComputerChoice() {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    logComputerChoice(`computer choose ${computerChoice}`)

}

function winOrLoose() {
    if (userChoice === "rock") {
        switch (computerChoice) {
            case "rock": logger("Tied! Try Again"); break;
            case "paper": logger("Lost! Paper covers Rock"); break;
            case "scissors": logger("Win! Rock crushes scissors"); break;
            case "lizard": logger("Win! Rock crushes lizard"); break;
            case "spock": logger("Lost! Spock vaporizes Rock"); break;
        }
    }

    else if (userChoice === "paper") {
        switch (computerChoice) {
            case "rock": logger("Win! Paper covers Rock"); break;
            case "paper": logger("Tied! Try Again"); break;
            case "scissors": logger("Lost! Scissors cuts Paper"); break;
            case "lizard": logger("Lost! Lizard eats Paper"); break;
            case "spock": logger("Win! Paper disproves Spock"); break;
        }
    }

    else if (userChoice === "scissors") {
        switch (computerChoice) {
            case "rock": logger("Lost! Rock crushes scissors"); break;
            case "paper": logger("Win! Scissors cuts Paper"); break;
            case "scissors": logger("Tied! Try Again"); break;
            case "lizard": logger("Win! Scissors decapitates Lizard"); break;
            case "spock": logger("Lost! Spock smashes Scissors"); break;
        }
    }

    else if (userChoice === "lizard") {
        switch (computerChoice) {
            case "rock": logger("Lost! Rock crushes Lizard"); break;
            case "paper": logger("Win! Lizard eats Paper"); break;
            case "scissors": logger("Lost! Scissors decapitates Lizard"); break;
            case "lizard": logger("Tied! Try Again"); break;
            case "spock": logger("Win! Lizard Poisons Spock"); break;
        }
    }

    else if (userChoice === "spock") {
        switch (computerChoice) {
            case "rock": logger("Win! Spock vaporizes Rock"); break;
            case "paper": logger("Lost! Paper disproves Spock"); break;
            case "scissors": logger("Win! Spock smashes Scissors"); break;
            case "lizard": logger("Lost! Lizard Poisons Spock"); break;
            case "spock": logger("Tied! Try Again"); break;
        }
    }
    togglebuttons(false);
}


function clearMessages() {
    let clearWoL = document.querySelector("#log_win_or_loose p");
    clearWoL.style.backgroundColor = "transparent";
    clearWoL.innerHTML = "";
    let clearCc = document.querySelector("#log_player_choice p");
    clearCc.style.backgroundColor = "transparent";
    clearCc.style.borderColor = "transparent";
    clearCc.innerHTML = "";
    let clearPc = document.querySelector("#log_computer_choice p");
    clearPc.style.backgroundColor = "transparent";
    clearPc.style.borderColor = "transparent";
    clearPc.innerHTML = "";
}

function logger(m) {
    let logMessage = document.querySelector("#log_win_or_loose p");
    logMessage.innerHTML = (m);
    logMessage.style.backgroundColor = "black";
    console.log(m);
}

function logPlayerChoice(m) {
    let logMessage = document.querySelector("#log_player_choice p");
    logMessage.innerHTML = (m);
    logMessage.style.backgroundColor = "lightblue";
    logMessage.style.borderColor = "black";
    console.log(m);
}

function logComputerChoice(m) {
    let logMessage = document.querySelector("#log_computer_choice p");
    logMessage.innerHTML = (m);
    logMessage.style.backgroundColor = "lightblue";
    logMessage.style.borderColor = "black";
    console.log(m);
}

function togglebuttons(b) {
    let buttons = document.querySelectorAll('button');
    buttons.forEach(function (button) {
        button.disabled = b;
    })
}

