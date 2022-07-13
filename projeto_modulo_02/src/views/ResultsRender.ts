import { Player } from "../models/Player";

export const renderGameResults = (players: Player[]): HTMLDivElement => {
  const gameResults = document.createElement("section") as HTMLDivElement;
  gameResults.classList.add("game-results-area");

  gameResults.innerHTML = `<p class="game-results-versus"><span id="points-player1">${players[0].points}</span><span id="game-versus">X</span><span id="points-player2">${players[1].points}</span></p>
    <button type="button" class="game-results-button" id="game-start" disabled>Iniciar</button>
    <div class="game-results-round">
    <p class="game-results-round-winner">${players[0].name} pontua</p>
    <p class="game-results-round-result">Pokemon elétrico (Pikachu) vence Pokemon aquático (Squirtle)</p>
    </div>
    `;

  return gameResults;
};

export const changeScore = (winner: Player): void => {
  const scoreElement = document.getElementById(
    `points-player${winner.id + 1}`
  )!;
  winner.points += 1;
  scoreElement.innerText = winner.points.toString();
};
