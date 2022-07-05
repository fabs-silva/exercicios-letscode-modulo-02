import { ProductCart } from '../models/Product';
import { productPriceReais } from '../utils';
import {
  removeFromCartButton,
  renderProductCart,
  renderTotalPrice,
} from '../views/CartView';
import {
  cleanLocalStorage,
  getProductsLocalStorage,
  saveProductLocalStorage,
} from './LocalStorageController';

const updateProductAlreadyInCart = (
  selectedProduct: ProductCart
): ProductCart | undefined => {
  let cart = getProductsLocalStorage();

  let productInCart: ProductCart | undefined = cart.find(
    (p) => p.id === selectedProduct.id
  );

  if (productInCart === undefined) {
    return;
  }
  return selectedProduct;
};

const addProductToCart = (selectedProduct: ProductCart): void => {
  const productAlreadyInCart = updateProductAlreadyInCart(selectedProduct);

  const cartHtml = document.querySelector('.cart-body') as HTMLDivElement;
  let cart = getProductsLocalStorage();

  if (productAlreadyInCart) {
    const cartItem = document.getElementById(
      `cart-product-item-${productAlreadyInCart.id}`
    ) as HTMLDivElement;
    cart = cart.filter((p) => p.id !== productAlreadyInCart.id);
    cart.push(productAlreadyInCart);
    cartHtml.removeChild(cartItem);
  } else {
    cart.push(selectedProduct);
  }

  const newItem = renderProductCart(selectedProduct);
  cartHtml.appendChild(newItem);
  saveProductLocalStorage(cart);
  removeFromCartButton(selectedProduct.id);
  const updatedTotal = cart.reduce((acc, item) => acc + item.total, 0);

  renderTotalPrice(updatedTotal);
};

const buyItems = () => {
  const button = document.querySelector('.cart-button') as HTMLButtonElement;
  button.addEventListener('click', () => {
    const cart = getProductsLocalStorage();
    if (cart.length <= 0) {
      alert('Seu carrinho está vazio.');
      return;
    }

    let total = cart.reduce((acc, item) => acc + item.total, 0);
    let updatedTotal = 0;
    const discount = 0.9;
    if (total >= 1000) {
      updatedTotal = total * discount;
    }

    const totalItems = cart.reduce((acc, item) => acc + item.amountSelected, 0);
    let frete = Math.ceil(totalItems / 10) * 10;

    updatedTotal != 0 ? (updatedTotal += frete) : (total += frete);

    const confirmPurchase =
      confirm(`Sua compra de ${totalItems} itens ficou em ${
        updatedTotal != 0
          ? productPriceReais(updatedTotal)
          : productPriceReais(total)
      }
    - valor original: ${productPriceReais(total - frete)}
    ${
      updatedTotal != 0
        ? `- desconto: ${productPriceReais(total - updatedTotal)}
    - valor com desconto: ${
      updatedTotal != 0
        ? productPriceReais(updatedTotal - frete)
        : productPriceReais(total - frete)
    }`
        : `- desconto: ${productPriceReais(0)}`
    }
    - valor do frete: ${productPriceReais(frete)}
    - valor final: ${
      updatedTotal != 0
        ? productPriceReais(updatedTotal)
        : productPriceReais(total)
    }
    
    Deseja continuar?`);

    if (!confirmPurchase) {
      return;
    }

    alert(
      'Compra realizada com sucesso. A entrega acontecerá entre 5 e 10 dias úteis.'
    );

    cleanLocalStorage();

    setTimeout(() => {
      window.location.reload();
    }, 1500);
  });
};

export { addProductToCart, buyItems };
