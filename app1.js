function shuffle(arrayForShuffling) {
  for (let i = arrayForShuffling.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayForShuffling[i], arrayForShuffling[j]] = [
      arrayForShuffling[j],
      arrayForShuffling[i],
    ];
  }
  return arrayForShuffling;
}

function init() {
  let cardGame = [
    "/img/1.jpg",
    "/img/3.jpg",
    "/img/4.jpg",
    "/img/5.jpg",
    "/img/22.jpg",
  ];

  // Double the cards for pairs
  const arrayAfterShuffling = shuffle(cardGame.concat(cardGame));

  const bordElements = document.getElementById("bord");
  let openCards = [];
  let clickable = true;

  // Spacer
  const spacer = document.createElement("div");
  spacer.className = "spacer";
  bordElements.appendChild(spacer);

  // First Row
  const row1 = document.createElement("div");
  row1.className = "row";
  bordElements.appendChild(row1);

  // Second Row
  const row2 = document.createElement("div");
  row2.className = "row";
  bordElements.appendChild(row2);

  // Distribute the cards between the two rows
  for (let i = 0; i < arrayAfterShuffling.length; i++) {
    const image = arrayAfterShuffling[i];

    const cardElement = document.createElement("div");
    cardElement.className = "card";

    const imgElement = document.createElement("img");
    imgElement.className = "img";
    imgElement.src = "/img/2.jpg"; // Set a default image
    imgElement.alt = "";

    cardElement.appendChild(imgElement);

    if (i < arrayAfterShuffling.length / 2) {
      row1.appendChild(cardElement);
    } else {
      row2.appendChild(cardElement);
    }

    cardElement.onclick = () => {
      if (!clickable || openCards.includes(cardElement)) {
        return;
      }

      imgElement.src = image;
      openCards.push(cardElement);

      if (openCards.length === 2) {
        clickable = false;
        setTimeout(() => {
          const [card1, card2] = openCards;
          const img1 = card1.querySelector(".img");
          const img2 = card2.querySelector(".img");

          if (img1.src === img2.src) {
            openCards = [];
          } else {
            img1.src = "/img/2.jpg";
            img2.src = "/img/2.jpg";
            openCards = [];
          }

          clickable = true;
        }, 500);
      }
    };
  }
}

init();
