import { removeFromCart, setItemCart } from "./cart";
import { amountLeftText, Product, productPriceReais } from "./products-list";

export const showModal = (selectedProduct: Product) => {
  const app = document.querySelector<HTMLDivElement>("#app")!;

  const modal = document.createElement("div");
  modal.id = "modal";

  const amountItemText = amountLeftText(selectedProduct.amountLeft);

  modal.innerHTML = `<div class="modal-content">
        <div class="modal-header">Adicionar ao carrinho</div>
        <div class="modal-body">
        <img class="product-image-modal" src="${selectedProduct.image}" alt="${selectedProduct.name
    }"/>
        <div class="product-info-modal">
          <div class="product-name-modal">${selectedProduct.name}</div>
          <div class="product-price-modal">${productPriceReais(
      selectedProduct.price
    )}</div>
          <div class="product-amount-modal">${amountItemText}</div>
          </div>
          <form class="product-select-amount-modal">
            <label for="amount" class="label-modal">Quantidade:</label>
            <input type="number" name="amount" id="amount-item-modal" class="input-modal" />
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
  addProductToCart(selectedProduct);
  closeModal();
};

const getInputValue = (): string => {
  const input = document.getElementById(
    "amount-item-modal"
  ) as HTMLInputElement;

  return input.value;
};

const addProductToCart = (selectedProduct: Product) => {
  const modal = document.querySelector<HTMLDivElement>("#modal")!;
  const button = document.querySelector<HTMLButtonElement>(".modal-button-add");
  let cart: any[] = [];
  let localStorageCart = localStorage.getItem("carrinho");
  if (localStorageCart) {
    cart = JSON.parse(localStorageCart);
  }

  button?.addEventListener("click", () => {
    const amountSelected = parseInt(getInputValue());
    const productCart = {
      id: selectedProduct.id,
      name: selectedProduct.name,
      price: selectedProduct.price,
      image: selectedProduct.image,
      amount: amountSelected,
      total: amountSelected * selectedProduct.price,
    };
    cart.push(productCart);
    localStorage.setItem("carrinho", JSON.stringify(cart));
    const cartList = document.querySelector<HTMLDivElement>(".products-cart")!;
    setItemCart(cartList, productCart);
    removeFromCart(cartList, productCart.id);
    modal.remove();
  });
};

const closeModal = () => {
  const modal = document.querySelector<HTMLDivElement>("#modal")!;
  if (modal) {
    const button = document.querySelector<HTMLButtonElement>(
      ".modal-button-cancel"
    );

    button?.addEventListener("click", () => modal.remove());
  }
};
