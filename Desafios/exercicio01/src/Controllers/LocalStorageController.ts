import { ProductCart } from "../models/Product";

const getProductsLocalStorage = (): ProductCart[] => {
    let cart: ProductCart[] = [];

    let localStorageCart = localStorage.getItem("cart");
    if (localStorageCart) {
        cart = JSON.parse(localStorageCart);
    }

    return cart;
};

const saveProductLocalStorage = (cart: ProductCart[]): void => {
    localStorage.setItem("cart", JSON.stringify(cart));
};

export { getProductsLocalStorage, saveProductLocalStorage };
