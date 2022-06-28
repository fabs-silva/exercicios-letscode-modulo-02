import { ProductCart } from "../models/Product";
import { getInputValue } from "../utils";

const getProductsLocalStorage = (): ProductCart[] => {
    let cart: ProductCart[] = [];

    let localStorageCart = localStorage.getItem("cart");
    if (localStorageCart) {
        cart = JSON.parse(localStorageCart);
    }

    return cart;
}

const saveProductLocalStorage = (cart: ProductCart[]): void => {
    localStorage.setItem("cart", JSON.stringify(cart));
}

const addProductToCart = (selectedProduct: ProductCart): ProductCart => {
    let cart = getProductsLocalStorage();

    const amountSelected = parseInt(getInputValue("amount-item-modal"));
    const productCart = {
        id: selectedProduct.id,
        name: selectedProduct.name,
        price: selectedProduct.price,
        image: selectedProduct.image,
        amountLeft: selectedProduct.amountLeft,
        amountSelected: amountSelected,
        total: selectedProduct.total
    };

    cart.push(productCart);

    saveProductLocalStorage(cart);

    return productCart;

}

export { addProductToCart };

