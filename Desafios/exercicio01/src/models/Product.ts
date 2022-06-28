export interface ProductContract {
  id: number;
  name: string;
  price: number;
  image: string;
  amountLeft: number;
}

export class Product implements ProductContract {
  public readonly id: number;
  public name: string;
  public price: number;
  public image: string;
  public amountLeft: number;

  constructor({ id, name, price, image, amountLeft }: ProductContract) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.amountLeft = amountLeft;
  }
}

function MixinCart(superClass: typeof Product) {
  interface AddToCartContract extends ProductContract {
    amountSelected: number;
  }

  return class extends superClass {
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
      this.amountSelected = amountSelected;
    }

    get total() {
      return this.amountSelected * this.price;
    }
  };
}

export class ProductCart extends MixinCart(Product) { }
