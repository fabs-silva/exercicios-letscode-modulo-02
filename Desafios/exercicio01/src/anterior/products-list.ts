import { ProductContract } from "../models/Product";
import { amountLeftText, productPriceReais } from "../utils/product-utils";

export const setProductsList = (
  list: HTMLElement,
  products: ProductContract[]
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
      //showModal(prod);
    });
  });
};
