import { setProductsList } from "./controllers/ProductListController";
import { productsListObject } from "./json/list-products-obj";

const productsList = document.querySelector<HTMLDivElement>("#products")!;
let productsArray = productsListObject;

setProductsList(productsList, productsArray);