import { Musician } from '../models/Musician';

const getMusiciansLocalStorage = (): Musician[] => {
  let musicians: Musician[] = [];

  let localStorageList = localStorage.getItem('musicians');
  if (localStorageList) {
    musicians = JSON.parse(localStorageList);
  }

  return musicians;
};

const saveMusicianLocalStorage = (musicians: Musician[]): void => {
  localStorage.setItem('musicians', JSON.stringify(musicians));
};

const cleanLocalStorage = (): void => {
  localStorage.removeItem('musicians');
};

export {
  getMusiciansLocalStorage,
  saveMusicianLocalStorage,
  cleanLocalStorage,
};
