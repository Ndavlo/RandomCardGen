import "./style.css";
window.onload = function() {
  newCard();
};

document.getElementById("button").addEventListener("click", newCard);

function newCard() {
  let figures = ["♠", "♣", "♥", "♦"];
  let random = Math.floor(Math.random() * 4);
  let valor = Math.floor(Math.random() * 13) + 1;
  switch (valor) {
    case 1:
      valor = "A";
      break;
    case 11:
      valor = "J";
      break;
    case 12:
      valor = "Q";
      break;
    case 13:
      valor = "K";
      break;
  }
  let figurasDOM = document.getElementsByClassName("icon");
  for (let i = 0; i < figurasDOM.length; i++) {
    figurasDOM.item(i).innerHTML = figures[random];
    if (random > 1) {
      figurasDOM.item(i).classList.add("red");
    } else {
      figurasDOM.item(i).classList.remove("red");
    }
  }
  let valorDOM = document.querySelector(".number");
  valorDOM.innerHTML = valor;
  if (random > 1) {
    valorDOM.classList.add("red");
  } else {
    valorDOM.classList.remove("red");
  }
}
