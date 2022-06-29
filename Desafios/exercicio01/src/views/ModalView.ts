import {
  buttonAddToCart,
  buttonCancelPurchase,
} from "../controllers/ModalController";
import { Product, ProductCart } from "../models/Product";
import { amountLeftText, getProductImage, productPriceReais } from "../utils";

const renderProductModal = (selectedProduct: Product): HTMLDivElement => {
  const productImage = getProductImage(selectedProduct);
  const product = document.createElement("div");
  product.classList.add("modal-body");

  const amountItemText = amountLeftText(selectedProduct.amountLeft);

  product.innerHTML = `
          ${productImage}
          <div class="modal-product-info">
            <div class="modal-product-name">${selectedProduct.name}</div>
            <div class="modal-product-price">${productPriceReais(
              selectedProduct.price
            )}</div>
            <div class="modal-product-amount">${amountItemText}</div>
            </div>
            <form class="modal-product-select-amount">
              <label for="amount" class="modal-label">Quantidade:</label>
              <input type="number" name="amount" id="amount-item-modal" class="modal-input" />
            </form>`;

  return product;
};

const appendProductModal = (selectedProduct: Product): void => {
  const modalContent =
    document.querySelector<HTMLDivElement>(".modal-content")!;
  const modalButtons =
    document.querySelector<HTMLDivElement>(".modal-buttons")!;

  const product = renderProductModal(selectedProduct);

  modalContent.insertBefore(product, modalButtons);
};

export const showModal = (selectedProduct: Product): void => {
  const app = document.querySelector<HTMLDivElement>("#app")!;

  const modal = document.createElement("div");
  modal.id = "modal";

  modal.innerHTML = `<div class="modal-content">
          <div class="modal-header">Adicionar ao carrinho</div>
            <div class="modal-buttons">
            <button type="button" class="modal-button-cancel">
              <i class="fa-solid fa-circle-xmark icon"></i>Cancelar
            </button>
            <button type="button" class="modal-button-add">
              <i class="fa-solid fa-circle-plus icon"></i>Adicionar
            </button>
            </div>
          </div>`;

  app.insertBefore(modal, app.firstChild);
  appendProductModal(selectedProduct);
  buttonAddToCart(selectedProduct as ProductCart);
  buttonCancelPurchase();
};

export const closeModal = () => {
  const modal = document.querySelector<HTMLDivElement>("#modal")!;
  if (modal) {
    modal.remove();
  }
};
