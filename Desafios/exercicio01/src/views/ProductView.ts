import {
  buttonBuyProduct,
  getProductElement,
} from '../controllers/ProductListController';
import { ProductCart } from '../models/Product';
import { amountLeftText, getProductImage, productPriceReais } from '../utils';

const renderProductMain = (product: ProductCart): HTMLParagraphElement => {
  const productItem = document.createElement('div');
  productItem.classList.add('product-item');
  productItem.id = `product-item-${product.id}`;

  productItem.innerHTML = `
      ${getProductImage(product)}
      <div class="product-name">
        <a href="#">${product.name}</a>
        <div class="product-info">
          <p class="product-price">${productPriceReais(product.price)}</p>
          <p class="product-amount-left">${amountLeftText(
            product.amountLeft
          )}</p>
        </div>
      </div>
      <button class="product-button" id="product-button-${product.id}">
        <i class="fa-solid fa-cart-plus icon"></i>Comprar
      </button>
    `;

  return productItem;
};

const renderProductsListMain = (
  list: HTMLElement,
  products: ProductCart[]
): void => {
  products.forEach((product) => {
    const productItem = renderProductMain(product);
    list.append(productItem);
    buttonBuyProduct(product);
  });
};

const updateAmountLeft = (
  amountSelected: number,
  selectedProduct: ProductCart
): void => {
  selectedProduct.amountLeft -= amountSelected;

  const productElement = getProductElement(selectedProduct.id);

  if (productElement) {
    const amountLeftElement = productElement.querySelector(
      '.product-amount-left'
    ) as HTMLParagraphElement;
    amountLeftElement.innerHTML = `${amountLeftText(
      selectedProduct.amountLeft
    )}`;
  }
};

export { renderProductsListMain, updateAmountLeft };
