import { buttonBuyProduct } from "../controllers/ProductListController";
import { Product } from "../models/Product";
import { amountLeftText, getProductImage, productPriceReais } from "../utils";

const renderProductMain = (product: Product): HTMLParagraphElement => {
  const productImage = getProductImage(product);

  const productItem = document.createElement("div");
  productItem.classList.add("product-item");

  productItem.innerHTML = `
      ${productImage}
      <div class="product-name">
        <a href="#">${product.name}</a>
        <div class="product-info">
          <span class="product-price">${productPriceReais(product.price)}</span>
          <span class="product-amount-left">${amountLeftText(
            product.amountLeft
          )}</span>
        </div>
      </div>
      <button class="product-button" id="product-button-${product.id}">
        <i class="fa-solid fa-cart-plus icon"></i>Comprar
      </button>
    `;

  return productItem;
};

export const renderProductsListMain = (
  list: HTMLElement,
  products: Product[]
): void => {
  products.forEach((product) => {
    const productItem = renderProductMain(product);
    list.append(productItem);
    buttonBuyProduct(product);
  });
};
