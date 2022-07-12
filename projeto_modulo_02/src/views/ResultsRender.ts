import { Player } from '../models/Player';

export const renderGameResults = (players: Player[]): HTMLDivElement => {
  const gameResults = document.createElement('section') as HTMLDivElement;
  gameResults.classList.add('game-results-area');

  gameResults.innerHTML = `<p class="game-results-versus">${players[0].points} <span>X</span> ${players[1].points}</p>
    <button type="button" class="game-results-button" id="game-start">Iniciar</button>
    <div class="game-results-round">
    <p class="game-results-round-winner">${players[0].name} pontua</p>
    <p class="game-results-round-result">Pokemon elétrico (Pikachu) vence Pokemon aquático (Squirtle)</p>
    </div>
    `;

  return gameResults;
};
