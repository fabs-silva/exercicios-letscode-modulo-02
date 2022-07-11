import { Pokemon } from "./models/Pokemon";

const renderPlayerArea = (playerId: "player1" | "player2") => {
  const playerArea = document.getElementById(playerId) as HTMLDivElement;

  const playerName = document.createElement("p") as HTMLParagraphElement;
  playerName.classList.add("app-player-name");
  playerName.innerText = playerId === "player1" ? "Ash" : "Equipe Rocket";

  const playerCards = document.createElement("div") as HTMLDivElement;
  playerCards.classList.add("app-player-cards");

  const playerGameInfo = document.createElement("div") as HTMLDivElement;
  playerGameInfo.classList.add("app-player-game-info");

  playerArea.appendChild(playerName);
  playerArea.appendChild(playerCards);
  playerArea.appendChild(playerGameInfo);
};

const renderCards = (cardsAreaSelectors: string[], pokemons: Pokemon[]) => {
  const cardsArea = document.querySelector(
    cardsAreaSelectors[0]
  ) as HTMLDivElement;
  const cardsDiv = document.createElement("div") as HTMLDivElement;
  cardsDiv.classList.add(cardsAreaSelectors[1]);

  pokemons.forEach((pokemon) => {
    const card = document.createElement("div") as HTMLDivElement;
    card.classList.add(cardsAreaSelectors[2]);
    card.id = `${cardsAreaSelectors[3]}-${pokemon.id}`;

    card.innerHTML = `<p>${pokemon.name}</p>
    <img src=${pokemon.image} alt=${pokemon.name} />
    <p>${pokemon.types
      .map((type) => {
        return `<span>${type}</span>`;
      })
      .join("")}</p>
    `;
  });
  cardsArea.appendChild(cardsDiv);
};

const renderCardsLeft = (pokemons: Pokemon[]) => {
  const cardsArea = document.querySelector(
    ".app-player-cards"
  ) as HTMLDivElement;
};

const renderMainCard = (pokemon: Pokemon) => {
  const cardsArea = document.querySelector(
    ".app-player-cards"
  ) as HTMLDivElement;
};

const renderCardsUsed = (pokemon: Pokemon) => {
  const cardsArea = document.querySelector(
    ".app-player-cards"
  ) as HTMLDivElement;
};

/*         <div class="app-player-name"></div>
          <div class="app-player-cards">
            <div class="app-player-cards-left"></div>
            <div class="app-player-main-card"></div>
          </div>
          <div class="app-player-game-info">
            <div class="app-player-cards-left"></div>
            <div class="app-player-points"></div>
            <div class="app-player-cards-used"></div>
          </div>*/
export { renderPlayerArea };
