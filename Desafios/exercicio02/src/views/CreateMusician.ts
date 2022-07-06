import { addMusicianButton } from '../controllers/CreateMusicianController';
import { getTitle } from '../utils/General';

const createMusician = () => {
  const appBody = document.getElementById('app-body') as HTMLDivElement;
  appBody.appendChild(getTitle('Cadastrar Músico'));
  appBody?.appendChild(formCreateMusician());
  addMusicianButton();
};

const formCreateMusician = () => {
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
        <input type="text" placeholder="Escolha pelo menos 1 instrumento" id="instrumentos" class="app-form-input" required/>
    </fieldset>
    <fieldset class="app-form-group" id="form-group-genres">
        <label for="generos" class="app-form-label">Gênero(s):<span>* Separados por vírgula</span></label>
        <input type="text" placeholder="Escolha pelo menos um gênero" id="generos" class="app-form-input" required/>
    </fieldset>
    <fieldset class="app-form-group" id="form-group-available">
        <label class="app-form-label">Está disponível?</label>
        <div class="app-form-radio">
        <fieldset class="app-form-radio-option">
        <input type="radio" name="disponivel" id="disponivel" value="true" required/>
        <label for="disponivel"></label>Sim</label>
        </fieldset>
        <fieldset class="app-form-radio-option">
        <input type="radio" name="disponivel" id="nao-disponivel" value="false" required/>
        <label for="nao-disponivel"></label>Não</label>
        </fieldset>
        </div>
    </fieldset>
    <div class="app-form-button-container">
      <button class="app-form-button">Cadastrar</button>
    </div>
  `;

  return form;
};

export { createMusician };
