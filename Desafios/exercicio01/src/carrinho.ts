import { Produto } from "./products-list";

export const addProdutoCarrinho = (lista: HTMLElement, produtos: Produto[]): void => {
  if (produtos.length > 4) {
    const linkVerMaisP = document.createElement("p");
    const linkVerMaisA = document.createElement("a");

    linkVerMaisA.href = "#";

    linkVerMaisP.classList.add("link-ver-mais-container");

    linkVerMaisA.innerText = "Ver mais itens..."
    linkVerMaisP.appendChild(linkVerMaisA);

    produtos.slice(0, 4).forEach((prod) => {
      geraItemCarrinho(lista, prod);
    })
    lista.append(linkVerMaisP);
  }
  else {
    produtos.forEach((prod) => {
      geraItemCarrinho(lista, prod);
    })
  }
};

const geraItemCarrinho = (lista: HTMLElement, prod: Produto): void => {
  const nomeProduto = document.createElement("p");
  const nomeProdutoLink = document.createElement("a");
  const valorProduto = document.createElement("div");
  const quantidadeProduto = document.createElement("div");
  const imagemProduto = document.createElement("img");

  nomeProduto.classList.add("carrinho-produto-nome");
  valorProduto.classList.add("carrinho-produto-valor");
  quantidadeProduto.classList.add("carrinho-produto-qtde");
  imagemProduto.classList.add("carrinho-produto-imagem");

  nomeProdutoLink.href = "#";

  nomeProdutoLink.innerText = prod.nome;
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
  nomeProduto.appendChild(nomeProdutoLink)
  infoProduto.appendChild(valorProduto);
  infoProduto.appendChild(quantidadeProduto);

  lista.append(itemProduto);
};
