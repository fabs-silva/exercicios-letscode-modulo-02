import { Musician } from '../models/Musician';
import {
  inputBoolean,
  inputMultipleStrings,
  inputSingleString,
} from '../utils/Inputs';
import {
  getMusiciansLocalStorage,
  saveMusicianLocalStorage,
} from '../utils/LocalStorage';
import { findByEmail } from './FindMusicians';

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
  console.log(musician);
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
