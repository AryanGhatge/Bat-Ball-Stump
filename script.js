let score = {
    win: 0,
    tie: 0,
    lost: 0
};

function playerChoose(cvalue) {
    let computerChoice = computerChoose();
    alert(`You have chosen ${cvalue}!`);
    alert(`Computer chose ${computerChoice}!`);
    determineWinner(cvalue, computerChoice);
}

function computerChoose() {
    let compchoice = Math.random() * 3;
    if (compchoice > 0 && compchoice <= 1) {
        return 'Bat';
    } else if (compchoice > 1 && compchoice <= 2) {
        return 'Ball';
    } else {
        return 'Stump';
    }
}

function determineWinner(playerChoice, computerChoice) {
    if (computerChoice === playerChoice) {
        score.tie++;
        alert(`It's a Tie!\nYou both chose ${playerChoice}.`);
    } else if (
        (playerChoice === 'Bat' && computerChoice === 'Ball') ||
        (playerChoice === 'Ball' && computerChoice === 'Stump') ||
        (playerChoice === 'Stump' && computerChoice === 'Bat')
    ) {
        score.win++;
        alert(`You Win!\nComputer chose ${computerChoice}.`);
    } else {
        score.lost++;
        alert(`You Lose!\nComputer chose ${computerChoice}.\nBetter Luck Next Time!`);
    }

    updateScoreDisplay();
}

function updateScoreDisplay() {
    document.getElementById('win_count').textContent = score.win;
    document.getElementById('tie_count').textContent = score.tie;
    document.getElementById('lost_count').textContent = score.lost;
}
