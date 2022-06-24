import { addProdutoCarrinho } from "./carrinho";
import { geraListaProdutos } from "./products-list";

const listaProdutos = document.querySelector<HTMLDivElement>("#produtos")!;
const listaCarrinho =
  document.querySelector<HTMLDivElement>(".produtos-carrinho")!;

geraListaProdutos(listaProdutos);
addProdutoCarrinho(listaCarrinho);
