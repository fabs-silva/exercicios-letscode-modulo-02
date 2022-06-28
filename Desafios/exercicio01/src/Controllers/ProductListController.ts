import { Product } from "../models/Product";
import { amountLeftText, productPriceReais } from "./../utils/product-utils";

const renderProductItem = (prod: Product): HTMLParagraphElement => {
  const productItem = document.createElement("p");
  productItem.classList.add("product-item");
  productItem.id = `product-item-${prod.getId}`;

  productItem.innerHTML = `
    <img class="product-image" src=${prod.getImage} alt=${prod.getName}>
    <div class="product-name">
      <a href="#">${prod.getName}</a>
      <div class="product-info">
        <span class="product-price">${productPriceReais(prod.getPrice)}</span>
        <span class="product-amount-left">${amountLeftText(
          prod.getAmountLeft
        )}</span>
      </div>
    </div>
    <button class="product-button">
      <i class="fa-solid fa-cart-plus icon"></i>Comprar
    </button>
  `;

  return productItem;
};

export const setProductsList = (
  list: HTMLElement,
  products: Product[]
): void => {
  products.forEach((product) => {
    const productItem = renderProductItem(product);
    list.append(productItem);
  });
};
