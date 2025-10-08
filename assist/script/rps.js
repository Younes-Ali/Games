let loudingSpan = document.querySelector('#louding');
let computerImg = document.querySelector('.main img:first-child');
let userImg = document.querySelector('.main img:last-child');

let choices = ['rock', 'paper', 'scissors'];
let userChoice;
let computerChoice;
let winner;

let imgMap = {
    rock: { computer: 'rock2.png', user: 'rock1.png' },
    paper: { computer: 'paper2.png', user: 'paper1.png' },
    scissors: { computer: 'scissors2.png', user: 'scissors1.png' }
};

let checkWin = () => {
    computerImg.src = `../images/rps/${imgMap[computerChoice].computer}`;
    if (userChoice === computerChoice) {
        winner = 'Draw';
        loudingSpan.style.color = 'white';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        winner = 'You win!';
        loudingSpan.style.color = 'yellow';
    } else {
        winner = 'Computer wins!';
        loudingSpan.style.color = '#5e0101ff';
    }
    loudingSpan.innerHTML = winner;
    loudingSpan.classList.add('animate__fadeInUp');
    setTimeout(() => loudingSpan.classList.remove('animate__fadeInUp'), 500);
}

let louding = () => {
    let counter = 3;
    loudingSpan.innerHTML = counter;
    loudingSpan.classList.add('animate__fadeInUp');
    setTimeout(() => loudingSpan.classList.remove('animate__fadeInUp'), 500);
    let interval = setInterval(() => {
        counter--;
        loudingSpan.innerHTML = counter;
        loudingSpan.classList.add('animate__fadeInUp');
        setTimeout(() => loudingSpan.classList.remove('animate__fadeInUp'), 500);
        if (counter <= 0) {
            clearInterval(interval);
            checkWin();
        }
    }, 1000);
}

let chooseWapoon = (input) => {
    userChoice = input;
    computerChoice = choices[Math.floor(Math.random() * 3)];
    userImg.src = `../images/rps/${imgMap[userChoice].user}`;
    louding();
}
