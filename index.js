const username = prompt("Enter your username");

console.log(`Welcome to this Number Guessing Game ${username}`);

let stage = 1;

const game = (range = 2) => {
  const input = prompt(`Stage ${stage}: Guess a number between 1 and ${range}`);
  const guess = Number(input);
  const randomInteger = Math.floor((Math.random() * range) + 1);

  console.log(`Correct answer is ${randomInteger}`)

  if (randomInteger === guess) {
    stage += 1;
    game(range + 1);
  } else {
    console.log('Game over, you stopped at Stage' + ' ' + stage)
  }
};

game()
