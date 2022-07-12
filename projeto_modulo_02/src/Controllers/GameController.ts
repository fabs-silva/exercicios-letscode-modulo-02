import { TypeEffectiveness } from '../../assets/TypeEffectiveness';
import { Pokemon } from '../models/Pokemon';

export const compareTypeEffectiveness = (
  pokemon1: Pokemon,
  pokemon2: Pokemon
) => {
  for (let i = 0; i < pokemon1.types.length; i++) {
    for (let j = 0; j < pokemon2.types.length; j++) {
      const compareEffectiveness = comparaTypeEffectiveness(
        pokemon1.types[i],
        pokemon2.types[j]
      );

      if (compareEffectiveness === 1) {
        alert('pokemon2.name');
        return;
      }

      if (compareEffectiveness === 2) {
        alert('pokemon1.name');
        return;
      }
    }
  }

  alert('Empate');
};

const comparaTypeEffectiveness = (
  pokemon1Type: string,
  pokemon2Type: string
): number => {
  const typeEffectiveness = returnTypeEffectiveness(pokemon1Type, pokemon2Type);

  if (typeEffectiveness > 1) {
    return 2;
  }

  if (typeEffectiveness < 1) {
    return 1;
  }

  return 0;
};

const returnTypeEffectiveness = (
  pokemon1Type: string,
  pokemon2Type: string
): number => {
  let pokemon1MainType = TypeEffectiveness.find(
    (type) => type.name.toLowerCase() === pokemon1Type.toLowerCase()
  );

  let pokemon2MainType =
    pokemon2Type[0].toUpperCase() + pokemon1Type.substring(1);

  console.log(pokemon1MainType.effectiveness[pokemon2MainType]);

  return pokemon1MainType.effectiveness[pokemon2MainType];
};
