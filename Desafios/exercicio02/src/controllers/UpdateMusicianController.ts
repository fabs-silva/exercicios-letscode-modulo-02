import { Musician } from "../models/Musician";
import { musicianData } from "../views/UpdateMusician";
import { findBySingleInput } from "./FindMusiciansController";

const updateMusicianData = (musicians: Musician[]) => {
  const musician = findBySingleInput("email", musicians);

  if (!musician) {
    alert("Email não encontrado");
    return;
  }
  musicianData(musician[0]);
  saveUpdatedInfo(musician[0]);
};

const findByEmailButton = (musicians: Musician[]) => {
  const button = document.querySelector<HTMLButtonElement>(".app-form-button");

  button?.addEventListener("click", (e: Event) => {
    e.preventDefault();
    updateMusicianData(musicians);
  });
};

const getNewArrayElements = (musician: Musician, id: string) => {
  let arrayElements = musician[id];
};

const saveUpdatedInfo = (musician: Musician) => {
  const button = document.querySelector<HTMLButtonElement>(".app-button-save");

  button?.addEventListener("click", () => {
    alert("Alterações salvas com sucesso");
  });
};

export { findByEmailButton };
