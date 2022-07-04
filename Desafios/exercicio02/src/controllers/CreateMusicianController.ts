import { findByEmail, inputMultipleStrings, inputSingleString } from "../utils";
import { Musician } from "./../models/Musician";
import {
  getMusiciansLocalStorage,
  saveMusicianLocalStorage,
} from "./LocalStorageController";

const addMusician = (): void => {
  let musiciansList: Musician[] = getMusiciansLocalStorage();
  const name = inputSingleString("nome");
  const email = inputSingleString("email");
  const instruments = inputMultipleStrings("instrumentos");
  const musicGenres = inputMultipleStrings("generos");

  if (checkEmailExists(email)) {
    throw new Error("Email já existe na base de dados");
  }

  const musician: Musician = new Musician({
    name,
    email,
    instruments,
    musicGenres,
  });

  musiciansList.push(musician);

  saveMusicianLocalStorage(musiciansList);

  alert("Músico cadastrado com sucesso!");
};

const checkEmailExists = (email: string): boolean => {
  const findEmail = findByEmail(email);

  return findEmail ? true : false;
};

const addMusicianButton = () => {
  const button = document.querySelector<HTMLButtonElement>(".app-form-button");

  button?.addEventListener("click", () => {
    addMusician();
  });
};

export { addMusicianButton };
