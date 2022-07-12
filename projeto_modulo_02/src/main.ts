import { createNewPokemon, getPokemonsApi } from "./contollers";
import { Pokemon } from "./models/Pokemon";
import { renderBoard } from "./view";

const promiseArray = getPokemonsApi();

Promise.allSettled(promiseArray).then((results) => {
  let pokemonArray: Pokemon[] = [];
  results.forEach((result) => {
    const newPokemon = createNewPokemon(result);
    pokemonArray.push(newPokemon);
  });
  console.log(pokemonArray);
  const numberOfCards = pokemonArray.length / 2;
  const selectedPokemons = [
    pokemonArray.slice(0, numberOfCards),
    pokemonArray.slice(numberOfCards, pokemonArray.length),
  ];
  renderBoard(selectedPokemons);
});
