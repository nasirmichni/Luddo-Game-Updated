let x = 0;
total = 0;

function rollTheDisk() {
  x = Math.trunc(Math.random() * 6 + 1);
  document.querySelector(".number").textContent = x;

  let diskImg = document.querySelector(".image");
  diskImg.src = `images/dice-${x}.png`;
  showNumberAndSpin();

  total += x;
  if (total >= 100) {
    alert("You have won the game");
    total = 0;
  }
  document.querySelector(".score").innerHTML = `Your Total Score is ${total}`;

 
}

function showNumberAndSpin() {
  let diskImg = document.querySelector(".image");
  diskImg.classList.add("spinning")
  setTimeout(() => {
    diskImg.classList.remove("spinning");
  }, 1000);
}