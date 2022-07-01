import { getTitle } from '../utils';

export const updateMusician = (): void => {
  const appBody = document.getElementById('app-body')!;
  appBody.appendChild(getTitle('Modificar Músico'));
  appBody.appendChild(formUpdateMusician());
  appBody.appendChild(musicianData());
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
      <button class="app-form-button" disabled>Buscar</button>
      <button class="app-form-button">Salvar</button>
    </div>
  `;

  return form;
};

const musicianData = () => {
  const divMusicianData = document.createElement('div') as HTMLDivElement;
  divMusicianData.classList.add('app-list-search-musician');

  divMusicianData.innerHTML = `
  <div class="app-data">
  <ul class="app-data-header">
  <li>Nome</li>
  <li>Email</li>
  </ul>
  <ul class="app-data-body">
  <li>Fabiana</li>
  <li>fabiana@fabiana.com</li>
  </ul>
  </div>
  <div class="app-data-changeable">
  <div>
  <div class="app-form-group" id="form-group-instruments">
        <label for="instrumentos" class="app-form-label">Instrumento(s):</label>
        <input type="text" placeholder="Adicione" id="instrumentos" class="app-form-input"/>
    </div>
  <ul class="app-form-list" id="instruments-list">
  <a href="#"><li>Piano <span class="delete-from-list">x</span></li></a>
  <a href="#"><li>Teclado <span class="delete-from-list">x</span></li></a>
  </ul>
  </div>
  <div>
  <div class="app-form-group" id="form-group-genres">
      <label for="generos" class="app-form-label">Gênero(s):</label>
      <input type="text" placeholder="Escolha pelo menos um gênero" id="generos" class="app-form-input"/>
  </div>
  <ul class="app-form-list" id="genres-list">
  <a href="#"><li>Folk <span class="delete-from-list">x</span></li></a>
  <a href="#"><li>Pop <span class="delete-from-list">x</span></li></a>
  <a href="#"><li>Rock <span class="delete-from-list">x</span></li></a>
  </ul>
  </div>
  </div>
  `;

  return divMusicianData;
};
