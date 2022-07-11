//import { createNewPokemon, getPokemonsApi } from "./contollers";
//import { Pokemon } from "./models/Pokemon";
import { renderPlayerArea } from "./view";

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
renderPlayerArea("player1");
renderPlayerArea("player2");
