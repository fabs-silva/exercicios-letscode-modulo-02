import { Pokemon } from './models/Pokemon';
import './style.css';
import { gettingApiPromise, randomNumbers } from './utils';

const gettingListPokemons = (arrayNumbers: number[]) => {
  const apiPromise = gettingApiPromise(
    `${import.meta.env.VITE_BASE_URL}pokemon_types.json`
  );
  apiPromise.then((response) => {
    let pokemonArray: Pokemon[] = [];

    for (let number of arrayNumbers) {
      const pokemon: Pokemon = Array.from(response).find(
        (p) => p.pokemon_id === number
      );

      pokemonArray = [...pokemonArray, pokemon];
    }

    return pokemonArray;
  });
};

const gettingTypeEffectiveness = () => {
  const apiPromise = gettingApiPromise(
    `${import.meta.env.VITE_BASE_URL}type_effectiveness.json`
  );
  apiPromise.then((response) => {
    return response;
  });
};

console.log(gettingListPokemons(randomNumbers(10)));
