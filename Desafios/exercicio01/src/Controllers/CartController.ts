import { ProductCart } from "../models/Product";
import { getInputValue } from "../utils";

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
): ProductCart[] | null => {
  let newCart = cart;
  const amountSelected = checkAmountSelected(selectedProduct);

  let productInCart: ProductCart | undefined = cart.find(
    (p) => p.id === selectedProduct.id
  );

  if (productInCart !== undefined) {
    const newAmountSelected = productInCart.amountSelected + amountSelected;

    if (newAmountSelected > selectedProduct.amountLeft) {
      throw new Error("Quantidade maior do que a disponível em estoque");
    }

    newCart = cart.filter((p) => p.id !== productInCart?.id);

    newCart = [
      ...newCart,
      {
        ...productInCart,
        amountSelected: newAmountSelected,
        total: newAmountSelected * productInCart.price,
      },
    ];

    return newCart;
  }

  return null;
};

const addProductToCart = (selectedProduct: ProductCart): ProductCart => {
  let cart = getProductsLocalStorage();

  const amountSelected = checkAmountSelected(selectedProduct);

  const productAlreadyInCart = addProductAlreadyInCart(cart, selectedProduct);

  if (productAlreadyInCart) {
    saveProductLocalStorage(productAlreadyInCart);
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

    saveProductLocalStorage(cart);
  }

  return productCart;
};

export { getProductsLocalStorage, addProductToCart };
