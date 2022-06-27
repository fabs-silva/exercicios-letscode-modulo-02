/* import { renderCart } from "./anterior/cart";
import { productsListObject } from "./list-products-obj";
import { setProductsList } from "./products-list";

const productsList = document.querySelector<HTMLDivElement>("#products")!;
const cartList = document.querySelector<HTMLDivElement>(".products-cart")!;
let productsArray = productsListObject;

setProductsList(productsList, productsArray);
renderCart(cartList); */

const productsList = document.querySelector<HTMLDivElement>("#products")!;

productsList.innerText = 'Teste';