import { productsListObject } from "./json/list-products-obj";
import { renderProductsListMain } from "./views/ProductView";

const productsList = document.querySelector<HTMLDivElement>("#products")!;
//const cartList = document.querySelector<HTMLDivElement>(".cart-body")!;
let productsArray = productsListObject;


renderProductsListMain(productsList, productsArray);