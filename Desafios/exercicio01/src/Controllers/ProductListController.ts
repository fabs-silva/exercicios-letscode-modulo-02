import { Product } from "../models/Product";
import { renderProductItem } from "../views/ProductView";


export const setProductsList = (
  list: HTMLElement,
  products: Product[]
): void => {
  products.forEach((product) => {
    const productItem = renderProductItem(product);
    list.append(productItem);
  });
};

