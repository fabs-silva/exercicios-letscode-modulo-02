import { createBandsUsingArrays } from "../controllers/CreateBandsController";
import { Musician } from "../models/Musician";
import { getTitle } from "../utils/General";

export const createBands = (musicians: Musician[]): void => {
  const appBody = document.getElementById("app-body") as HTMLDivElement;
  appBody.appendChild(getTitle("Formar Bandas"));
  appBody?.appendChild(formSelectMusicGenre());
  buttonNext();
  buttonFind(musicians);
};

const formSelectMusicGenre = (): HTMLFormElement => {
  const form = document.createElement("form") as HTMLFormElement;
  form.classList.add("app-form");

  form.innerHTML = `
    <fieldset class="app-form-group" id="form-group-musicGenre">
        <label for="genero" class="app-form-label">Gênero:</label>
        <input type="text" placeholder="Escolha apenas um gênero" id="genero" class="app-form-input" required/>
    </fieldset>
<fieldset class="app-form-group" id="form-group-quantity">
        <label for="quantity" class="app-form-label">Quantidade de músicos:</label>
        <input type="number" placeholder="Quantidade de músicos" id="quantity" class="app-form-input" required/>
    </fieldset>
    <div class="app-form-button-container" id="button-container">
      <button class="app-form-button" id="next">Continuar</button>
       <button class="app-form-button" id="find" disabled>Buscar</button>
    </div>
  `;
  return form;
};

const buttonNext = () => {
  const buttonNextElement = document.getElementById(
    "next"
  ) as HTMLButtonElement;
  const buttonFind = document.getElementById("find") as HTMLButtonElement;

  buttonNextElement.addEventListener("click", (e: Event) => {
    e.preventDefault();
    buttonNextElement.disabled = true;
    buttonFind.disabled = false;
    selectMusicianInstrument();
  });
};

const buttonFind = (musicians: Musician[]) => {
  const buttonFind = document.getElementById("find") as HTMLButtonElement;

  buttonFind.addEventListener("click", (e: Event) => {
    e.preventDefault();
    renderResults(createBandsUsingArrays(musicians));
  });
};

const selectMusicianInstrument = () => {
  const form = document.querySelector(".app-form") as HTMLFormElement;
  const buttonContainer = document.getElementById(
    "button-container"
  ) as HTMLDivElement;
  const quantity = document.getElementById("quantity") as HTMLInputElement;
  const formInstruments = document.createElement("div") as HTMLDivElement;
  formInstruments.classList.add("app-new-fieldsets");

  for (let i = 0; i < parseInt(quantity.value); i++) {
    const instrumentFieldset = document.createElement(
      "fieldset"
    ) as HTMLFieldSetElement;
    instrumentFieldset.classList.add("app-form-group");
    instrumentFieldset.innerHTML = `
        <label for="quantity" class="app-form-label">Instrumento ${
          i + 1
        }:</label>
        <input type="text" placeholder="Escolha um instrumento" id="form-group-instrument-${
          i + 1
        }" class="app-form-input" required/>
    `;

    formInstruments.appendChild(instrumentFieldset);
  }
  form.insertBefore(formInstruments, buttonContainer);
};

const renderResults = (bands: Musician[][]) => {
  const searchResults = document.querySelector(".app-bands-results");

  const appBody = document.getElementById("app-body")!;
  if (searchResults) {
    appBody.removeChild(searchResults);
  }

  const divMusicianList = document.createElement("div") as HTMLDivElement;
  divMusicianList.classList.add("app-search-results");
  appBody.appendChild(divMusicianList);

  bands.forEach((band, index) => {
    const bandsList = document.createElement("div") as HTMLDivElement;
    bandsList.classList.add("app-bands-list");
    bandsList.innerHTML = `
    <p>Banda ${index + 1}</p>
  <ul class="app-search-results-header">
  <li>Nome</li>
  <li>Email</li>
  <li>Instrumento(s)</li>
  <li>Gêneros(s)</li>
  </ul>
  <div class="app-search-results-body">
    ${band
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
        .map((gen) => {
          return `<span>${gen}</span>`;
        })
        .join("/ ")}</li>
    </ul>`;
      })
      .join("")}
  </div>
  `;
    divMusicianList.appendChild(bandsList);
  });
};
