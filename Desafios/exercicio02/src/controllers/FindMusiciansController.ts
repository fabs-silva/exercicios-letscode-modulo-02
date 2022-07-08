import { Musician } from '../models/Musician';
import { sanitizeText } from '../utils/General';
import { musiciansList } from '../views/FindMusicians';

const findBySingleInput = (
  input: 'name' | 'email',
  musicians: Musician[]
): Musician[] => {
  const findInput = document.getElementById(input) as HTMLInputElement;

  const findResult = musicians.filter(
    (mus) => sanitizeText(mus[input]) === sanitizeText(findInput.value)
  );

  return findResult.length !== 0 ? findResult : [];
};

const findByArray = (
  input: 'instruments' | 'musicGenres',
  musicians: Musician[]
): Musician[] => {
  const findInput = document.getElementById(input) as HTMLInputElement;

  const findResult = musicians.filter((mus) =>
    mus[input].find((inst: string) => inst === findInput.value)
  );

  return findResult.length !== 0 ? findResult : [];
};

const checkWhichIsSelected = () => {
  const selectedInputs = document.querySelectorAll(
    "[type='checkbox']"
  ) as NodeListOf<HTMLInputElement>;

  let elementNames: string[] = [];

  selectedInputs.forEach((input) => {
    if (input.checked) {
      elementNames = [...elementNames, input.value];
    }
  });

  if (elementNames.length === 0) {
    alert('Selecione pelo menos um item para a busca');
    return;
  }

  return elementNames;
};

const getResults = (input: string, musicians: Musician[]) => {
  let results: Musician[] = [];
  if (input === 'buscar-nome') {
    results = findBySingleInput('name', musicians);
  }

  if (input === 'buscar-email') {
    results = findBySingleInput('email', musicians);
  }

  if (input === 'buscar-instrumento') {
    results = findByArray('instruments', musicians);
  }

  if (input === 'buscar-genero') {
    results = findByArray('musicGenres', musicians);
  }

  return results;
};

const findMusiciansButton = (musicians: Musician[]) => {
  const button = document.querySelector<HTMLButtonElement>('.app-form-button');

  button?.addEventListener('click', () => {
    const inputNames = checkWhichIsSelected();
    let results: Musician[] = musicians;

    if (!inputNames) {
      return;
    }

    for (let input of inputNames) {
      results = getResults(input, results);
    }

    if (!results) {
      alert('A busca não retornou resultados');
      return;
    }

    musiciansList(results);
  });
};

export { findBySingleInput, findMusiciansButton };
