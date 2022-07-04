import { addMusicianButton } from '../controllers/CreateMusicianController';
import { getTitle } from '../utils';

const createMusician = () => {
  const appBody = document.getElementById('app-body') as HTMLDivElement;

  if (appBody.hasChildNodes()) {
    appBody.remove();
  }

  const newAppBody = document.createElement('main') as HTMLDivElement;
  newAppBody.id = 'app-body';
  newAppBody.appendChild(getTitle('Cadastrar Músico'));
  newAppBody?.appendChild(formCreateMusician());

  setTimeout(() => {
    addMusicianButton();
  }, 1000);

  return newAppBody;
};

const formCreateMusician = () => {
  const form = document.createElement('form') as HTMLFormElement;
  form.classList.add('app-form-create-musician');

  form.innerHTML = `
    <div class="app-form-group" id="form-group-name">
        <label for="nome" class="app-form-label">Nome do músico:</label>
        <input type="text" placeholder="Nome" id="nome" class="app-form-input" required/>
    </div>
    <div class="app-form-group" id="form-group-email">
        <label for="email" class="app-form-label">Email do músico:</label>
        <input type="email" placeholder="Email" id="email" class="app-form-input" required/>
    </div>
    <div class="app-form-group" id="form-group-instruments">
        <label for="instrumentos" class="app-form-label">Instrumento(s):<span>* Separados por vírgula</span></label>
        <input type="text" placeholder="Escolha pelo menos 1 instrumento" id="instrumentos" class="app-form-input" required/>
    </div>
    <div class="app-form-group" id="form-group-genres">
        <label for="generos" class="app-form-label">Gênero(s):<span>* Separados por vírgula</span></label>
        <input type="text" placeholder="Escolha pelo menos um gênero" id="generos" class="app-form-input" required/>
    </div>
    <div class="app-form-group" id="form-group-available">
        <label class="app-form-label">Está disponível?</label>
        <div class="app-form-radio">
        <div class="app-form-radio-group">
        <input type="radio" name="disponivel" id="disponivel" class="app-form-radio-button" value="true" required/>
        <label for="disponivel" class="app-radio-label"></label>Sim</label>
        </div>
        <div class="app-form-radio-group">
        <input type="radio" name="disponivel" id="nao-disponivel" class="app-form-radio-button" value="false" required/>
        <label for="nao-disponivel" class="app-radio-label"></label>Não</label>
        </div>
        </div>
    </div>
    <div class="app-form-button-container">
    <button class="app-form-button">Cadastrar</button>
    </div>
  `;

  return form;
};

export { createMusician };
