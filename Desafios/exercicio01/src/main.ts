import { renderCart } from "./cart";
import { productsListObject } from "./list-products-obj";
import { setProductsList } from "./products-list";

const productsList = document.querySelector<HTMLDivElement>("#products")!;
const cartList = document.querySelector<HTMLDivElement>(".products-cart")!;

setProductsList(productsList, productsListObject);
renderCart(cartList);
