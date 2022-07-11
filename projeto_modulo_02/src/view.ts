import { Pokemon } from './models/Pokemon';

const pokemon1 = new Pokemon({
  id: 1,
  name: 'Pikachu',
  image: './pokemon.jpg',
  types: ['Elétrico'],
});

const pokemon2 = new Pokemon({
  id: 3,
  name: 'Squirtle',
  image: './squirtle.jpg',
  types: ['Aquático'],
});

const renderLogo = (): HTMLDivElement => {
  const logoElement = document.createElement('header') as HTMLDivElement;
  logoElement.classList.add('game-logo');
  logoElement.innerHTML = `<img src="./logo.png" alt="Pokemon Battle Game logo" />`;
  return logoElement;
};

const renderGameBody = () => {
  const bodyElement = document.createElement('main') as HTMLDivElement;
  bodyElement.classList.add('game-body');
  bodyElement.appendChild(renderPlayerArea('player1', pokemon1));
  bodyElement.appendChild(renderGameResults());
  bodyElement.appendChild(renderPlayerArea('player2', pokemon2));

  return bodyElement;
};

const renderFooter = (): HTMLDivElement => {
  const footerElement = document.createElement('footer') as HTMLDivElement;
  footerElement.classList.add('game-footer');
  footerElement.innerText =
    'Letscode Dynamic FrontEnd Module Project - Using Pokemon API';
  return footerElement;
};

const renderBoard = (): void => {
  const app = document.getElementById('game-board') as HTMLDivElement;
  app.appendChild(renderLogo());
  app.appendChild(renderGameBody());
  app.appendChild(renderFooter());
};

const renderGameResults = (): HTMLDivElement => {
  const gameResults = document.createElement('section') as HTMLDivElement;
  gameResults.classList.add('game-results-area');

  gameResults.innerHTML = `<p class="game-results-versus">1 <span>X</span> 0</p>
  <div class="game-results-round">
  <p class="game-results-round-winner">Ash pontua</p>
  <p class="game-results-round-result">Pokemon elétrico (Pikachu) vence Pokemon aquático (Squirtle)</p>
  </div>
  `;

  return gameResults;
};

const renderPlayerHeader = (playerId: 'player1' | 'player2') => {
  const playerHeader = document.createElement('div') as HTMLDivElement;
  playerHeader.classList.add('game-player-header');
  playerHeader.id = `${playerId}-header`;

  const playerImage = document.createElement('img') as HTMLImageElement;
  playerImage.classList.add('game-player-image');
  playerImage.src = playerId === 'player1' ? './ash.png' : './rocket-team.png';
  playerImage.alt = playerId === 'player1' ? 'Ash' : 'Equipe Rocket';

  const playerInfo = document.createElement('div') as HTMLDivElement;
  playerInfo.classList.add('game-player-info');

  const playerName = document.createElement('p') as HTMLParagraphElement;
  playerName.classList.add('game-player-name');
  playerName.innerText = playerId === 'player1' ? 'Ash' : 'Equipe Rocket';

  const playerData = document.createElement('p') as HTMLParagraphElement;
  playerData.classList.add('game-player-data');
  playerData.innerHTML =
    playerId === 'player1' ? '4 cartas restantes' : '4 cartas restantes';

  playerHeader.appendChild(playerImage);
  playerHeader.appendChild(playerInfo);
  playerInfo.appendChild(playerName);
  playerInfo.appendChild(playerData);

  return playerHeader;
};

const renderPlayerArea = (
  playerId: 'player1' | 'player2',
  pokemon: Pokemon
) => {
  const playerArea = document.createElement('div') as HTMLDivElement;
  playerArea.classList.add('game-player-area');
  playerArea.id = `${playerId}-area`;

  const playerHeader = renderPlayerHeader(playerId);

  const playerCards = renderSingleCard(
    'game-main-card',
    playerId,
    false,
    pokemon
  );

  const cardsLeft = renderCardsLeft(4, playerId);

  playerArea.appendChild(playerHeader);
  playerArea.appendChild(playerCards);
  playerArea.appendChild(cardsLeft);

  return playerArea;
};

const renderSingleCard = (
  cardClass: string,
  playerId: 'player1' | 'player2',
  isTurned: boolean,
  pokemon?: Pokemon
): HTMLDivElement => {
  const playerCardsArea = document.createElement('div') as HTMLDivElement;
  playerCardsArea.classList.add('game-player-cards');
  playerCardsArea.id = `${playerId}-cards`;

  const card = document.createElement('div') as HTMLDivElement;
  card.classList.add(cardClass);
  card.id = `${cardClass}-${pokemon?.id || 0}`;

  if (isTurned) {
    card.innerHTML = `
    <img src="./pokeball.png" alt="pokebola" />
    `;
  } else {
    card.innerHTML = `<h2>${pokemon?.name || 'Pikachu'}</h2>
    <img src=${pokemon?.image} alt=${pokemon?.name} />
    <p>${pokemon?.types
      .map((type) => {
        return `<span>${type}</span>`;
      })
      .join('')}</p>
    `;
  }

  playerCardsArea.appendChild(card);

  return playerCardsArea;
};

const renderCardsLeft = (
  quantity: number,
  playerId: 'player1' | 'player2'
): HTMLDivElement => {
  const playerCardsLeft = document.createElement('div') as HTMLDivElement;
  playerCardsLeft.classList.add('game-player-cards-left');
  playerCardsLeft.id = `${playerId}-cards-left`;

  for (let i = 0; i < quantity; i++) {
    const card = document.createElement('div') as HTMLDivElement;
    card.classList.add('game-small-card');
    card.id = `${'game-small-card'}-${i}`;

    card.innerHTML = `
    <img src="./pokeball.png" alt="pokebola" />
    `;

    playerCardsLeft.appendChild(card);
  }

  return playerCardsLeft;
};

export { renderBoard };
