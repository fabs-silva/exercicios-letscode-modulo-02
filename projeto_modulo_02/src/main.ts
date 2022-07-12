//import { createNewPokemon, getPokemonsApi } from "./contollers";
import { randomNumbers } from './Controllers/GeneralControllers';
import { Pokemon } from './models/Pokemon';

/* const promiseArray = getPokemonsApi();

Promise.allSettled(promiseArray).then((results) => {
  let pokemonArray: Pokemon[] = [];
  results.forEach((result) => {
    const newPokemon = createNewPokemon(result);
    pokemonArray.push(newPokemon);
  });

  const numberOfCards = pokemonArray.length / 2;
  const selectedPokemons = [
    pokemonArray.slice(0, numberOfCards),
    pokemonArray.slice(numberOfCards, pokemonArray.length),
  ];
  renderBoard(selectedPokemons);
});
 */

import { FakeApi } from '../assets/fakeApi';
import { compareTypeEffectiveness } from './Controllers/GameController';
import { createPlayers } from './Controllers/PlayerController';
import { renderBoard } from './views/BoardRender';

const arrayNumbers = randomNumbers();
const players = createPlayers();
let pokemonArray: Pokemon[] = [];
arrayNumbers.forEach((nbr) => {
  const pokemon: Pokemon = FakeApi.find((pokemon) => pokemon.id === nbr)!;

  pokemon ? pokemonArray.push(pokemon) : [];
});

const numberOfCards = pokemonArray.length / 2;
players[0].cards = pokemonArray.slice(0, numberOfCards);
players[1].cards = pokemonArray.slice(numberOfCards, pokemonArray.length);

renderBoard(players);
