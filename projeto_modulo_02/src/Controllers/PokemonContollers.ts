import { Pokemon, ResponsePokemon } from '../models/Pokemon';
import { randomNumbers } from './GeneralControllers';

const createNewPokemon = (result: unknown): Pokemon => {
  const pokemonResponse = result.value as ResponsePokemon;
  const types = pokemonResponse.types.map((type) => {
    return type.type.name;
  });
  const teste = 

  return new Pokemon({
    id: pokemonResponse.id,
    name: pokemonResponse.species.name,
    image: pokemonResponse.sprites.other["official-artwork"].front_default,
    types: types,
  });
};

const getPokemonsApi = () => {
  const arrayNumbers = randomNumbers();
  let promiseArray: Promise<Response>[] = [];

  for (let number of arrayNumbers) {
    const pokPromise = new Promise<Response>((resolve, reject) => {
      let response: Promise<Response> = fetch(
        `${import.meta.env.VITE_BASE_URL}pokemon/${number}`
      )
        .then((response) => response.json())
        .then((result) => result);

      response ? resolve(response) : reject(undefined);
    });
    promiseArray.push(pokPromise);
  }

  return promiseArray;
};

export { getPokemonsApi, createNewPokemon };

