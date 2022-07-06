import { Musician } from '../models/Musician';
import { sanitizeText } from '../utils/General';
import { getMusiciansLocalStorage } from '../utils/LocalStorage';

const findByEmail = (email: string): Musician | null => {
  const musiciansList = getMusiciansLocalStorage();
  const findEmail = musiciansList.find(
    (mus) => sanitizeText(mus.email) === sanitizeText(email)
  );

  return findEmail ? findEmail : null;
};

export { findByEmail };
