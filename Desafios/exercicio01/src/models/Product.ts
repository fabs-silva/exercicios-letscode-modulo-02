export interface ProductContract {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface AddToCartContract extends ProductContract {
  amountSelected: number;
  total: number;
}

export class Product implements ProductContract {
  public readonly id: number;
  public name: string;
  public price: number;
  public image: string;

  constructor(data: ProductContract) {
    const { id, name, price, image } = data as ProductContract;
    this.id = id;
    this.name = name;
    this.price = numberValidation(price);
    this.image = image;
  }
}

export class ProductCart extends Product {
  public amountSelected: number;
  public total: number;

  constructor({
    id,
    name,
    price,
    image,
    amountSelected,
    total,
  }: AddToCartContract) {
    super({ id, name, price, image });

    this.amountSelected = numberValidation(amountSelected);
    this.total = total;
  }
}

const numberValidation = (property: number): number => {
  if (isNaN(property)) {
    throw new Error('O campo deve ser preenchido com um número');
  }

  if (property < 0) {
    throw new Error('O valor não pode ser menor do que 0');
  }

  return property;
};
