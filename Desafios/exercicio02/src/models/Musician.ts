interface MusicianContract {
  name: string;
  email: string;
  musicGenres: string[];
  instruments: string[];
}
export class Musician implements MusicianContract {
  public name: string;
  public email: string;
  public musicGenres: string[];
  public instruments: string[];

  constructor({ name, email, musicGenres, instruments }: MusicianContract) {
    this.name = name;
    this.email = email;
    this.musicGenres = musicGenres;
    this.instruments = instruments;

    //email unico
    //strings minusculas
    //limpar acentos?
  }
}
