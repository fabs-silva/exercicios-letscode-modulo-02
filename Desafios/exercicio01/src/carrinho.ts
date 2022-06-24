import { listaDeProdutos } from "./products-list";

export const addProdutoCarrinho = (lista: HTMLElement): void => {
  const produtos = [listaDeProdutos[3], listaDeProdutos[7]];
  produtos.forEach((prod) => {
    const nomeProduto = document.createElement("p");
    const valorProduto = document.createElement("div");
    const quantidadeProduto = document.createElement("div");
    const imagemProduto = document.createElement("img");

    nomeProduto.classList.add("carrinho-produto-nome");
    valorProduto.classList.add("carrinho-produto-valor");
    quantidadeProduto.classList.add("carrinho-produto-qtde");
    imagemProduto.classList.add("carrinho-produto-imagem");

    nomeProduto.innerText = prod.nome;
    valorProduto.innerText = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(prod.preco);
    quantidadeProduto.innerText = "Quantidade: 1";
    imagemProduto.src = prod.imagem;

    const itemProduto = document.createElement("div");
    itemProduto.classList.add("carrinho-produto-item");

    const infoProduto = document.createElement("div");
    infoProduto.classList.add("carrinho-produto-info");

    itemProduto.appendChild(imagemProduto);
    itemProduto.appendChild(infoProduto);
    infoProduto.appendChild(nomeProduto);
    infoProduto.appendChild(valorProduto);
    infoProduto.appendChild(quantidadeProduto);

    lista.append(itemProduto);
  });
};
