let balance = 100;
let playerHand = [];
let playerTotal = 0;

document.getElementById("dealButton").addEventListener("click", dealCard);
document.getElementById("stopButton").addEventListener("click", stopGame);

function dealCard() {
  const card = getRandomCard();
  playerHand.push(card);
  playerTotal = playerHand.reduce((acc, val) => acc + val, 0);
  alert(`You drew a ${card}. Total: ${playerTotal}`);
  
  if (playerTotal > 21) {
    balance -= 20;
    alert("Bust! You lose $20.");
    resetGame();
  }
  updateBalance();
}

function stopGame() {
  if (playerTotal === 21) {
    balance += 50;
    alert("Blackjack! You win $50!");
  } else if (playerTotal < 21) {
    balance += 20;
    alert(`You stopped at ${playerTotal}. You win $20!`);
  }
  resetGame();
}

function resetGame() {
  playerHand = [];
  playerTotal = 0;
}

function getRandomCard() {
  return Math.floor(Math.random() * 11) + 1;
}

function updateBalance() {
  document.getElementById("balance").textContent = `Balance: $${balance}`;
}
