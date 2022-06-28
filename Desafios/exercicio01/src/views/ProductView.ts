import { Product } from "../models/Product";
import { amountLeftText, productPriceReais } from "../utils";

const renderProductMain = (product: Product): HTMLParagraphElement => {
  const productItem = document.createElement("p");
  productItem.classList.add("product-item");
  productItem.id = `product-item-${product.id}`;

  productItem.innerHTML = `
      <img class="product-image" src="${product.image}" alt="${product.name}">
      <div class="product-name">
        <a href="#">${product.name}</a>
        <div class="product-info">
          <span class="product-price">${productPriceReais(product.price)}</span>
          <span class="product-amount-left">${amountLeftText(
    product.amountLeft
  )}</span>
        </div>
      </div>
      <button class="product-button">
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
  });
};
