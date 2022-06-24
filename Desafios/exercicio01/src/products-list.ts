interface Produto {
  nome: string;
  preco: number;
  imagem: string;
  estoque: number;
}

export const listaDeProdutos: Produto[] = [
  {
    nome: "Camiseta Feminina Yankees LeMahieu",
    preco: 55.0,
    imagem:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3757000/altimages/ff_3757332-6ac22160ce20387733daalt1_full.jpg&w=900",
    estoque: 5,
  },
  {
    nome: "Camiseta Maneskin 'Zitte e Buoni'",
    preco: 37.0,
    imagem:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTzQz18YZK9dmWSG6HT1LJTlH8TaIcsLq1ddOMaxLl9uvZUau0BIyPt2Uxmkprtkl3X2FembENV8r9Ve64-cIYtzXrcC1Gq&usqp=CAY",
    estoque: 2,
  },
  {
    nome: "Camiseta Dr. House",
    preco: 30.0,
    imagem:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSQVGYvUzz8m5NL4QBqpEzBr4pe4JXYoJG4znQjza6q5eWEF8qDEA_Pdn3UG0Gqd4QrVkN1kyI0Wq-JGJk1gPc0ByxfPd5Z0PiigW1mptnu&usqp=CAE",
    estoque: 10,
  },
  {
    nome: "Camiseta Centralizar em CSS",
    preco: 35.0,
    imagem:
      "https://cdn.shopify.com/s/files/1/2651/2090/products/mockup-8436f1dd_720x.jpg?v=1606426638",
    estoque: 6,
  },
  {
    nome: "Camista Stack Overflow",
    preco: 35.0,
    imagem:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRmi8a8ze9F2uZO4ATN_i-j4oq6j2zh36na5ns-kuXFixrdavGHdycdfKmF-VVAMf0EX2TyvFKQUYY4O1wbJ0_nCS_WpbZLX0IVWKyYlQlwyxDNSSE0coCZEQ&usqp=CAE",
    estoque: 3,
  },
  {
    nome: "Camiseta Café Não Costuma Faiá",
    preco: 40.0,
    imagem:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR6orKryuIe1jY8ngkAMXUFg9REYxQ1t796NIxftDcvlZHDO_ggwaulyOeRCjbDIrbtcrQWe7V43oHWNUaDfR3e2aS4hwLW-h-64ys5gj2L_BrEUynaal-n2w&usqp=CAE",
    estoque: 1,
  },
  {
    nome: "Camiseta Khachapuri e Khinkali",
    preco: 31.0,
    imagem:
      "https://i5.walmartimages.com/asr/d16f3200-8e77-4a01-8755-046f1f7c6601_1.80a4ae85e523a44598ec0820af7db11d.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    estoque: 8,
  },
  {
    nome: "Camista Spread Ajvar Not Hate",
    preco: 34.0,
    imagem:
      "https://m.media-amazon.com/images/I/B1F7+hokpLS._CLa%7C2140%2C2000%7C51Vh7xVjihL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX679._SX._UX._SY._UY_.png",
    estoque: 6,
  },
  {
    nome: "Camiseta Adenia Chloe",
    preco: 43.0,
    imagem:
      "https://cdn.awsli.com.br/1000x1000/236/236627/produto/133763450/desca-triste-entao-camiseta-basicona-unissex-92583930.jpg",
    estoque: 4,
  },
  {
    nome: "Camiseta Css-in-JS",
    preco: 35.0,
    imagem:
      "https://cdn.shopify.com/s/files/1/2651/2090/products/mockup-39c0178b_1200x1200.jpg?v=1606426778",
    estoque: 2,
  },
];

export const geraListaProdutos = (lista: HTMLElement): void => {
  listaDeProdutos.forEach((prod) => {
    const nomeProduto = document.createElement("p");
    const valorProduto = document.createElement("span");
    const estoqueProduto = document.createElement("span");
    const imagemProduto = document.createElement("img");
    const botaoProduto = document.createElement("button");

    nomeProduto.classList.add("produto-nome");
    valorProduto.classList.add("produto-valor");
    estoqueProduto.classList.add("produto-estoque");
    imagemProduto.classList.add("produto-imagem");
    botaoProduto.classList.add("produto-botao");

    const botaoProdutoIcone = document.createElement("i") as HTMLElement;
    botaoProdutoIcone.classList.add("fa-solid");
    botaoProdutoIcone.classList.add("fa-cart-plus");
    botaoProdutoIcone.classList.add("icone");

    nomeProduto.innerText = prod.nome;
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
    nomeProduto.appendChild(spanInfoProduto);
    spanInfoProduto.appendChild(valorProduto);
    spanInfoProduto.appendChild(estoqueProduto);
    itemProduto.appendChild(botaoProduto);

    lista.append(itemProduto);
  });
};
