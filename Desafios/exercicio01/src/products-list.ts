export interface Produto {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
  estoque: number;
}

export const geraListaProdutos = (lista: HTMLElement, produtos: Produto[]): void => {
  produtos.forEach((prod) => {
    const nomeProduto = document.createElement("p");
    const nomeProdutoLink = document.createElement("a");
    const valorProduto = document.createElement("span");
    const estoqueProduto = document.createElement("span");
    const imagemProduto = document.createElement("img");
    const botaoProduto = document.createElement("button");

    nomeProduto.classList.add("produto-nome");
    valorProduto.classList.add("produto-valor");
    estoqueProduto.classList.add("produto-estoque");
    imagemProduto.classList.add("produto-imagem");
    botaoProduto.classList.add("produto-botao");

    nomeProdutoLink.href = "#";

    const botaoProdutoIcone = document.createElement("i") as HTMLElement;
    botaoProdutoIcone.classList.add("fa-solid");
    botaoProdutoIcone.classList.add("fa-cart-plus");
    botaoProdutoIcone.classList.add("icone");

    nomeProdutoLink.innerText = prod.nome;
    valorProduto.innerText = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(prod.preco);
    estoqueProduto.innerText = `* ${prod.estoque} itens em estoque`;
    imagemProduto.src = prod.imagem;

    botaoProduto.appendChild(botaoProdutoIcone);
    botaoProduto.append("Comprar");

    const itemProduto = document.createElement("div");
    itemProduto.classList.add("produto-item");

    const spanInfoProduto = document.createElement("div");
    spanInfoProduto.classList.add("produto-info");

    itemProduto.appendChild(imagemProduto);
    itemProduto.appendChild(nomeProduto);
    nomeProduto.appendChild(nomeProdutoLink);
    nomeProduto.appendChild(spanInfoProduto);
    spanInfoProduto.appendChild(valorProduto);
    spanInfoProduto.appendChild(estoqueProduto);
    itemProduto.appendChild(botaoProduto);

    lista.append(itemProduto);
  });
};
