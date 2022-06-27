interface ProductContract {
    id: number;
    name: string;
    price: number;
    image: string;
    amountLeft: number;
}

interface CreateProductDTO {
    id: number;
    name: string;
    price: number;
    image: string;
    amountLeft: number;
}

class Product implements ProductContract {
    public id: number;
    public name: string;
    public price: number;
    public image: string;
    public amountLeft: number;

    constructor({ id, name, price, image, amountLeft }: CreateProductDTO) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.amountLeft = amountLeft;

    }

    get getId() {
        return this.id;
    }

    get getName() {
        return this.name;
    }

    get getPrice() {
        return this.price;
    }

    get getImage() {
        return this.image;
    }

    get getAmountLeft() {
        return this.amountLeft;
    }
}

function MixinCart(superClass: typeof Product) {
    interface AddToCartDTO extends CreateProductDTO {
        amountSelected: number;
    }

    return class extends superClass {

        public amountSelected: number;

        constructor({ id, name, price, image, amountLeft, amountSelected }: AddToCartDTO) {
            super({ id, name, price, image, amountLeft })
            this.amountSelected = amountSelected;
        }

        get getAmountSelected() {
            return this.amountSelected;
        }

        get getTotal() {
            return this.amountSelected * this.price;
        }
    }
}