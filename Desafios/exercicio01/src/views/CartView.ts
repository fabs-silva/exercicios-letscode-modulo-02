import { getProductsLocalStorage } from "../controllers/CartController";
import { ProductCart } from "../models/Product";
import { getProductImage, productPriceReais } from "../utils";

const renderProductCart = (product: ProductCart): HTMLDivElement => {
  const productImage = getProductImage(product);

  const itemProduct = document.createElement("div");
  itemProduct.classList.add("cart-product-item");
  itemProduct.id = `cart-product-item-${product.id}`;

  itemProduct.innerHTML = `
    ${productImage}
    <div class="cart-product-details">
      <p class="cart-product-name">
        <a href="#">${product.name}</a>
      </p>
      <div class="cart-product-info">
        <div class="product-extra-info-cart">
          <p class="cart-product-price">${productPriceReais(product.price)}</p>
          <p class="cart-product-amount">Quantidade: ${
            product.amountSelected
          }</p>
        </div>
        <button class="cart-delete-product" id="delete-button-${product.id}">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>`;

  return itemProduct;
};

export const renderProductsListCart = (list: HTMLDivElement): void => {
  const products = getProductsLocalStorage();
  products.length > 0 &&
    products.forEach((product) => {
      const productItem = renderProductCart(product);
      list.append(productItem);
    });
};
