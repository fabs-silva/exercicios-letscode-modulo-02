import { Pokemon } from './models/Pokemon';

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

const renderSmallCards = (
  cardsAreaSelector: string,
  cardsMainArea: string,
  pokemons: Pokemon[]
) => {
  const cardsArea = document.querySelector(cardsAreaSelector) as HTMLDivElement;
  const cardsDiv = document.createElement('div') as HTMLDivElement;
  cardsDiv.classList.add(cardsMainArea);

  pokemons.forEach((pokemon) => {
    const card = document.createElement('div') as HTMLDivElement;
    card.classList.add('smallCards');
    card.id = `${cardsMainArea}-${pokemon.id || '0'}`;

    card.innerHTML = `<p>${pokemon.name || 'Pikachu'}</p>
    <img src=${pokemon.image || './pokemon.jpg'} alt=${
      pokemon.name || 'pikachu'
    } />
    <p>${
      pokemon.types
        .map((type) => {
          return `<span>${type}</span>`;
        })
        .join('') || `<span>Electric</span>`
    }</p>
    `;
  });
  cardsArea.appendChild(cardsDiv);
};

const renderMainCard = (pokemon: Pokemon) => {
  const cardsArea = document.querySelector(
    '.app-player-cards'
  ) as HTMLDivElement;
  const card = document.createElement('div') as HTMLDivElement;
  card.classList.add('app-main-card');
  card.id = `main-card-${pokemon.id || 0}`;

  card.innerHTML = `<p>${pokemon.name || 'Pikachu'}</p>
    <img src=${pokemon.image || './pokemon.jpg'} alt=${
    pokemon.name || 'pikachu'
  } />
    <p>${
      pokemon.types
        .map((type) => {
          return `<span>${type}</span>`;
        })
        .join('') || `<span>Electric</span>`
    }</p>
    `;
  cardsArea.appendChild(card);
};

/*         <div class="app-player-name"></div>
          <div class="app-player-cards">
            <div class="app-player-cards-left"></div>
            <div class="app-player-main-card"></div>
          </div>
          <div class="app-player-game-info">
            <div class="app-player-cards-left"></div>
            <div class="app-player-points"></div>
            <div class="app-player-cards-used"></div>
          </div>*/
