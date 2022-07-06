import { inputSingleString } from '../utils/Inputs';
import { musicianData } from '../views/UpdateMusician';
import { findByEmail } from './FindMusicians';

const updateMusicianData = () => {
  const email = inputSingleString('email');
  const musician = findByEmail(email);
  if (!musician) {
    throw new Error('Email não encontrado');
  }
  musicianData(musician);
  console.log(musician);
};

const findByEmailButton = () => {
  const button = document.querySelector<HTMLButtonElement>('.app-form-button');

  button?.addEventListener('click', (e: Event) => {
    e.preventDefault();
    updateMusicianData();
  });
};

export { findByEmailButton };
