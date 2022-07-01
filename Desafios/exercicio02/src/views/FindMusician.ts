import { getTitle } from '../utils';

const findMusician = () => {
  const appBody = document.getElementById('app-body');
  appBody?.appendChild(getTitle('Buscar Músicos'));
  appBody?.appendChild(searchMusician());
  appBody?.appendChild(musiciansList());
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
        <label for="instrumentos" class="app-form-label">Instrumento(s):</label>
        <input type="text" placeholder="Buscar por instrumento..." id="instrumentos" class="app-form-input"/>
    </div>
    <div class="app-search-form-group" id="form-group-genres">
        <label for="generos" class="app-form-label">Gênero(s):</label>
        <input type="text" placeholder="Buscar por gênero..." id="generos" class="app-form-input"/>
    </div>
    </div>
      <div class="app-form-button-container">
        <button class="app-form-button">Buscar</button>
      </div>
    </div>
  `;

  return divSearch;
};

const musiciansList = () => {
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
  <ul>
  <li>Fabiana</li>
  <li>fabiana@fabiana.com</li>
  <li><span>Teclado</span> <span>Voz</span></li>
  <li><span>Folk</span> <span>Pop</span> <span>Rock</span></li>
  <li>Sim</li>
  </ul>
  </div>
  `;

  return divMusicianList;
};

export { findMusician };
