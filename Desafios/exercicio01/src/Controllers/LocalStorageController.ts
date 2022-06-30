import { ProductCart } from '../models/Product';

const getProductsLocalStorage = (): ProductCart[] => {
  let cart: ProductCart[] = [];

  let localStorageCart = localStorage.getItem('cart');
  if (localStorageCart) {
    cart = JSON.parse(localStorageCart);
  }

  return cart;
};

const saveProductLocalStorage = (cart: ProductCart[]): void => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const removeProductLocalStorage = (id: number): void => {
  let cart = getProductsLocalStorage();

  cart = cart.filter((product) => product.id !== id);

  localStorage.setItem('cart', JSON.stringify(cart));
};

const cleanLocalStorage = (): void => {
  localStorage.removeItem('cart');
};

export {
  getProductsLocalStorage,
  saveProductLocalStorage,
  removeProductLocalStorage,
  cleanLocalStorage,
};
