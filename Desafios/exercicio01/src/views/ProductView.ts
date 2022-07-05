import { buttonBuyProduct } from '../controllers/ProductListController';
import { ProductCart } from '../models/Product';
import { getProductImage, productPriceReais } from '../utils';

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

export { renderProductsListMain };
