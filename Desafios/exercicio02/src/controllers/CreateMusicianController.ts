import { Musician } from '../models/Musician';
import { inputMultipleStrings, inputSingleString } from '../utils/Inputs';
import { saveMusicianLocalStorage } from '../utils/LocalStorage';
import { findBySingleInput } from './FindMusiciansController';

const addMusician = (musicians: Musician[]): void => {
  const name = inputSingleString('nome');
  const email = inputSingleString('email');
  const instruments = inputMultipleStrings('instrumentos');
  const musicGenres = inputMultipleStrings('generos');

  if (!name || !email || !instruments || !musicGenres) {
    alert('Você deve preencher todos os campos');
    return;
  }

  if (checkEmailExists(musicians)) {
    alert('Email já existe na base de dados');
    return;
  }

  const musician: Musician = new Musician({
    name,
    email,
    instruments,
    musicGenres,
  });

  musicians.push(musician);

  saveMusicianLocalStorage(musicians);

  alert('Músico cadastrado com sucesso!');
};

const checkEmailExists = (musicians: Musician[]): boolean => {
  const findEmail = findBySingleInput('email', musicians);

  return findEmail.length !== 0 ? true : false;
};

const addMusicianButton = (musicians: Musician[]) => {
  const button = document.querySelector<HTMLButtonElement>('.app-form-button');

  button?.addEventListener('click', () => {
    addMusician(musicians);
  });
};

export { addMusicianButton };
