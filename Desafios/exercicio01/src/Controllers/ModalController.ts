import { ProductCart } from "../models/Product";
import { closeModal } from "../views/ModalView";
import { addProductToCart } from "./CartController";

const buttonCancelPurchase = (): void => {
  const button = document.querySelector<HTMLButtonElement>(
    ".modal-button-cancel"
  );

  button?.addEventListener("click", () => closeModal());
};

const buttonAddToCart = (selectedProduct: ProductCart): void => {
  const button = document.querySelector<HTMLButtonElement>(".modal-button-add");
  button?.addEventListener("click", () => {
    addProductToCart(selectedProduct);
    closeModal();
  });
};

export { buttonCancelPurchase, buttonAddToCart };

/* não funciona */
/* const clickOutsideModal = (): void => {  
    const modalContent = document.querySelector<HTMLDivElement>(".modal-content")!;
    window.addEventListener('click', function (event: any) {
        if (!modalContent.contains(event.target)) {
            closeModal();
        }
    });
} */
