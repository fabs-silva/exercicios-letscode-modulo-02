import { findMusiciansButton } from "../controllers/FindMusiciansController";
import { Musician } from "../models/Musician";
import { getTitle } from "../utils/General";

const findMusicians = (musicians: Musician[]) => {
  const appBody = document.getElementById("app-body") as HTMLDivElement;
  appBody.appendChild(getTitle("Buscar Músicos"));
  appBody.appendChild(formFindMusicians());

  findMusiciansButton(musicians);
};

const formFindMusicians = () => {
  const form = document.createElement("div") as HTMLDivElement;
  form.classList.add("app-form");

  form.innerHTML = `
      <legend>Buscar por:</legend>
      <div class="app-find-by-inputs-group">
        <fieldset class="app-find-by-group" id="form-group-name">
          <label for="nome"><input type="checkbox" value="find-name" /> Nome:</label>
          <input type="text" placeholder="Buscar por nome..." id="find-name" class="app-form-input"/>
      </fieldset>
        <fieldset class="app-find-by-group" id="form-group-email">
            <label for="email"><input type="checkbox" value="find-email" /> Email do músico:</label>
            <input type="email" placeholder="Buscar por email..." id="find-email" class="app-form-input"/>
        </fieldset>
      </div>
      <div class="app-find-by-inputs-group">
        <fieldset class="app-find-by-group" id="form-group-instruments">
            <label for="instrumento"><input type="checkbox" value="find-instruments" /> Instrumento:</label>
            <input type="text" placeholder="Buscar por instrumento..." id="find-instruments" class="app-form-input"/>
        </fieldset>
        <fieldset class="app-find-by-group" id="form-group-musicGenres">
            <label for="genero"><input type="checkbox" value="find-musicGenres" /> Gênero:</label>
            <input type="text" placeholder="Buscar por gênero..." id="find-musicGenres" class="app-form-input"/>
        </fieldset>
        </div>
      <div class="app-form-button-container">
        <button class="app-form-button">Buscar</button>
      </div>
  `;

  return form;
};

const musiciansList = (musicians: Musician[]) => {
  const searchResults = document.querySelector(".app-search-results");

  const appBody = document.getElementById("app-body")!;
  if (searchResults) {
    appBody.removeChild(searchResults);
  }

  const divMusicianList = document.createElement("div") as HTMLDivElement;
  divMusicianList.classList.add("app-search-results");

  divMusicianList.innerHTML = `
  <ul class="app-search-results-header">
  <li>Nome</li>
  <li>Email</li>
  <li>Instrumento(s)</li>
  <li>Gênero(s)</li>
  </ul>
  <div class="app-search-results-body">
    ${musicians
      .map((mus) => {
        return `<ul>
    <li>${mus.name}</li>
    <li>${mus.email}</li>
    <li>${mus.instruments
      .map((ins) => {
        return `<span>${ins}</span>`;
      })
      .join("/ ")}</li>
    <li>${mus.musicGenres
      .map((genre) => {
        return `<span>${genre}</span>`;
      })
      .join("/ ")}</li>
    </ul>`;
      })
      .join("")}
  </div>
  `;

  appBody.appendChild(divMusicianList);
};

export { findMusicians, musiciansList };
