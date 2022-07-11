import { addMusicianButton } from '../controllers/CreateMusicianController';
import { Musician } from '../models/Musician';
import { getTitle } from '../utils/General';

const createMusician = (musicians: Musician[]): void => {
  const appBody = document.getElementById('app-body') as HTMLDivElement;
  appBody.appendChild(getTitle('Cadastrar Músico'));
  appBody?.appendChild(formCreateMusician());
  addMusicianButton(musicians);
};

const formCreateMusician = (): HTMLFormElement => {
  const form = document.createElement('form') as HTMLFormElement;
  form.classList.add('app-form');

  form.innerHTML = `
    <fieldset class="app-form-group" id="form-group-name">
        <label for="nome" class="app-form-label">Nome do músico:</label>
        <input type="text" placeholder="Nome" id="nome" class="app-form-input" required/>
    </fieldset>
    <fieldset class="app-form-group" id="form-group-email">
        <label for="email" class="app-form-label">Email do músico:</label>
        <input type="email" placeholder="Email" id="email" class="app-form-input" required/>
    </fieldset>
    <fieldset class="app-form-group" id="form-group-instruments">
        <label for="instrumentos" class="app-form-label">Instrumento(s):<span>* Separados por vírgula</span></label>
        <input type="text" placeholder="Escolha pelo menos um instrumento" id="instrumentos" class="app-form-input" required/>
    </fieldset>
    <fieldset class="app-form-group" id="form-group-musicGenres">
        <label for="generos" class="app-form-label">Gênero(s):<span>* Separados por vírgula</span></label>
        <input type="text" placeholder="Escolha pelo menos um gênero" id="generos" class="app-form-input" required/>
    </fieldset>
    <div class="app-form-button-container">
      <button class="app-form-button">Cadastrar</button>
    </div>
  `;

  return form;
};

export { createMusician };
