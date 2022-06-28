import { productsListObject } from "./json/list-products-obj";
import { ProductCart } from "./models/Product";
import { renderProductsListCart } from "./views/CartView";
import { renderProductsListMain } from "./views/ProductView";

const productsList = document.querySelector<HTMLDivElement>("#products")!;
const cartList = document.querySelector<HTMLDivElement>(".cart-body")!;
let productsArray = productsListObject;



renderProductsListMain(productsList, productsArray);
renderProductsListCart(cartList, [productsArray[2], productsArray[3], productsArray[8]] as ProductCart[]);