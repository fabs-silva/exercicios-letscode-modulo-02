//import { createNewPokemon, getPokemonsApi } from "./contollers";
//import { Pokemon } from "./models/Pokemon";
import { renderBoard } from './view';

renderBoard();

/* const pokemon = new Pokemon({
  id: 1,
  name: 'Pikachu',
  image: './pokemon.jpg',
  types: ['Electric'],
}); */

/* const promiseArray = getPokemonsApi();
const arraySelectors = [
  "app-player-cards",
  "app-cards-area",
  "app-card",
  "app-card",
]; */

/* Promise.allSettled(promiseArray).then((results) => {
  let pokemonArray: Pokemon[] = [];
  results.forEach((result) => {
    const newPokemon = createNewPokemon(result);
    pokemonArray.push(newPokemon);
  });
  renderPlayerArea("player1");
  renderPlayerArea("player2");
});
 */
