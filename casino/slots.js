let balance = 100;

document.getElementById("spinButton").addEventListener("click", spinReels);

function spinReels() {
  const symbols = ["🍒", "🍋", "🍉"];
  const reel1 = symbols[Math.floor(Math.random() * symbols.length)];
  const reel2 = symbols[Math.floor(Math.random() * symbols.length)];
  const reel3 = symbols[Math.floor(Math.random() * symbols.length)];
  
  document.getElementById("reel1").textContent = reel1;
  document.getElementById("reel2").textContent = reel2;
  document.getElementById("reel3").textContent = reel3;

  checkWin(reel1, reel2, reel3);
}

function checkWin(reel1, reel2, reel3) {
  if (reel1 === reel2 && reel2 === reel3) {
    if (reel1 === "🍒") {
      balance += 50;
      alert("Big Win! Three cherries! You won $50!");
    } else if (reel1 === "🍋") {
      balance += 30;
      alert("Three lemons! You won $30!");
    } else if (reel1 === "🍉") {
      balance += 20;
      alert("Three watermelons! You won $20!");
    }
  } else if (reel1 === reel2 || reel2 === reel3 || reel1 === reel3) {
    balance += 10;
    alert("Two matching symbols! You won $10!");
  } else {
    balance -= 30;
    alert("No match! You lose $30.");
  }
  updateBalance();
}

function updateBalance() {
  document.getElementById("balance").textContent = `Balance: $${balance}`;
}
