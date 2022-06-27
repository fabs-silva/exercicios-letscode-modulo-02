import { showModal } from "./modal";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  amountLeft: number;
}

export interface ProductCart {
  id: number;
  name: string;
  price: number;
  image: string;
  amount: number;
  total: number;
}

export const setProductsList = (
  list: HTMLElement,
  products: Product[]
): void => {
  products.forEach((prod) => {
    const itemProduct = document.createElement("div");
    itemProduct.classList.add("product-item");

    const spanInfoProduct = document.createElement("div");
    spanInfoProduct.classList.add("product-info");

    const nameProduct = document.createElement("p");
    nameProduct.classList.add("product-name");

    const nameProductLink = document.createElement("a");
    nameProductLink.href = "#";
    nameProductLink.innerText = prod.name;

    const priceProduct = document.createElement("span");
    priceProduct.classList.add("product-price");
    priceProduct.innerText = productPriceReais(prod.price);

    const imageProduct = document.createElement("img");
    imageProduct.classList.add("product-image");
    imageProduct.src = prod.image;
    imageProduct.alt = prod.name;

    const buttonProduct = document.createElement("button");
    buttonProduct.classList.add("product-button");

    const buttonProductIcon = document.createElement("i") as HTMLElement;
    buttonProductIcon.classList.add("fa-solid");
    buttonProductIcon.classList.add("fa-cart-plus");
    buttonProductIcon.classList.add("icon");

    buttonProduct.appendChild(buttonProductIcon);
    buttonProduct.append("Comprar");

    const amountLeftProduct = document.createElement("span");
    amountLeftProduct.classList.add("product-amount-left");

    const amountItemText = amountLeftText(prod.amountLeft, buttonProduct);

    amountLeftProduct.innerHTML = amountItemText;

    itemProduct.appendChild(imageProduct);
    itemProduct.appendChild(nameProduct);
    nameProduct.appendChild(nameProductLink);
    nameProduct.appendChild(spanInfoProduct);
    spanInfoProduct.appendChild(priceProduct);
    spanInfoProduct.appendChild(amountLeftProduct);
    itemProduct.appendChild(buttonProduct);

    list.append(itemProduct);

    buttonProduct.addEventListener("click", () => {
      showModal(prod);
    });
  });
};

export const productPriceReais = (price: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
};

export const amountLeftText = (
  amount: number,
  button?: HTMLButtonElement
): string => {
  const amountItemText = amount === 1 ? "item" : "itens";

  if (amount < 1) {
    button && (button.disabled = true);
    return `<span class="out-of-stock">Fora de estoque</span>`;
  } else {
    button && (button.disabled = false);
    return `* ${amount} ${amountItemText} em estoque`;
  }
};
