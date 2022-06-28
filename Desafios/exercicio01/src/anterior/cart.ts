import { productPriceReais } from "../utils/product-utils";

export const getCartItems = (): any => {
  let cart: any = [];
  let localStorageCart = localStorage.getItem("carrinho");
  if (localStorageCart) {
    cart = JSON.parse(localStorageCart);
  }
  return cart;
};

export const renderCart = (list: HTMLElement): void => {
  let products = getCartItems();

  if (products.length === 0) {
    const emptyCart = document.createElement("p");
    emptyCart.classList.add("empty-cart");
    emptyCart.innerHTML = `<i class="fa-solid fa-face-sad-tear icon"></i>Não há produtos no carrinho`;

    list.append(emptyCart);
  } else if (products.length > 4) {
    const seeMoreP = document.createElement("p");
    const seeMoreA = document.createElement("a");

    seeMoreA.href = "#";

    seeMoreP.classList.add("see-more-link");

    seeMoreA.innerText = `Ver mais itens (${products.length - 4})...`;
    seeMoreP.appendChild(seeMoreA);

    products.slice(0, 4).forEach((prod: any) => {
      setItemCart(list, prod);
      removeFromCart(list, prod.id);
    });
    list.append(seeMoreP);
  } else {
    products.forEach((prod: any) => {
      setItemCart(list, prod);
      removeFromCart(list, prod.id);
    });
  }
};

export const setItemCart = (list: HTMLElement, prod: any): void => {
  const itemProduct = document.createElement("div");
  itemProduct.classList.add("product-item-cart");
  itemProduct.id = `product-item-cart-${prod.id}`;

  const detailsProduct = document.createElement("div");
  detailsProduct.classList.add("product-details-cart");

  const imageProduct = document.createElement("img");
  imageProduct.classList.add("product-image-cart");
  imageProduct.src = prod.image;

  const infoProduct = document.createElement("div");
  infoProduct.classList.add("product-info-cart");

  const extraInfoProduct = document.createElement("div");
  extraInfoProduct.classList.add("product-extra-info-cart");

  const nameProduct = document.createElement("p");
  nameProduct.classList.add("product-name-cart");

  const nameProductLink = document.createElement("a");
  nameProductLink.href = "#";

  nameProductLink.innerText = prod.name;

  const priceProduct = document.createElement("p");
  priceProduct.classList.add("product-price-cart");
  priceProduct.innerText = productPriceReais(prod.price);

  const amountProduct = document.createElement("p");
  amountProduct.classList.add("product-amount-cart");
  amountProduct.innerText = `Quantidade: ${prod.amount}`;

  const deleteButtonProduct = document.createElement("button");
  deleteButtonProduct.classList.add("product-delete-cart");
  deleteButtonProduct.id = `delete-button-${prod.id}`;
  deleteButtonProduct.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;

  itemProduct.appendChild(imageProduct);
  itemProduct.appendChild(detailsProduct);
  detailsProduct.appendChild(nameProduct);
  detailsProduct.appendChild(infoProduct);
  nameProduct.appendChild(nameProductLink);
  infoProduct.appendChild(extraInfoProduct);
  infoProduct.appendChild(deleteButtonProduct);
  extraInfoProduct.appendChild(priceProduct);
  extraInfoProduct.appendChild(amountProduct);

  list.append(itemProduct);
};

export const removeFromCart = (list: HTMLElement, id: number) => {
  const button = document.getElementById(
    `delete-button-${id}`
  ) as HTMLButtonElement;
  let cart = getCartItems();

  const removedItem = document.getElementById(
    `product-item-cart-${id}`
  ) as HTMLDivElement;

  cart = cart.filter((p) => p.id !== id);

  button?.addEventListener("click", () => {
    localStorage.setItem("carrinho", JSON.stringify(cart));

    const cartHtml = document.querySelector(".products-cart") as HTMLDivElement;
    cartHtml.removeChild(removedItem);
  });
};
