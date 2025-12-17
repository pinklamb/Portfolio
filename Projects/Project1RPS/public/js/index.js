
function getCompMove(){ 
  const randomNum = Math.random();
  let computerMove;
  if (randomNum >= 0 && randomNum < 1/3){
     computerMove = 'Rock';
  } else if (randomNum >= 1/3 &&    randomNum < 2/3){
    computerMove = 'Paper';
  } else if (randomNum >= 2/3 &&    randomNum < 1){
    computerMove = 'Scissors';
  }

  return computerMove;

}

document.querySelector('.js-rock-button').addEventListener('click', () => {
  playGame('Rock');
})

document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('Paper')
})


document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playGame('Scissors')
})


let score = JSON.parse(localStorage.getItem('score')) ||  {
    wins: 0,
    losses: 0,
    ties:0
  };



function updateScoreElem(){
  document.querySelector('.js-score')
    .innerHTML=  `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}


let isAutoPlaying = false;
let intervalId;

function autoPlay(){
  const buttonElement = document.querySelector('.js-autoplay');
  if (!isAutoPlaying){
    intervalId = setInterval(() => {
      const playerMove = getCompMove();
      playGame(playerMove);}, 1000);
    isAutoPlaying = true;
      buttonElement.innerText = 'Stop Autoplay';
  }  else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    buttonElement.innerText = 'Autoplay'
  }
}

function playGame(playerMove){

  const compMove = getCompMove();
  let result;

  if (playerMove === 'Scissors'){
    if (compMove === 'Rock'){
    result = 'You lost.';
    }else if(compMove === 'Scissors'){
      result = 'You tied.';
    } else if (compMove === 'Paper'){
      result = 'You won.';
    }
  }
  if (playerMove === 'Rock'){
    if (compMove === 'Rock'){
      result = 'You tied.';
    }else if(compMove === 'Scissors'){
      result = 'You won.';
    } else if (compMove === 'Paper'){
      result = 'You lost.';
    }
  }
  if (playerMove === 'Paper'){
    if (compMove === 'Rock'){
      result = 'You won.';
    }else if(compMove === 'Scissors'){
      result = 'You lost.';
    } else if (compMove === 'Paper'){
      result = 'You tied.';
    }
  }

 
  if (result === 'You won.'){
    score.wins += 1;
  } else if (result === 'You lost.') {
    score.losses += 1;
  } else {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElem();


  document.querySelector('.js-result')
  .innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You chose <img src = "/img/${playerMove}-emoji.png" class = "move-icon" >
   Computer Chose <img src = "/img/${compMove}-emoji.png" class = "move-icon">`;


}




