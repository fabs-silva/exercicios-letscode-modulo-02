import { inputSingleString, sanitizeText } from '../utils';
import { getMusiciansLocalStorage } from './LocalStorageController';

const findByName = (name: string) => {
  const musiciansList = getMusiciansLocalStorage();
  const findByName = musiciansList.filter(
    (mus) => sanitizeText(mus.name) === sanitizeText(name)
  );

  return findByName ? findByName : undefined;
};

const findByInstrument = (item: string) => {
  const musiciansList = getMusiciansLocalStorage();

  let listFiltered = musiciansList.filter((musician) =>
    musician.instruments.find((instrument) => instrument === item)
  );

  return listFiltered ? listFiltered : undefined;
};

const findByMusicGenre = (item: string) => {
  const musiciansList = getMusiciansLocalStorage();

  let listFiltered = musiciansList.filter((musician) =>
    musician.musicGenres.find((genre) => genre === item)
  );

  return listFiltered ? listFiltered : undefined;
};

const findAvailable = (item: boolean) => {
  const musiciansList = getMusiciansLocalStorage();
  const findAvailableMusician = musiciansList.filter(
    (mus) => mus.available === item
  );

  return findAvailableMusician ? findAvailableMusician : undefined;
};

const isChecked = (value: string) => {
  const element = document.querySelector(
    `[value=${value}]`
  ) as HTMLInputElement;

  return element.checked ? true : false;
};

export const findMusicianButton = () => {
  const button = document.querySelector(
    '.app-form-button'
  ) as HTMLButtonElement;

  button.addEventListener('click', (e: Event) => {
    e.preventDefault();
    const name = inputSingleString('nome');
    const email = inputSingleString('email');
    const instrument = inputSingleString('instrumento');
    const musicGenre = inputSingleString('genero');
    const isAvailable = document.querySelector(
      "[name = 'disponivel']"
    ) as HTMLInputElement;

    if (
      name === '' &&
      email === '' &&
      instrument === '' &&
      musicGenre === '' &&
      !isAvailable.checked
    ) {
      alert('Preencha algum dos campos para realizar a busca');
      return;
    }

    const nameChecked = isChecked('buscar-nome');
    const emailChecked = isChecked('buscar-email');
    const instrumentChecked = isChecked('buscar-instrumento');
    const musicGenreChecked = isChecked('buscar-genero');
    const isAvailableChecked = isChecked('buscar-disponivel');

    if (
      !nameChecked &&
      !emailChecked &&
      !instrumentChecked &&
      !musicGenreChecked &&
      !isAvailableChecked
    ) {
      alert('Você deve marcar pelo menos um campo para busca');
      return;
    }
  });
};

const checkIfCheckedAndFilled = (inputName: string, checkedName: string) => {
  const input = inputSingleString(inputName);
  const checked = isChecked(checkedName);

  if (input === '' && !checked) {
    return;
  }

  if (input === '' && checked) {
    alert('O campo marcado está em branco');
    return;
  }

  if (input !== '' && !checked) {
    alert('O campo preenchido não foi marcado');
    return;
  }

  return input;
};

/* if (name !== '') {
        const findName = findByName(name);
        console.log(findName);
        if (findName === undefined) {
          throw new Error('A busca não retornou resultados');
        }
        musiciansList(findName);
      } */
/* if (email !== '') {
        const findEmail = findByEmail(email);
        if (findEmail === undefined) {
          throw new Error('A busca não retornou resultados');
        } else {
          musiciansList([findEmail!]);
        }
      } */
/* if (instrument !== '') {
        const findInstrument = findByInstrument(instrument);
        if (findInstrument === undefined) {
          throw new Error('A busca não retornou resultados');
        }
        musiciansList(findInstrument);
      } */
/* if (musicGenre !== '') {
        const findGenre = findByMusicGenre(musicGenre);
        if (findGenre === undefined) {
          throw new Error('A busca não retornou resultados');
        }
        musiciansList(findGenre);
      } */
