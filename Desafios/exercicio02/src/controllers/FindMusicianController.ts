import { inputSingleString, sanitizeText } from '../utils';
import { getMusiciansLocalStorage } from './LocalStorageController';

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

    if (name === '' && email === '' && instrument === '' && musicGenre === '') {
      alert('Preencha algum dos campos para realizar a busca');
    } else {
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
    }
  });
};

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
