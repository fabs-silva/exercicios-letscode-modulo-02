import { Musician } from "../models/Musician";

const getMusiciansLocalStorage = (): Musician[] => {
  let listMusicians: Musician[] = [];

  let localStorageList = localStorage.getItem("listMusicians");
  if (localStorageList) {
    listMusicians = JSON.parse(localStorageList);
  }

  return listMusicians;
};

const saveMusicianLocalStorage = (listMusicians: Musician[]): void => {
  localStorage.setItem("listMusicians", JSON.stringify(listMusicians));
};

const cleanLocalStorage = (): void => {
  localStorage.removeItem("listMusicians");
};

export {
  getMusiciansLocalStorage,
  saveMusicianLocalStorage,
  cleanLocalStorage,
};
