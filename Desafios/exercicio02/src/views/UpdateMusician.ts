import { findByEmailButton } from "../controllers/UpdateMusicianController";
import { Musician } from "../models/Musician";
import { getTitle } from "../utils/General";

const updateMusician = (musicians: Musician[]) => {
  const appBody = document.getElementById("app-body") as HTMLDivElement;
  appBody.appendChild(getTitle("Modificar Músico"));
  appBody.appendChild(formUpdateMusician());

  findByEmailButton(musicians);
};

const formUpdateMusician = () => {
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
        <input type="text" placeholder="Escolha pelo menos 1 instrumento" id="instrumentos" class="app-form-input" disabled/>
    </fieldset>
    <fieldset class="app-form-group" id="form-group-genres">
        <label for="generos" class="app-form-label">Gênero(s):<span>* Separados por vírgula</span></label>
        <input type="text" placeholder="Escolha pelo menos um gênero" id="generos" class="app-form-input" disabled/>
    </fieldset>
    <div class="app-form-button-container" id="form-button">
      <button class="app-form-button">Buscar</button>
    </div>
  `;

  return form;
};

const renderArrayElements = (arrayItems: string[], id: string) => {
  const divArray = document.createElement("div") as HTMLDivElement;
  divArray.classList.add("app-update-musician-array");

  divArray.innerHTML = `<ul id="list-${id}">
   <li class="app-update-musician-changeable">${arrayItems
     .map((item) => {
       return `<p>${item}<span>x</span></p>`;
     })
     .join("")}
     </ul>`;

  const form = document.querySelector(".app-form") as HTMLFormElement;
  const fieldsetArray = document.getElementById(id) as HTMLElement;
  form.insertBefore(divArray, fieldsetArray);
};

const musicianData = (musician: Musician) => {
  const nameInput = document.getElementById("nome") as HTMLInputElement;
  const emailInput = document.getElementById("email") as HTMLInputElement;
  const instrumentsInput = document.getElementById(
    "instrumentos"
  ) as HTMLInputElement;
  const musicGenresInput = document.getElementById(
    "generos"
  ) as HTMLInputElement;
  const button = document.querySelector(
    ".app-form-button"
  ) as HTMLButtonElement;
  nameInput.value = musician.name;
  emailInput.disabled = true;
  instrumentsInput.disabled = false;
  musicGenresInput.disabled = false;
  button.classList.remove("app-form-button");
  button.classList.add("app-button-save");
  button.innerText = "Salvar";
  renderArrayElements(musician.instruments, "form-group-genres");
  renderArrayElements(musician.musicGenres, "form-button");
};

export { musicianData, updateMusician };
