import { ProductCart } from '../models/Product';
import { checkAmountSelected, getInputValue } from '../utils';
import { closeModal } from '../views/ModalView';

const buttonCancelPurchase = (): void => {
  const button = document.querySelector<HTMLButtonElement>(
    '.modal-button-cancel'
  );

  button?.addEventListener('click', () => closeModal());
};

const setAmountSelected = (
  selectedProduct: ProductCart
): ProductCart | undefined => {
  const amountSelectedInput = parseInt(getInputValue('amount-item-modal'));

  const amountSelected = checkAmountSelected(
    amountSelectedInput,
    selectedProduct.amountLeft
  );

  if (!amountSelected) {
    return;
  }

  selectedProduct.amountSelected += amountSelected;

  return selectedProduct;
};

/* Não está pronto */
const buttonAddToCart = (selectedProduct: ProductCart): void => {
  const button = document.querySelector<HTMLButtonElement>('.modal-button-add');
  button?.addEventListener('click', () => {
    const productNewAmount = setAmountSelected(selectedProduct);
    if (productNewAmount) {
      //addProductToCart(productNewAmount);
      closeModal();
    }
  });
};

export { buttonCancelPurchase, setAmountSelected, buttonAddToCart };
