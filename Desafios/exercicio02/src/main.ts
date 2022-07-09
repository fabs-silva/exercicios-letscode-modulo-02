import { getMusiciansLocalStorage } from "./utils/LocalStorage";
//import { findMusicians } from "./views/FindMusicians";
//import { createMusician } from "./views/CreateMusician";
import { menu } from "./views/MenuView";
import { updateMusician } from "./views/UpdateMusician";

const musicians = getMusiciansLocalStorage();

menu();
//createMusician(musicians);
updateMusician(musicians);
//findMusicians(musicians);
