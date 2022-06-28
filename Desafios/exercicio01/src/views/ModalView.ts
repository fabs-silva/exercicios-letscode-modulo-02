import { Product } from "../models/Product";
import { amountLeftText, productPriceReais } from "../utils";

export const createModal = (selectedProduct: Product) => {
  const app = document.querySelector<HTMLDivElement>("#app")!;

  const modal = document.createElement("div");
  modal.id = "modal";

  const amountItemText = amountLeftText(selectedProduct.amountLeft);

  modal.innerHTML = `<div class="modal-content">
          <div class="modal-header">Adicionar ao carrinho</div>
          <div class="modal-body">
          <img class="modal-product-image" src="${selectedProduct.image}" alt="${selectedProduct.name
    }"/>
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
            </form>
            </div>
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
};