export interface TypeEffectivenessContract {
  name: string;
  effectiveness: { [key: string]: number };
}

export const TypeEffectiveness: TypeEffectivenessContract[] = [
  {
    name: "Bug",
    effectiveness: {
      Bug: 1,
      Dark: 1.6,
      Dragon: 1,
      Electric: 1,
      Fairy: 0.625,
      Fighting: 0.625,
      Fire: 0.625,
      Flying: 0.625,
      Ghost: 0.625,
      Grass: 1.6,
      Ground: 1,
      Ice: 1,
      Normal: 1,
      Poison: 0.625,
      Psychic: 1.6,
      Rock: 1,
      Steel: 0.625,
      Water: 1,
    },
  },

  {
    name: "Dark",
    effectiveness: {
      Bug: 1,
      Dark: 0.625,
      Dragon: 1,
      Electric: 1,
      Fairy: 0.625,
      Fighting: 0.625,
      Fire: 1,
      Flying: 1,
      Ghost: 1.6,
      Grass: 1,
      Ground: 1,
      Ice: 1,
      Normal: 1,
      Poison: 1,
      Psychic: 1.6,
      Rock: 1,
      Steel: 1,
      Water: 1,
    },
  },
  {
    name: "Dragon",
    effectiveness: {
      Bug: 1,
      Dark: 1,
      Dragon: 1.6,
      Electric: 1,
      Fairy: 0.390625,
      Fighting: 1,
      Fire: 1,
      Flying: 1,
      Ghost: 1,
      Grass: 1,
      Ground: 1,
      Ice: 1,
      Normal: 1,
      Poison: 1,
      Psychic: 1,
      Rock: 1,
      Steel: 0.625,
      Water: 1,
    },
  },
  {
    name: "Electric",
    effectiveness: {
      Bug: 1,
      Dark: 1,
      Dragon: 0.625,
      Electric: 0.625,
      Fairy: 1,
      Fighting: 1,
      Fire: 1,
      Flying: 1.6,
      Ghost: 1,
      Grass: 0.625,
      Ground: 0.390625,
      Ice: 1,
      Normal: 1,
      Poison: 1,
      Psychic: 1,
      Rock: 1,
      Steel: 1,
      Water: 1.6,
    },
  },
  {
    name: "Fairy",
    effectiveness: {
      Bug: 1,
      Dark: 1.6,
      Dragon: 1.6,
      Electric: 1,
      Fairy: 1,
      Fighting: 1.6,
      Fire: 0.625,
      Flying: 1,
      Ghost: 1,
      Grass: 1,
      Ground: 1,
      Ice: 1,
      Normal: 1,
      Poison: 0.625,
      Psychic: 1,
      Rock: 1,
      Steel: 0.625,
      Water: 1,
    },
  },
  {
    name: "Fighting",
    effectiveness: {
      Bug: 0.625,
      Dark: 1.6,
      Dragon: 1,
      Electric: 1,
      Fairy: 0.625,
      Fighting: 1,
      Fire: 1,
      Flying: 0.625,
      Ghost: 0.390625,
      Grass: 1,
      Ground: 1,
      Ice: 1.6,
      Normal: 1.6,
      Poison: 0.625,
      Psychic: 0.625,
      Rock: 1.6,
      Steel: 1.6,
      Water: 1,
    },
  },
  {
    name: "Fire",
    effectiveness: {
      Bug: 1.6,
      Dark: 1,
      Dragon: 0.625,
      Electric: 1,
      Fairy: 1,
      Fighting: 1,
      Fire: 0.625,
      Flying: 1,
      Ghost: 1,
      Grass: 1.6,
      Ground: 1,
      Ice: 1.6,
      Normal: 1,
      Poison: 1,
      Psychic: 1,
      Rock: 0.625,
      Steel: 1.6,
      Water: 0.625,
    },
  },
  {
    name: "Flying",
    effectiveness: {
      Bug: 1.6,
      Dark: 1,
      Dragon: 1,
      Electric: 0.625,
      Fairy: 1,
      Fighting: 1.6,
      Fire: 1,
      Flying: 1,
      Ghost: 1,
      Grass: 1.6,
      Ground: 1,
      Ice: 1,
      Normal: 1,
      Poison: 1,
      Psychic: 1,
      Rock: 0.625,
      Steel: 0.625,
      Water: 1,
    },
  },
  {
    name: "Ghost",
    effectiveness: {
      Bug: 1,
      Dark: 0.625,
      Dragon: 1,
      Electric: 1,
      Fairy: 1,
      Fighting: 1,
      Fire: 1,
      Flying: 1,
      Ghost: 1.6,
      Grass: 1,
      Ground: 1,
      Ice: 1,
      Normal: 0.390625,
      Poison: 1,
      Psychic: 1.6,
      Rock: 1,
      Steel: 1,
      Water: 1,
    },
  },
  {
    name: "Grass",
    effectiveness: {
      Bug: 0.625,
      Dark: 1,
      Dragon: 0.625,
      Electric: 1,
      Fairy: 1,
      Fighting: 1,
      Fire: 0.625,
      Flying: 0.625,
      Ghost: 1,
      Grass: 0.625,
      Ground: 1.6,
      Ice: 1,
      Normal: 1,
      Poison: 0.625,
      Psychic: 1,
      Rock: 1.6,
      Steel: 0.625,
      Water: 1.6,
    },
  },
  {
    name: "Ground",
    effectiveness: {
      Bug: 0.625,
      Dark: 1,
      Dragon: 1,
      Electric: 1.6,
      Fairy: 1,
      Fighting: 1,
      Fire: 1.6,
      Flying: 0.390625,
      Ghost: 1,
      Grass: 0.625,
      Ground: 1,
      Ice: 1,
      Normal: 1,
      Poison: 1.6,
      Psychic: 1,
      Rock: 1.6,
      Steel: 1.6,
      Water: 1,
    },
  },
  {
    name: "Ice",
    effectiveness: {
      Bug: 1,
      Dark: 1,
      Dragon: 1.6,
      Electric: 1,
      Fairy: 1,
      Fighting: 1,
      Fire: 0.625,
      Flying: 1.6,
      Ghost: 1,
      Grass: 1.6,
      Ground: 1.6,
      Ice: 0.625,
      Normal: 1,
      Poison: 1,
      Psychic: 1,
      Rock: 1,
      Steel: 0.625,
      Water: 0.625,
    },
  },
  {
    name: "Normal",
    effectiveness: {
      Bug: 1,
      Dark: 1,
      Dragon: 1,
      Electric: 1,
      Fairy: 1,
      Fighting: 1,
      Fire: 1,
      Flying: 1,
      Ghost: 0.390625,
      Grass: 1,
      Ground: 1,
      Ice: 1,
      Normal: 1,
      Poison: 1,
      Psychic: 1,
      Rock: 0.625,
      Steel: 0.625,
      Water: 1,
    },
  },
  {
    name: "Poison",
    effectiveness: {
      Bug: 1,
      Dark: 1,
      Dragon: 1,
      Electric: 1,
      Fairy: 1.6,
      Fighting: 1,
      Fire: 1,
      Flying: 1,
      Ghost: 0.625,
      Grass: 1.6,
      Ground: 0.625,
      Ice: 1,
      Normal: 1,
      Poison: 0.625,
      Psychic: 1,
      Rock: 0.625,
      Steel: 0.390625,
      Water: 1,
    },
  },
  {
    name: "Psychic",
    effectiveness: {
      Bug: 1,
      Dark: 0.390625,
      Dragon: 1,
      Electric: 1,
      Fairy: 1,
      Fighting: 1.6,
      Fire: 1,
      Flying: 1,
      Ghost: 1,
      Grass: 1,
      Ground: 1,
      Ice: 1,
      Normal: 1,
      Poison: 1.6,
      Psychic: 0.625,
      Rock: 1,
      Steel: 0.625,
      Water: 1,
    },
  },
  {
    name: "Rock",
    effectiveness: {
      Bug: 1.6,
      Dark: 1,
      Dragon: 1,
      Electric: 1,
      Fairy: 1,
      Fighting: 0.625,
      Fire: 1.6,
      Flying: 1.6,
      Ghost: 1,
      Grass: 1,
      Ground: 0.625,
      Ice: 1.6,
      Normal: 1,
      Poison: 1,
      Psychic: 1,
      Rock: 1,
      Steel: 0.625,
      Water: 1,
    },
  },
  {
    name: "Steel",
    effectiveness: {
      Bug: 1,
      Dark: 1,
      Dragon: 1,
      Electric: 0.625,
      Fairy: 1.6,
      Fighting: 1,
      Fire: 0.625,
      Flying: 1,
      Ghost: 1,
      Grass: 1,
      Ground: 1,
      Ice: 1.6,
      Normal: 1,
      Poison: 1,
      Psychic: 1,
      Rock: 1.6,
      Steel: 0.625,
      Water: 0.625,
    },
  },
  {
    name: "Water",
    effectiveness: {
      Bug: 1,
      Dark: 1,
      Dragon: 0.625,
      Electric: 1,
      Fairy: 1,
      Fighting: 1,
      Fire: 1.6,
      Flying: 1,
      Ghost: 1,
      Grass: 0.625,
      Ground: 1.6,
      Ice: 1,
      Normal: 1,
      Poison: 1,
      Psychic: 1,
      Rock: 1.6,
      Steel: 1,
      Water: 0.625,
    },
  },
];
