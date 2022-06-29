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
  #price: number;
  public image: string;
  #amountLeft: number;

  constructor(data: ProductContract) {

    const { id, name, price, image, amountLeft } = data as ProductContract;
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.amountLeft = amountLeft;
  }

  get price() {
    return this.#price
  }

  set price(price: number) {
    numberValidation(price);

    this.#price = price;
  }

  get amountLeft() {
    return this.#amountLeft
  }

  set amountLeft(amountLeft: number) {
    numberValidation(amountLeft);
    this.#amountLeft = amountLeft;
  }
}

export class ProductCart extends Product {
  #amountSelected: number;

  constructor({
    id,
    name,
    price,
    image,
    amountLeft,
    amountSelected
  }: AddToCartContract) {
    super({ id, name, price, image, amountLeft });


    this.amountSelected = amountSelected;
  }

  get amountSelected() {
    return this.#amountSelected
  }

  set amountSelected(amountSelected: number) {

    this.#amountSelected = amountSelected;
  }

  get total() {
    return this.amountSelected * this.price;
  }
}

const numberValidation = (property: number): void => {
  if (isNaN(property)) {
    throw new Error("O campo deve ser preenchido com um número");
  }

  if (property < 0) {
    throw new Error("O valor não pode ser menor do que 0");
  }
}