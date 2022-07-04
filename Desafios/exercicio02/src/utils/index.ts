import { getMusiciansLocalStorage } from '../controllers/LocalStorageController';
import { Musician } from '../models/Musician';

const getTitle = (text: string): HTMLHeadingElement => {
  const h1Element = document.createElement('h1');
  h1Element.classList.add('app-title');
  h1Element.textContent = text;

  return h1Element;
};

const getParagraphText = (text: string, pClass?: string) => {
  const textElement = document.createElement('p') as HTMLParagraphElement;
  textElement.textContent = text;

  pClass && textElement.classList.add(pClass);

  return textElement;
};

const sanitizeText = (text: string) => {
  const sanitizedText = text.normalize('NFD').replace(/\p{Diacritic}/gu, '');

  return sanitizedText.trim();
};

const findByEmail = (email: string): Musician | null => {
  const musiciansList = getMusiciansLocalStorage();
  const findEmail = musiciansList.find(
    (mus) => sanitizeText(mus.email) === sanitizeText(email)
  );

  return findEmail ? findEmail : null;
};

const inputSingleString = (id: string) => {
  const inputString = document.getElementById(id) as HTMLInputElement;

  return inputString.value.toLowerCase().trim();
};

const inputMultipleStrings = (id: string) => {
  const inputArray = document.getElementById(id) as HTMLInputElement;

  let arrayItems: string[] = Array.from(
    inputArray.value.toLowerCase().split(','),
    (i) => i.trim()
  );

  for (let item of arrayItems) {
    item = item.trim();
  }

  const arrayUniqueValues = [...new Set(arrayItems)];

  return arrayUniqueValues;
};

const inputBoolean = (id: string) => {
  const inputBoolean = document.querySelector(
    `[name = ${id}]`
  ) as HTMLInputElement;

  return inputBoolean.checked.valueOf();
};

export {
  getTitle,
  getParagraphText,
  findByEmail,
  inputSingleString,
  inputMultipleStrings,
  inputBoolean,
  sanitizeText,
};
