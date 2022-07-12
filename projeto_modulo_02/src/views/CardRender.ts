import { compareTypeEffectiveness } from '../Controllers/GameController';
import { Player } from '../models/Player';

const renderCardsStart = (player: Player): HTMLDivElement => {
  const playerCardsArea = document.createElement('div') as HTMLDivElement;
  playerCardsArea.classList.add('game-player-cards');
  playerCardsArea.id = `player${player.id + 1}-cards`;

  const mainCard = renderCard('game-main-card', `${player.cards[0].id}`);

  playerCardsArea.appendChild(mainCard);
  playerCardsArea.appendChild(renderCardsLeft(player.cards.length, player));

  return playerCardsArea;
};

const startGameButton = (players: Player[]) => {
  const button = document.getElementById('game-start') as HTMLButtonElement;

  button.addEventListener('click', (e: Event) => {
    e.preventDefault();
    players.forEach((player) => {
      const mainCard = document.getElementById(
        `game-main-card-${player.cards[0].id}`
      ) as HTMLDivElement;

      mainCard.innerHTML = `<h2>${player.cards[0].name}</h2>
      <img src=${player.cards[0].image} alt=${player.cards[0].name} />
        <p>${player.cards[0].types
          .map((type) => {
            return `<span>${type}</span>`;
          })
          .join(' / ')}</p>
        `;
    });

    compareTypeEffectiveness(players[0].cards[0], players[1].cards[0]);

    button.innerText = 'Continuar';
    button.id = 'game-continue';
  });
};

const renderMainCard = (
  cardClass: string,
  player: Player,
  isTurned: boolean = true,
  index: number
): HTMLDivElement => {
  const playerCardsArea = document.createElement('div') as HTMLDivElement;
  playerCardsArea.classList.add('game-player-cards');
  playerCardsArea.id = `player${player.id + 1}-cards`;

  const card = renderCard(cardClass, `${player.cards[index].id}`);

  if (isTurned) {
    card.innerHTML = `
    <img src="./assets/pokeball.png" alt="pokebola" />
    `;
  } else {
    card.innerHTML = `<h2>${player.cards[index].name || 'Pikachu'}</h2>
      <img src=${player.cards[index].image} alt=${player.cards[index].name} />
      <p>${player.cards[index].types
        .map((type) => {
          return `<span>${type}</span>`;
        })
        .join('')}</p>
      `;
  }

  playerCardsArea.appendChild(card);

  return playerCardsArea;
};

const renderCardsLeft = (quantity: number, player: Player): HTMLDivElement => {
  const playerCardsLeft = document.createElement('div') as HTMLDivElement;
  playerCardsLeft.classList.add('game-player-cards-left');
  playerCardsLeft.id = `player${player.id + 1}-cards-left`;

  for (let i = 0; i < quantity - 1; i++) {
    const card = renderCard('game-small-card', `player${player.id + 1}-${i}`);

    card.innerHTML = `
    <img src="./assets/pokeball.png" alt="pokebola" />
    `;

    playerCardsLeft.appendChild(card);
  }

  return playerCardsLeft;
};

const renderCard = (cardClass: string, id: string) => {
  const card = document.createElement('div') as HTMLDivElement;
  card.classList.add(cardClass);
  card.id = `${cardClass}-${id}`;

  card.innerHTML = `
    <img src="./assets/pokeball.png" alt="pokebola" />
    `;

  return card;
};

export { renderMainCard, renderCardsLeft, renderCardsStart, startGameButton };
