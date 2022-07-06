interface PokemonContract {
  form: string;
  id: number;
  name: string;
  type: string[];
}

export class Pokemon implements PokemonContract {
  public form: string;
  public id: number;
  public name: string;
  public type: string[];

  constructor({ form, id, name, type }: PokemonContract) {
    this.form = form;
    this.id = id;
    this.name = name;
    this.type = type;
  }
}
