import { findByEmail, inputSingleString } from "../utils";
import { musicianData } from "../views/UpdateMusician";

const updateMusicianData = () => {
  const email = inputSingleString("email");
  const musician = findByEmail(email);
  if (!musician) {
    throw new Error("Email não encontrado");
  }
  musicianData(musician);
};

const findByEmailButton = () => {
  const button = document.querySelector<HTMLButtonElement>(".app-form-button");

  button?.addEventListener("click", (e: Event) => {
    e.preventDefault();
    updateMusicianData();
  });
};

export { findByEmailButton };
