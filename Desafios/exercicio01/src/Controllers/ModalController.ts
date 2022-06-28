import { ProductCart } from "../models/Product";
import { closeModal } from "../views/ModalView";
import { addProductToCart } from "./CartController";

const buttonCancelPurchase = () => {
    const button = document.querySelector<HTMLButtonElement>(
        ".modal-button-cancel"
    );

    button?.addEventListener("click", () => closeModal())
}

const clickOutsideModal = () => {  /* não funciona */
    const modalContent = document.querySelector<HTMLDivElement>(".modal-content")!;
    window.addEventListener('click', function (event: any) {
        if (!modalContent.contains(event.target)) {
            closeModal();
        }
    });
}


const buttonAddToCart = (selectedProduct: ProductCart) => {
    const button = document.querySelector<HTMLButtonElement>(".modal-button-add");
    button?.addEventListener("click", () => {
        addProductToCart(selectedProduct);
        closeModal();
    });
}


export { buttonCancelPurchase, buttonAddToCart };

