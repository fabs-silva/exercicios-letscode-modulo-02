import { Pokemon, ResponsePokemon } from "./models/Pokemon";

const selectNumberCards = () => {
  let promptText =
    prompt("Escolha o número de cartas para cada jogador (de 1 a 10)") || "";

  const isnum = /^\d+$/;

  while (
    !isnum.test(promptText) ||
    parseInt(promptText) < 1 ||
    parseInt(promptText) > 10
  ) {
    promptText =
      prompt("Escolha o número de cartas para cada jogador (de 1 a 10)") || "";
  }

  return parseInt(promptText);
};

const randomNumbers = (): number[] => {
  const quantity = selectNumberCards();
  let numbersArray: number[] = [];

  for (let i = 0; i < quantity * 2; i++) {
    let newNumber = Math.floor(Math.random() * 905 + 1);

    const checkNumberInArray = numbersArray.find((n) => n === newNumber);

    if (checkNumberInArray) {
      newNumber = Math.floor(Math.random() * 905 + 1);
    }

    numbersArray = [...numbersArray, newNumber];
  }
  return numbersArray;
};

const createNewPokemon = (result: unknown): Pokemon => {
  const pokemonResponse = result.value as ResponsePokemon;
  const types = pokemonResponse.types.map((type) => {
    return type.type.name;
  });

  return new Pokemon({
    id: pokemonResponse.id,
    name: pokemonResponse.species.name,
    image: pokemonResponse.sprites.other.home.front_default,
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
