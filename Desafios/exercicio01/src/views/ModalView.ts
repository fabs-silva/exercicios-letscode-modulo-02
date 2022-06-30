import {
  buttonAddToCart,
  buttonCancelPurchase,
} from '../controllers/ModalController';
import { ProductCart } from '../models/Product';
import { amountLeftText, getProductImage, productPriceReais } from '../utils';

const renderProductModal = (selectedProduct: ProductCart): HTMLDivElement => {
  const product = document.createElement('div');
  product.classList.add('modal-body');

  product.innerHTML = `
          ${getProductImage(selectedProduct)}
          <div class="modal-product-info">
            <p class="modal-product-name">${selectedProduct.name}</p>
            <div class="modal-product-extra-info">
              <p class="modal-product-price">${productPriceReais(
                selectedProduct.price
              )}</p>
              <p class="modal-product-amount">${amountLeftText(
                selectedProduct.amountLeft
              )}</p>
            </div>
            </div>
            <form class="modal-product-select-amount">
              <label for="amount" class="modal-label">Quantidade:</label>
              <input type="number" name="amount" id="amount-item-modal" class="modal-input" />
            </form>`;

  return product;
};

const appendProductModal = (selectedProduct: ProductCart): void => {
  const modalContent =
    document.querySelector<HTMLDivElement>('.modal-content')!;
  const modalButtons =
    document.querySelector<HTMLDivElement>('.modal-buttons')!;

  const product = renderProductModal(selectedProduct);

  modalContent.insertBefore(product, modalButtons);
};

export const showModal = (selectedProduct: ProductCart): void => {
  const app = document.querySelector<HTMLDivElement>('#app')!;

  const modal = document.createElement('div');
  modal.id = 'modal';

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
  buttonAddToCart(selectedProduct);
  buttonCancelPurchase();
};

export const closeModal = () => {
  const modal = document.querySelector<HTMLDivElement>('#modal')!;
  if (modal) {
    modal.remove();
  }
};
