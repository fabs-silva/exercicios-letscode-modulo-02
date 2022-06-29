import { Product } from "../models/Product";
import { showModal } from "../views/ModalView";

export const buttonBuyProduct = (selectedProduct: Product): void => {
  const buttonBuyProduct = document.getElementById(
    `product-button-${selectedProduct.id}`
  ) as HTMLButtonElement;

  buttonBuyProduct.addEventListener("click", () => {
    showModal(selectedProduct);
  });
};
