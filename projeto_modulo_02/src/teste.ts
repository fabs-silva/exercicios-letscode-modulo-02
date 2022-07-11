const gettingListPokemons = (arrayNumbers: number[]): Pokemon[] => {
  let pokemonArray: Pokemon[] = [];

  for (let number of arrayNumbers) {
    const pokemon = getPokemon(number);

    pokemon
      .then((result) => {
        pokemonArray = [...pokemonArray, result];
      })
      .catch((err) => {
        return err;
      });

    /* .then((pokemon) => {
        pokemonArray = [...pokemonArray, pokemon];
        console.log(pokemonArray);
        return pokemonArray;
      }); */
  }
  return pokemonArray;
};

const getPokemon = (id: number): Promise<Pokemon> => {
  const pokemonData = gettingApiPromise(
    `${import.meta.env.VITE_BASE_URL}pokemon/${id}`
  );
  return pokemonData.then((response: unknown) => {
    const pokemonResponse = response as ResponsePokemon;
    const types = pokemonResponse.types.map((type) => {
      return type.type.name;
    });
    return {
      id: pokemonResponse.id,
      name: pokemonResponse.species.name,
      image: pokemonResponse.sprites.other.home.front_default,
      types: types,
    };
  });
};

/* const gettingListPokemons = () => {
  let pokemonArray: Pokemon[];

  for (let number of arrayNumbers) {
    const pokemon = getPokemon(number);

    pokemon
      .then(async (response: unknown) => {
        const pokemonResponse = (await response) as ResponsePokemon;
        const types = pokemonResponse.types.map((type) => {
          return type.type.name;
        });
        const newPokemon = new Pokemon({
          id: pokemonResponse.id,
          name: pokemonResponse.species.name,
          image: pokemonResponse.sprites.other.home.front_default,
          types: types,
        });
        pokemonArray.push(newPokemon);
      })
      .catch((err) => {
        return err;
      });
  }
  return pokemonArray;
}; */
