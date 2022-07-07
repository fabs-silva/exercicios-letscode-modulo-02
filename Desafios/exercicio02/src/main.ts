import { getMusiciansLocalStorage } from './utils/LocalStorage';
import { findMusicians } from './views/FindMusicians';
import { menu } from './views/MenuView';

const musicians = getMusiciansLocalStorage();

menu();
findMusicians(musicians);
