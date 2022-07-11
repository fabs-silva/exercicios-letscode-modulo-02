import {
  deleteItemArray,
  findByEmailButton,
} from "../controllers/UpdateMusicianController";
import { Musician } from "../models/Musician";
import { getTitle } from "../utils/General";

const updateMusician = (musicians: Musician[]): void => {
  const appBody = document.getElementById("app-body") as HTMLDivElement;
  appBody.appendChild(getTitle("Modificar Músico"));
  appBody.appendChild(formUpdateMusician());

  findByEmailButton(musicians);
};

const formUpdateMusician = (): HTMLFormElement => {
  const form = document.createElement("form") as HTMLFormElement;
  form.classList.add("app-form");

  form.innerHTML = `
   <legend>Digite o email para buscar um músico:</legend>
   <fieldset class="app-form-group" id="form-group-email">
        <label for="email" class="app-form-label">Email do músico:</label>
        <input type="email" placeholder="Email" id="email" class="app-form-input" required/>
    </fieldset>
  <fieldset class="app-form-group" id="form-group-name">
        <label for="nome" class="app-form-label">Nome do músico:</label>
        <input type="text" placeholder="Nome" id="nome" class="app-form-input" disabled/>
    </fieldset>
    <fieldset class="app-form-group" id="form-group-instruments">
        <label for="instrumentos" class="app-form-label">Instrumento(s):<span>* Separados por vírgula</span></label>
        <input type="text" placeholder="Escolha pelo menos um instrumento" id="instrumentos" class="app-form-input" disabled/>
    </fieldset>
    <fieldset class="app-form-group" id="form-group-musicGenres">
        <label for="generos" class="app-form-label">Gênero(s):<span>* Separados por vírgula</span></label>
        <input type="text" placeholder="Escolha pelo menos um gênero" id="generos" class="app-form-input" disabled/>
    </fieldset>
    <div class="app-form-button-container" id="form-button">
      <button class="app-form-button" id="find-button">Buscar</button>
      <button class="app-form-button" id="save-button" disabled>Salvar</button>
    </div>
  `;

  return form;
};

const renderArrayElements = (
  arrayItems: string[],
  id: string,
  nextElement: string
) => {
  const divArray = document.createElement("div") as HTMLDivElement;
  divArray.classList.add("app-update-musician-array");

  divArray.innerHTML = `
   <div class="app-update-musician-changeable" id="list-${id}">${arrayItems
    .map((item) => {
      return `<p id=${item.replace(" ", "-")}>${item}<span>x</span></p>`;
    })
    .join("")}
     </div>`;

  const form = document.querySelector(".app-form") as HTMLFormElement;
  const fieldsetArray = document.getElementById(nextElement) as HTMLElement;
  form.insertBefore(divArray, fieldsetArray);
};

const musicianData = (musician: Musician) => {
  const nameInput = document.getElementById("nome") as HTMLInputElement;
  nameInput.value = musician.name;

  const emailInput = document.getElementById("email") as HTMLInputElement;
  emailInput.disabled = true;

  const instrumentsInput = document.getElementById(
    "instrumentos"
  ) as HTMLInputElement;
  instrumentsInput.disabled = false;

  renderArrayElements(
    musician.instruments,
    "form-group-instruments",
    "form-group-musicGenres"
  );

  deleteItemArray(musician, "instruments");

  const musicGenresInput = document.getElementById(
    "generos"
  ) as HTMLInputElement;
  musicGenresInput.disabled = false;

  renderArrayElements(
    musician.musicGenres,
    "form-group-musicGenres",
    "form-button"
  );

  deleteItemArray(musician, "musicGenres");

  const findButton = document.getElementById(
    "find-button"
  ) as HTMLButtonElement;
  findButton.disabled = true;

  const saveButton = document.getElementById(
    "save-button"
  ) as HTMLButtonElement;
  saveButton.disabled = false;
};

export { musicianData, updateMusician };
