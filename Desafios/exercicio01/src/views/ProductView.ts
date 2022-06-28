import { Product } from "../models/Product";
import { amountLeftText, productPriceReais } from "../utils";

export const renderProductItem = (prod: Product): HTMLParagraphElement => {
  const productItem = document.createElement("p");
  productItem.classList.add("product-item");
  productItem.id = `product-item-${prod.id}`;

  productItem.innerHTML = `
      <img class="product-image" src=${prod.image} alt=${prod.name}>
      <div class="product-name">
        <a href="#">${prod.name}</a>
        <div class="product-info">
          <span class="product-price">${productPriceReais(prod.price)}</span>
          <span class="product-amount-left">${amountLeftText(
    prod.amountLeft
  )}</span>
        </div>
      </div>
      <button class="product-button">
        <i class="fa-solid fa-cart-plus icon"></i>Comprar
      </button>
    `;

  return productItem;
};
