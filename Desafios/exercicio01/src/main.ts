import { addProdutoCarrinho } from "./carrinho";
import { listaDeProdutos } from "./lista-produtos-obj";
import { geraListaProdutos } from "./products-list";

const listaProdutos = document.querySelector<HTMLDivElement>("#produtos")!;
const listaCarrinho =
  document.querySelector<HTMLDivElement>(".produtos-carrinho")!;

geraListaProdutos(listaProdutos, listaDeProdutos);
addProdutoCarrinho(listaCarrinho, listaDeProdutos);
