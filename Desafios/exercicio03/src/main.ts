import { getMusiciansLocalStorage } from "./utils/LocalStorage";
import { createBands } from "./views/CreateBands";
import { menu } from "./views/MenuView";

const musicians = getMusiciansLocalStorage();

menu();
createBands(musicians);
