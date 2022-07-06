import { getMusiciansLocalStorage } from './utils/LocalStorage';
import { menu } from './views/MenuView';
import { updateMusician } from './views/UpdateMusician';

const musicians = getMusiciansLocalStorage();

menu();
updateMusician();
