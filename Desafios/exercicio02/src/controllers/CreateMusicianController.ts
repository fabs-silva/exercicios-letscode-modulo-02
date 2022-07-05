import {
  findByEmail,
  inputBoolean,
  inputMultipleStrings,
  inputSingleString,
} from '../utils';
import { Musician } from './../models/Musician';
import {
  getMusiciansLocalStorage,
  saveMusicianLocalStorage,
} from './LocalStorageController';

const addMusician = (): void => {
  let musiciansList: Musician[] = getMusiciansLocalStorage();
  const name = inputSingleString('nome');
  const email = inputSingleString('email');
  const instruments = inputMultipleStrings('instrumentos');
  const musicGenres = inputMultipleStrings('generos');
  const available = inputBoolean('disponivel');

  if (checkEmailExists(email)) {
    alert('Email já existe na base de dados');
    return;
  }

  const musician: Musician = new Musician({
    name,
    email,
    instruments,
    musicGenres,
    available,
  });

  musiciansList.push(musician);

  saveMusicianLocalStorage(musiciansList);

  alert('Músico cadastrado com sucesso!');
};

const checkEmailExists = (email: string): boolean => {
  const findEmail = findByEmail(email);

  return findEmail ? true : false;
};

const addMusicianButton = () => {
  const button = document.querySelector<HTMLButtonElement>('.app-form-button');

  button?.addEventListener('click', () => {
    addMusician();
  });
};

export { addMusicianButton };