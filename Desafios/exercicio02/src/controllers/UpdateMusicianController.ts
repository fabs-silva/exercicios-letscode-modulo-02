import { Musician } from '../models/Musician';
import { inputMultipleStrings } from '../utils/Inputs';
import { saveMusicianLocalStorage } from '../utils/LocalStorage';
import { musicianData } from '../views/UpdateMusician';
import { findBySingleInput } from './FindMusiciansController';

const updateMusicianData = (musicians: Musician[]) => {
  const musician = findBySingleInput('email', musicians);

  if (!musician) {
    alert('Email não encontrado');
    return;
  }

  musicianData(musician[0]);
  saveUpdatedMusicianButton(musicians, musician[0]);
};

const findByEmailButton = (musicians: Musician[]) => {
  const button = document.querySelector<HTMLButtonElement>('.app-form-button');

  button?.addEventListener('click', (e: Event) => {
    e.preventDefault();
    updateMusicianData(musicians);
  });
};

const deleteItemArray = (
  musician: Musician,
  attribute: 'instruments' | 'musicGenres'
) => {
  const mainElement = document.getElementById(
    `list-form-group-${attribute}`
  ) as HTMLDivElement;

  musician[attribute].forEach((item) => {
    const itemElement = document.getElementById(item) as HTMLParagraphElement;
    itemElement.addEventListener('click', (e: Event) => {
      e.preventDefault();
      const elementText = itemElement?.textContent?.substring(
        0,
        itemElement?.textContent?.length - 1
      );
      mainElement.removeChild(itemElement);
      musician[attribute] = musician[attribute].filter(
        (i) => i !== elementText
      );
    });
  });
};

const saveUpdatedMusician = (musician: Musician): Musician => {
  const instruments = inputMultipleStrings('instrumentos');
  const musicGenres = inputMultipleStrings('generos');

  const updatedMusician: Musician = musician;

  if (instruments) {
    updatedMusician.instruments = [
      ...new Set(updatedMusician.instruments.concat(instruments)),
    ];
  }

  if (musicGenres) {
    updatedMusician.musicGenres = [
      ...new Set(updatedMusician.musicGenres.concat(musicGenres)),
    ];
  }

  return updatedMusician;
};

const saveUpdatedMusicianButton = (
  musicians: Musician[],
  musician: Musician
) => {
  const button = document.querySelector<HTMLButtonElement>('.app-button-save');

  button?.addEventListener('click', () => {
    const updatedMusician = saveUpdatedMusician(musician);
    let newMusiciansList = musicians.filter(
      (mus) => mus.id !== updatedMusician.id
    );
    newMusiciansList = [...newMusiciansList, musician];

    saveMusicianLocalStorage(newMusiciansList);
    alert('Alterações salvas com sucesso');
  });
};

export { findByEmailButton, deleteItemArray };
