import { Product, ProductCart } from "../models/Product";
import { showModal } from "../views/ModalView";

const createListProducts = (products: Product[]): ProductCart[] => {
  let productsList: ProductCart[] = [];

  products.forEach((product) => {
    const productCartItem = new ProductCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      amountSelected: 0,
      total: 0,
    });
    productsList = [...productsList, productCartItem];
  });

  return productsList;
};

const buttonBuyProduct = (selectedProduct: ProductCart): void => {
  const buttonBuyProduct = document.getElementById(
    `product-button-${selectedProduct.id}`
  ) as HTMLButtonElement;

  buttonBuyProduct.addEventListener("click", () => {
    showModal(selectedProduct);
  });
};

const getProductElement = (id: number): HTMLDivElement => {
  const product = document.getElementById(
    `#product-item-${id}`
  ) as HTMLDivElement;
  return product;
};

export { createListProducts, buttonBuyProduct, getProductElement };
