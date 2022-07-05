import { ProductCart } from '../models/Product';
import { getInputValue } from '../utils';
import { closeModal } from '../views/ModalView';
import { addProductToCart } from './CartController';

const buttonCancelPurchase = (): void => {
  const button = document.querySelector<HTMLButtonElement>(
    '.modal-button-cancel'
  );

  button?.addEventListener('click', () => closeModal());
};

const setAmountSelected = (
  selectedProduct: ProductCart
): ProductCart | undefined => {
  const amountSelected = parseInt(getInputValue('amount-item-modal'));

  const newAmount = selectedProduct.amountSelected + amountSelected;
  selectedProduct.amountSelected = newAmount;
  selectedProduct.total = newAmount * selectedProduct.price;

  return selectedProduct;
};

/* Não está pronto */
const buttonAddToCart = (selectedProduct: ProductCart): void => {
  const button = document.querySelector<HTMLButtonElement>('.modal-button-add');
  button?.addEventListener('click', () => {
    const productNewAmount = setAmountSelected(selectedProduct);

    if (productNewAmount) {
      addProductToCart(productNewAmount);
      closeModal();
    }
  });
};

export { buttonCancelPurchase, setAmountSelected, buttonAddToCart };
