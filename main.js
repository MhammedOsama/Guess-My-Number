
const num = Math.trunc(Math.random() * 20) + 1;

let dec = 20;
let highscore = 0;

document.querySelector(".check").addEventListener
  ('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
      document.querySelector('.message').textContent = '⛔ No number!'
    } else if (guess === num) {
      document.querySelector('.message').textContent = '🎉 Correct Number!';
      document.querySelector('.number').textContent = num;
      document.querySelector('body').style.backgroundColor = '#60b347'
      document.querySelector('.number').style.width = '30rem'
      if (dec > highscore) {
        highscore = dec;
        document.querySelector('.highscore').textContent = dec;
      }
    }
    else if (guess !== num) {
      if (dec > 1) {
        document.querySelector('.message').textContent = guess > num ? '📈 Too High!' : '📈 Too Low!';
        dec--;
        document.querySelector('.score').textContent = dec;
      } else {
        document.querySelector('.message').textContent = '🍾 You lose the game';
        document.querySelector('.score').textContent = 0 ;
      }
    }
  })

// Again btn

document.querySelector('.again').addEventListener(
  'click', function () {
    location.reload();
})
