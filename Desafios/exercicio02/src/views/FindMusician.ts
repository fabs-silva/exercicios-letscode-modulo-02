import { findMusicianButton } from '../controllers/FindMusicianController';
import { Musician } from '../models/Musician';
import { getTitle } from '../utils';

const findMusician = (): HTMLDivElement => {
  const appBody = document.getElementById('app-body') as HTMLDivElement;

  if (appBody.hasChildNodes()) {
    appBody.remove();
  }

  const newAppBody = document.createElement('main') as HTMLDivElement;
  newAppBody.id = 'app-body';
  newAppBody.appendChild(getTitle('Buscar Músicos'));
  newAppBody.appendChild(searchMusician());

  setTimeout(() => {
    findMusicianButton();
  }, 1000);

  return newAppBody;
};

const searchMusician = () => {
  const divSearch = document.createElement('div') as HTMLDivElement;
  divSearch.classList.add('app-form-search-musician');

  divSearch.innerHTML = `
    <div class="app-search-options">
      <p>Buscar por:</p>
      <div class="app-search-options-group">
      <div class="app-search-form-group" id="form-group-name">
        <label for="nome" class="app-form-label">Nome:</label>
        <input type="text" placeholder="Buscar por nome..." id="nome" class="app-form-input"/>
    </div>
    <div class="app-search-form-group" id="form-group-email">
        <label for="email" class="app-form-label">Email do músico:</label>
        <input type="email" placeholder="Buscar por email..." id="email" class="app-form-input"/>
    </div>
    </div>
    <div class="app-search-options-group">
    <div class="app-search-form-group" id="form-group-instruments">
        <label for="instrumento" class="app-form-label">Instrumento(s):</label>
        <input type="text" placeholder="Buscar por instrumento..." id="instrumento" class="app-form-input"/>
    </div>
    <div class="app-search-form-group" id="form-group-genres">
        <label for="genero" class="app-form-label">Gênero(s):</label>
        <input type="text" placeholder="Buscar por gênero..." id="genero" class="app-form-input"/>
    </div>
    </div>
      <div class="app-form-button-container">
        <button class="app-form-button">Buscar</button>
      </div>
    </div>
  `;

  return divSearch;
};

const musiciansList = (musicians: Musician[]) => {
  const divMusicianList = document.createElement('div') as HTMLDivElement;
  divMusicianList.classList.add('app-list-search-musician');

  divMusicianList.innerHTML = `
  <ul class="app-list-search-header">
  <li>Nome</li>
  <li>Email</li>
  <li>Instrumento(s)</li>
  <li>Gênero(s)</li>
  <li>Disponível?</li>
  </ul>
  <div class="app-list-search-body">
    ${musicians.map((mus) => {
      return `<ul>
    <li>${mus.name}</li>
    <li>${mus.email}</li>
    <li>${mus.instruments.map((ins) => {
      return `<span>${ins}</span>`;
    })}</li>
    <li>${mus.musicGenres.map((genre) => {
      return `<span>${genre}</span>`;
    })}</li>
    <li>${mus.available ? 'Sim' : 'Não'}</li>
    </ul>`;
    })}
  </div>
  `;

  const appBody = document.getElementById('app-body')!;
  appBody.appendChild(divMusicianList);
};

export { findMusician, musiciansList };
