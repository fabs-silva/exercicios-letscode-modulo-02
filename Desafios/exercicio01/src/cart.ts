import { ProductCart, productPriceReais } from "./products-list";

export const renderCart = (list: HTMLElement): void => {
  let products = localStorage.getItem("carrinho");
  let productsJson: ProductCart[] = [];

  if (products) {
    productsJson = JSON.parse(products);
  }

  if (productsJson.length === 0) {
    const emptyCart = document.createElement("p");
    emptyCart.classList.add("empty-cart");
    emptyCart.innerHTML = `<i class="fa-solid fa-face-sad-tear icon"></i>Não há produtos no carrinho`;
    list.append(emptyCart);
  } else if (productsJson.length > 4) {
    const seeMoreP = document.createElement("p");
    const seeMoreA = document.createElement("a");

    seeMoreA.href = "#";

    seeMoreP.classList.add("see-more-link");

    seeMoreA.innerText = `Ver mais itens (${productsJson.length - 4})...`;
    seeMoreP.appendChild(seeMoreA);

    productsJson.slice(0, 4).forEach((prod) => {
      setItemCart(list, prod);
    });
    list.append(seeMoreP);
  } else {
    productsJson.forEach((prod) => {
      setItemCart(list, prod);
    });
  }
};

const setItemCart = (list: HTMLElement, prod: ProductCart): void => {
  const itemProduct = document.createElement("div");
  itemProduct.classList.add("product-item-cart");

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
