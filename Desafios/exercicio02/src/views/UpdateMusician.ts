import { findByEmailButton } from '../controllers/UpdateMusicianController';
import { Musician } from '../models/Musician';
import { getTitle } from '../utils/General';

const updateMusician = (musicians: Musician[]) => {
  const appBody = document.getElementById('app-body') as HTMLDivElement;
  appBody.appendChild(getTitle('Modificar Músico'));
  appBody.appendChild(formUpdateMusician());

  findByEmailButton(musicians);
};

const formUpdateMusician = () => {
  const form = document.createElement('form') as HTMLFormElement;
  form.classList.add('app-form');

  form.innerHTML = `
  <fieldset class="app-form-group" id="form-group-email">
  <label for="email" class="app-form-label">Email do músico:</label>
  <input type="email" placeholder="Buscar por email..." id="email" class="app-form-input"/>
</fieldset>
    <div class="app-form-button-container">
      <button class="app-form-button">Buscar</button>
    </div>
  `;

  return form;
};

const musicianData = (musician: Musician) => {
  const divMusicianData = document.createElement('div') as HTMLDivElement;
  divMusicianData.classList.add('app-update-musician');

  divMusicianData.innerHTML = `
  <ul class="app-update-musician-header">
  <li>Nome</li>
  <li>Email</li>
  <li>Instrumento(s)</li>
  <li>Gênero(s)</li>
  <li>Disponível?</li>
  </ul>
  <div class="app-update-musician-body">
<ul>
    <li>${musician.name}</li>
    <li>${musician.email}</li>
    <li class="app-update-musician-changeable">${musician.instruments
      .map((ins) => {
        return `<p>${ins}<span>x</span></p>`;
      })
      .join('')}
      <input type="text"placeholder="Buscar por email..." id="instrumentos" class="app-form-input" />
      </li>
    <li class="app-update-musician-changeable">
    <div>${musician.musicGenres
      .map((genre) => {
        return `<p>${genre}<span>x</span></p>`;
      })
      .join('')}
      </div>
      <input type="text" placeholder="Buscar por email..." id="generos" class="app-form-input"/>
      </li>
    <li>${musician.available ? 'sim' : 'não'}</li>
    </ul>
  </div>
  `;

  const appBody = document.getElementById('app-body')!;
  appBody.appendChild(divMusicianData);
};

/*const addNewItemArray = (array: string[], id: string) => {
  const item = inputSingleString(id);
  item && array.push(item);
};
 */

export { musicianData, updateMusician };
