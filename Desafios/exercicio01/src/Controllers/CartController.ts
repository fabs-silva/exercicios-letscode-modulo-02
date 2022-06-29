import { ProductCart } from "../models/Product";
import { getInputValue } from "../utils";
import { renderProductCart } from "../views/CartView";

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

const checkAmountSelected = (selectedProduct: ProductCart): number => {
  const amountSelected = parseInt(getInputValue("amount-item-modal"));

  if (amountSelected > selectedProduct.amountLeft) {
    throw new Error("Quantidade maior do que a disponível em estoque");
  }

  return amountSelected;
};

const addProductAlreadyInCart = (
  cart: ProductCart[],
  selectedProduct: ProductCart
): ProductCart | null => {
  const amountSelected = checkAmountSelected(selectedProduct);

  let productInCart: ProductCart | undefined = cart.find(
    (p) => p.id === selectedProduct.id
  );

  if (productInCart !== undefined) {
    const newAmountSelected = productInCart.amountSelected + amountSelected;

    if (newAmountSelected > selectedProduct.amountLeft) {
      throw new Error("Quantidade maior do que a disponível em estoque");
    }

    return {
      ...productInCart,
      amountSelected: newAmountSelected,
      total: newAmountSelected * productInCart.price,
    };
  }

  return null;
};

const addProductToCart = (selectedProduct: ProductCart): void => {
  const cartHtml = document.querySelector(".cart-body") as HTMLDivElement;
  let cart = getProductsLocalStorage();

  const amountSelected = checkAmountSelected(selectedProduct);

  const productAlreadyInCart = addProductAlreadyInCart(cart, selectedProduct);

  if (productAlreadyInCart) {
    cart = cart.filter((p) => p.id !== productAlreadyInCart.id);
    cart.push(productAlreadyInCart);
  } else {
    const productCart = {
      id: selectedProduct.id,
      name: selectedProduct.name,
      price: selectedProduct.price,
      image: selectedProduct.image,
      amountLeft: selectedProduct.amountLeft,
      amountSelected: amountSelected,
      total: selectedProduct.total,
    };

    cart.push(productCart);


    const newItem = renderProductCart(productCart);
    cartHtml.appendChild(newItem);
    removeFromCart(productCart.id)
  }


  saveProductLocalStorage(cart);


};

const removeFromCart = (id: number): void => {

  const button = document.getElementById(
    `delete-button-${id}`
  ) as HTMLButtonElement;

  let cart = getProductsLocalStorage();

  const removedItem = document.getElementById(
    `cart-product-item-${id}`
  ) as HTMLDivElement;

  cart = cart.filter((p) => p.id !== id);

  button?.addEventListener("click", () => {
    localStorage.setItem("cart", JSON.stringify(cart));

    const cartHtml = document.querySelector(".cart-body") as HTMLDivElement;
    cartHtml.removeChild(removedItem);
  });
};

export { getProductsLocalStorage, addProductToCart, removeFromCart };

