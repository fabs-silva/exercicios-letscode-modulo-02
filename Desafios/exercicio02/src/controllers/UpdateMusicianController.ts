import { Musician } from "../models/Musician";
import { musicianData } from "../views/UpdateMusician";
import { findBySingleInput } from "./FindMusiciansController";

const updateMusicianData = (musicians: Musician[]) => {
  const musician = findBySingleInput("email", musicians);
  if (!musician) {
    throw new Error("Email não encontrado");
  }
  musicianData(musician[0]);
};

const findByEmailButton = (musicians: Musician[]) => {
  const button = document.querySelector<HTMLButtonElement>(".app-form-button");

  button?.addEventListener("click", (e: Event) => {
    e.preventDefault();
    updateMusicianData(musicians);
  });
};

export { findByEmailButton };
