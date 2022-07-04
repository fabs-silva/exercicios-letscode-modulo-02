import { findByEmailButton } from '../controllers/UpdateMusicianController';
import { getTitle, inputSingleString } from '../utils';
import { Musician } from './../models/Musician';

export const updateMusician = () => {
  const appBody = document.getElementById('app-body') as HTMLDivElement;
  appBody.appendChild(getTitle('Modificar Músico'));
  appBody.appendChild(formUpdateMusician());

  findByEmailButton();
};

const formUpdateMusician = () => {
  const form = document.createElement('form') as HTMLFormElement;
  form.classList.add('app-form-create-musician');

  form.innerHTML = `
  <div class="app-email-form-group" id="form-group-email">
  <label for="email" class="app-form-label">Email do músico:</label>
  <input type="email" placeholder="Buscar por email..." id="email" class="app-form-input"/>
</div>
    <div class="app-form-button-container">
      <button class="app-form-button">Buscar</button>
    </div>
  `;

  return form;
};

export const musicianData = (musician: Musician) => {
  const divMusicianData = document.createElement('div') as HTMLDivElement;
  divMusicianData.classList.add('app-list-search-musician');

  divMusicianData.innerHTML = `
  <div class="app-data">
  <ul class="app-data-header">
  <li>Nome</li>
  <li>Email</li>
  </ul>
  <ul class="app-data-body">
  <li>${musician.name}</li>
  <li>${musician.email}</li>
  </ul>
  </div>
  <div>
  <div class="app-form-group" id="form-group-available">
  <label class="app-form-label">Está disponível?</label>
  <div class="app-form-radio">
  <div class="app-form-radio-group">
  <input type="radio" name="disponivel" id="disponivel" class="app-form-radio-button" value="true" required
  ${musician.available && ['checked']}/>
  <label for="disponivel" class="app-radio-label"></label>Sim</label>
  </div>
  <div class="app-form-radio-group">
  <input type="radio" name="disponivel" id="nao-disponivel" class="app-form-radio-button" value="false" required ${
    !musician.available && ['checked']
  }/>
  <label for="nao-disponivel" class="app-radio-label"></label>Não</label>
  </div>
  </div>
</div>
  </div>
  <div class="app-data-changeable">
  <div>
  <div class="app-form-group" id="form-group-instruments">
        <label for="instrumentos" class="app-form-label">Instrumento(s):</label>
        <input type="text" placeholder="Adicione" id="instrumentos" class="app-form-input"/>
    </div>
  <ul class="app-form-list" id="instruments-list">
  ${musician.instruments.map((inst) => {
    return ` <a href="#"><li>${inst} <span class="delete-from-list" id=${inst} type="button">x</span></li></a>`;
  })}
  </ul>
  </div>
  <div>
  <div class="app-form-group" id="form-group-genres">
      <label for="generos" class="app-form-label">Gênero(s):</label>
      <input type="text" placeholder="Escolha pelo menos um gênero" id="generos" class="app-form-input"/>
  </div>
  <ul class="app-form-list" id="genres-list">
  ${musician.musicGenres.map((genre) => {
    return ` <a href="#"><li>${genre} <span class="delete-from-list" id=${genre} type="button">x</span></li></a>`;
  })}
  </ul>
  </div>
  </div>
  `;

  const appBody = document.getElementById('app-body')!;
  appBody.appendChild(divMusicianData);
};

const addNewItemArray = (array: string[], id: string) => {
  const item = inputSingleString(id);
  item && array.push(item);
};
