const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },

  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardChoosen = [];
let cardChoosenIds = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}
createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("#grid img");
  const optionOneId = cardChoosenIds[0];
  const optionTwoId = cardChoosenIds[1];
  console.log(cards);
  console.log("check for match");
  if (optionOneId == optionTwoId) {
    alert("you CLICKED THE SAME CARD");
  }
  if (cardChoosen[0] == cardChoosen[1]) {
    alert("you found a match");
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardChoosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    alert("Sorry Try Again");
  }
  cardChoosen = [];
  cardChoosenIds = [];

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.innerHTML = "Congratulation, you found all the matches";
  }
  resultDisplay.innerHTML = cardsWon.length;
}
function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardChoosen.push(cardArray[cardId].name);
  this.setAttribute("src", cardArray[cardId].img);
  cardChoosenIds.push(cardId);
  console.log(cardChoosenIds);
  console.log(cardChoosen);
  if (cardChoosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
