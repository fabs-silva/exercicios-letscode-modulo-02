import { Musician } from '../../models/Musician';
import { getMusiciansLocalStorage } from '../../utils/LocalStorage';

const findByEmail = (email: string): Musician | null => {
  const musiciansList = getMusiciansLocalStorage();
  const findEmail = musiciansList.find(
    (mus) => sanitizeText(mus.email) === sanitizeText(email)
  );

  return findEmail ? findEmail : null;
};

const inputSingleString = (id: string) => {
  const inputString = document.getElementById(id) as HTMLInputElement;

  return inputString.value.toLowerCase().trim();
};

const inputMultipleStrings = (id: string) => {
  const inputArray = document.getElementById(id) as HTMLInputElement;

  let arrayItems: string[] = Array.from(
    inputArray.value.toLowerCase().split(','),
    (i) => i.trim()
  );

  for (let item of arrayItems) {
    item = item.trim();
  }

  const arrayUniqueValues = [...new Set(arrayItems)];

  return arrayUniqueValues;
};

const inputBoolean = (id: string) => {
  const inputBoolean = document.querySelector(
    `[name = ${id}]`
  ) as HTMLInputElement;

  return inputBoolean.checked.valueOf();
};

export {
  getTitle,
  getParagraphText,
  findByEmail,
  inputSingleString,
  inputMultipleStrings,
  inputBoolean,
  sanitizeText,
};



<div class="app-update">
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