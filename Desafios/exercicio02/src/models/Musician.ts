import { v4 as uuidv4 } from 'uuid';

interface MusicianContract {
  id?: string;
  name: string;
  email: string;
  musicGenres: string[];
  instruments: string[];
  available: boolean;
}
export class Musician implements MusicianContract {
  public readonly id?: string;
  public name: string;
  public email: string;
  public musicGenres: string[];
  public instruments: string[];
  public available: boolean;

  constructor({
    name,
    email,
    musicGenres,
    instruments,
    available,
  }: MusicianContract) {
    this.id = uuidv4();
    this.name = name;
    this.email = email;
    this.musicGenres = musicGenres;
    this.instruments = instruments;
    this.available = available;
  }
}
