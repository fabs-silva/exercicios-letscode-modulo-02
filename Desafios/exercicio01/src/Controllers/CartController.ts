import { ProductCart } from "../models/Product";
import { checkAmountSelected } from "../utils";
import { renderProductCart } from "../views/CartView";
import {
  getProductsLocalStorage,
  saveProductLocalStorage
} from "./LocalStorageController";

const checkProductAlreadyInCart = (
  selectedProduct: ProductCart
  amountSelected: number
): ProductCart | undefined => {
  let cart = getProductsLocalStorage();

  let productInCart = cart.find((p) => p.id === selectedProduct.id);

  if (!productInCart) {
    return;
  }

  const amountSelectedItem = checkAmountSelected(
    amountSelected,
    productInCart.amountLeft + productInCart.amountSelected
  );

  if (amountSelectedItem) {
    productInCart.amountSelected += amountSelected;
    productInCart.amountLeft -= amountSelected;
  }

  return productInCart;
};

const addProductToCart = (selectedProduct: ProductCart): void => {
  const productAlreadyInCart = checkProductAlreadyInCart(selectedProduct);

  const cartHtml = document.querySelector(".cart-body") as HTMLDivElement;
  let cart = getProductsLocalStorage();

  if (productAlreadyInCart) {
    const cartItem = document.getElementById(`cart-product-item-${productAlreadyInCart.id}`) as HTMLDivElement;
  cart = cart.filter((p) => p.id !== productAlreadyInCart.id);
  cart.push(productAlreadyInCart);
  cartHtml.removeChild(cartItem);
} else {
  cart.push(selectedProduct);
  const newItem = renderProductCart(selectedProduct);
  cartHtml.appendChild(newItem);
 
}
 saveProductLocalStorage(cart);

};

export { addProductToCart };

