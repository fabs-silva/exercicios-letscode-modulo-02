import { Musician } from "./../models/Musician";
import { findByArray } from "./FindMusiciansController";

const findByInstrument = (musicians: Musician[]) => {
  let musiciansArray: Musician[][] = [];
  const quantity = document.getElementById("quantity") as HTMLInputElement;
  for (let i = 0; i < parseInt(quantity.value); i++) {
    const musiciansListByInstrument = findByArray(
      "instruments",
      musicians,
      `form-group-instrument-${i + 1}`
    );

    const musicianListByGenre = findByArray(
      "musicGenres",
      musiciansListByInstrument,
      "genero"
    );

    musiciansArray = [...musiciansArray, musicianListByGenre];
  }

  return musiciansArray;
};

const cartesian = (sets) => {
  return sets.reduce((a, b) => a.flatMap((d) => b.map((e) => [d, e].flat())));
};

const createBandsUsingArrays = (musicians: Musician[]) => {
  const musiciansArray = findByInstrument(musicians);
  const arrayBandsCartesian: Musician[][] = cartesian(musiciansArray);
  let arrayBands: Musician[][] = [];

  arrayBandsCartesian.forEach((array) => {
    let arrayUniqueValues = array.sort((a, b) => a.id.localeCompare(b.id));
    arrayUniqueValues = [...new Set(arrayUniqueValues)];
    if (arrayUniqueValues.length < musiciansArray.length) {
      return;
    }

    arrayBands = [...arrayBands, arrayUniqueValues];
  });

  return arrayBands;
};

export { createBandsUsingArrays };
