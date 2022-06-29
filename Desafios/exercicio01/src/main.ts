import { createListProducts } from "./controllers/ProductListController";
import { productsListObject } from "./json/list-products-obj";
import { renderProductsListCart } from "./views/CartView";
import { renderProductsListMain } from "./views/ProductView";

let productsArray = createListProducts(productsListObject);

const productsList = document.querySelector<HTMLDivElement>("#products")!;
const cartList = document.querySelector<HTMLDivElement>(".cart-body")!;

renderProductsListMain(productsList, productsArray);
renderProductsListCart(cartList);
