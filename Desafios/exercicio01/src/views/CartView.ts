import {
  getProductsLocalStorage,
  removeProductLocalStorage,
} from '../controllers/LocalStorageController';
import { ProductCart } from '../models/Product';
import { getProductImage, productPriceReais } from '../utils';

const renderProductCart = (product: ProductCart): HTMLDivElement => {
  const productImage = getProductImage(product);

  const itemProduct = document.createElement('div');
  itemProduct.classList.add('cart-product-item');
  itemProduct.id = `cart-product-item-${product.id}`;

  itemProduct.innerHTML = `
    ${productImage}
    <div class="cart-product-details">
      <p class="cart-product-name">
        <a href="#">${product.name}</a>
      </p>
      <div class="cart-product-info">
        <div class="cart-product-price-and-amount">
          <p class="cart-product-price">${productPriceReais(product.price)}</p>
          <p class="cart-product-amount">Qtde: ${product.amountSelected}</p>
        </div>
        <div class="cart-product-total-delete">
          <p class="cart-product-total-price">Total: ${productPriceReais(
            product.total
          )}</p>
          <button class="cart-delete-product" id="delete-button-${product.id}">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>`;
  return itemProduct;
};

const renderProductsListCart = (list: HTMLDivElement): void => {
  const products = getProductsLocalStorage();
  products.length > 0 &&
    products.forEach((product) => {
      const productItem = renderProductCart(product);
      list.append(productItem);
      removeFromCartButton(product.id);
    });
};

const removeFromCartButton = (id: number): void => {
  const button = document.getElementById(
    `delete-button-${id}`
  ) as HTMLButtonElement;

  const removedItem = document.getElementById(
    `cart-product-item-${id}`
  ) as HTMLDivElement;

  button?.addEventListener('click', () => {
    removeProductLocalStorage(id);

    const cartHtml = document.querySelector('.cart-body') as HTMLDivElement;
    cartHtml.removeChild(removedItem);
  });
};

export { renderProductCart, renderProductsListCart, removeFromCartButton };
