import { Musician } from '../models/Musician';
import { getTitle } from '../utils/General';

const findMusicians = () => {
  const appBody = document.getElementById('app-body') as HTMLDivElement;
  appBody.appendChild(getTitle('Buscar Músicos'));
  appBody.appendChild(formFindMusicians());

  //findMusiciansButton();
};

const formFindMusicians = () => {
  const form = document.createElement('div') as HTMLDivElement;
  form.classList.add('app-form');

  form.innerHTML = `
      <legend>Buscar por:</legend>
      <div class="app-find-by-inputs-group">
        <fieldset class="app-find-by-group" id="form-group-name">
          <label for="nome"><input type="checkbox" value="buscar-nome"/> Nome:</label>
          <input type="text" placeholder="Buscar por nome..." id="nome" class="app-form-input"/>
      </fieldset>
        <fieldset class="app-find-by-group" id="form-group-email">
            <label for="email"><input type="checkbox" value="buscar-email"/> Email do músico:</label>
            <input type="email" placeholder="Buscar por email..." id="email" class="app-form-input"/>
        </fieldset>
      </div>
      <div class="app-find-by-inputs-group">
        <fieldset class="app-find-by-group" id="form-group-instruments">
            <label for="instrumento"><input type="checkbox" value="buscar-instrumento"/> Instrumento:</label>
            <input type="text" placeholder="Buscar por instrumento..." id="instrumento" class="app-form-input"/>
        </fieldset>
        <fieldset class="app-find-by-group" id="form-group-genres">
            <label for="genero"><input type="checkbox" value="buscar-genero"/> Gênero:</label>
            <input type="text" placeholder="Buscar por gênero..." id="genero" class="app-form-input"/>
        </fieldset>
      </div>
        <div class="app-find-by-inputs-group" id="form-group-available">
          <label class="app-form-label"><input type="checkbox" value="buscar-disponivel"/> Está disponível?</label>
          <div class="app-form-radio">
            <fieldset class="app-form-radio-option">
              <input type="radio" name="disponivel" id="disponivel" value="true" required/>
              <label for="disponivel" class="app-radio-label">Sim</label>
            </fieldset>
            <fieldset class="app-form-radio-option">
              <input type="radio" name="disponivel" id="nao-disponivel" value="false" required/>
              <label for="nao-disponivel" class="app-radio-label">Não</label>
            </fieldset>
          </div>
        </div>
      <div class="app-form-button-container">
        <button class="app-form-button">Buscar</button>
      </div>
  `;

  return form;
};

const musiciansList = (musicians: Musician[]) => {
  const divMusicianList = document.createElement('div') as HTMLDivElement;
  divMusicianList.classList.add('app-search-results');

  divMusicianList.innerHTML = `
  <ul class="app-search-results-header">
  <li>Nome</li>
  <li>Email</li>
  <li>Instrumento(s)</li>
  <li>Gênero(s)</li>
  <li>Disponível?</li>
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
      .join('/ ')}</li>
    <li>${mus.musicGenres
      .map((genre) => {
        return `<span>${genre}</span>`;
      })
      .join('/ ')}</li>
    <li>${mus.available ? 'sim' : 'não'}</li>
    </ul>`;
      })
      .join('')}
  </div>
  `;

  const appBody = document.getElementById('app-body')!;
  appBody.appendChild(divMusicianList);
};

export { findMusicians, musiciansList };
