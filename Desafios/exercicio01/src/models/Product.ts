export interface ProductContract {
  id: number;
  name: string;
  price: number;
  image: string;
  amountLeft: number;
}

export interface AddToCartContract extends ProductContract {
  amountSelected: number;
}

export class Product implements ProductContract {
  public readonly id: number;
  public name: string;
  public price: number;
  public image: string;
  public amountLeft: number;

  constructor({ id, name, price, image, amountLeft }: ProductContract) {
    if (id === null || name === null || price === null || amountLeft === null) {
      throw new Error("O campo deve ser preenchido");
    }

    if (isNaN(price) || isNaN(amountLeft)) {
      throw new Error("O campo deve ser preenchido com um número");
    }

    if (price < 0 || amountLeft < 0) {
      throw new Error("O valor não pode ser menor do que 0");
    }

    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.amountLeft = amountLeft;
  }
}

export class ProductCart extends Product {
  public amountSelected: number;

  constructor({
    id,
    name,
    price,
    image,
    amountLeft,
    amountSelected,
  }: AddToCartContract) {
    super({ id, name, price, image, amountLeft });
    if (isNaN(amountSelected)) {
      throw new Error("O campo deve ser preenchido com um número");
    }

    if (amountSelected < 0) {
      throw new Error("O valor não pode ser menor do que 0");
    }

    this.amountSelected = amountSelected;
  }

  get total() {
    return this.amountSelected * this.price;
  }
}
