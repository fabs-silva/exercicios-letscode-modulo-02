import { Musician } from "../models/Musician";
import { inputSingleString } from "../utils";
import { getMusiciansLocalStorage } from "./LocalStorageController";

export const findMusicianButton = () => {
  const button = document.querySelector(
    ".app-form-button"
  ) as HTMLButtonElement;

  button.addEventListener("click", (e: Event) => {
    e.preventDefault();
    const name = inputSingleString("nome");
    const email = inputSingleString("email");
    const instrument = inputSingleString("instrumento");
    const musicGenre = inputSingleString("genero");

    if (name === "" && email === "" && instrument === "" && musicGenre === "") {
      alert("Preencha algum dos campos para realizar a busca");
    } else {
      if (name !== "") {
        const findName = findByName(name);
        console.log(findName);
        if (findName === undefined) {
          throw new Error("A busca não retornou resultados");
        }
        console.log(findName);
      }
      /*    if (email !== "") {
         const findEmail = findByEmail(email);
        if (findEmail === undefined) {
          throw new Error("A busca não retornou resultados");
        }
        console.log(findEmail);
      } */
      /*  if (instrument !== "") {
        const findInstrument = findByInstrument(instrument);
        if (findInstrument === undefined) {
          throw new Error("A busca não retornou resultados");
        }
        console.log(findInstrument);

        //problema acento
      } */
      /* if (musicGenre !== "") {
        const findByGenre = findByMusicGenre(musicGenre);
        if (findByGenre === undefined) {
          throw new Error("A busca não retornou resultados");
        }
        console.log(findByGenre);
      } */
    }
  });
};

const findByName = (name: string) => {
  const musiciansList = getMusiciansLocalStorage();
  const findByName = musiciansList.filter((mus) => mus.name === name);

  return findByName ? findByName : undefined;
};

const findByInstrument = (item: string) => {
  const musiciansList = getMusiciansLocalStorage();
  let listFiltered = [] as Musician[];

  for (let musician of musiciansList) {
    const findInArray = musician.instruments.find(
      (instrument) => instrument === item
    );
    if (findInArray === undefined) {
      return;
    }

    listFiltered = [...listFiltered, musician];
  }

  return listFiltered ? listFiltered : undefined;
};

const findByMusicGenre = (item: string) => {
  const musiciansList = getMusiciansLocalStorage();
  let listFiltered = [] as Musician[];

  for (let musician of musiciansList) {
    const findInArray = musician.musicGenres.find((genre) => genre === item);
    if (findInArray === undefined) {
      return;
    }

    listFiltered = [...listFiltered, musician];
  }

  return listFiltered ? listFiltered : undefined;
};
