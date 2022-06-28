import { renderCart } from "./anterior/cart";
import { setProductsList } from "./controllers/ProductListController";
import { productsListObject } from "./json/list-products-obj";

const productsList = document.querySelector<HTMLDivElement>("#products")!;
const cartList = document.querySelector<HTMLDivElement>(".products-cart")!;
let productsArray = productsListObject;

setProductsList(productsList, productsArray);
renderCart(cartList);

//const productsList = document.querySelector<HTMLDivElement>("#products")!;

//productsList.innerText = 'Teste';
