const casas = document.querySelectorAll(".casa-tabuleiro");

const VITORIAS: Array<Number[]> = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let checarVez = true;

const JOGADOR_X = "fa-x";
const JOGADOR_O = "fa-circle";

localStorage.getItem("pontosjogadorX") === null &&
  localStorage.setItem("pontosjogadorX", "0");
localStorage.getItem("pontosjogadorO") === null &&
  localStorage.setItem("pontosjogadorO", "0");

const jogador_x_pontos = document.querySelector(
  "#jogador1>p.tabuleiro-jogador-pontos"
) as HTMLParagraphElement;
const jogador_o_pontos = document.querySelector(
  "#jogador2>p.tabuleiro-jogador-pontos"
) as HTMLParagraphElement;

jogador_x_pontos.innerText = localStorage.getItem("pontosjogadorX");
jogador_o_pontos.innerText = localStorage.getItem("pontosjogadorO");

const botaoInicia = document.querySelector(
  ".botao-inicia"
) as HTMLButtonElement;

botaoInicia.addEventListener("click", () => {
  comecarJogo();
});

const comecarJogo = (): void => {
  botaoInicia.disabled = true;

  identificaAcoes();
};

const identificaAcoes = (): void => {
  document.addEventListener("click", (e: Event) => {
    const target = e?.target as HTMLButtonElement;

    if (target.matches(".casa-tabuleiro")) {
      jogar(target.id);
    }
  });
};

const jogar = (id: string): void => {
  const casa = document.getElementById(id);
  const jaUsada = casa.querySelector(".icone-tabuleiro");

  if (jaUsada === null) {
    const jogador_icone = document.createElement("i") as HTMLElement;
    jogador_icone.classList.add("icone-tabuleiro");
    jogador_icone.classList.add("fa-regular");

    const jogador = checarVez ? JOGADOR_X : JOGADOR_O;

    jogador_icone.classList.add(jogador);
    casa?.classList.add(`${jogador}-pai`);
    casa?.appendChild(jogador_icone);
    checarVitoria(`${jogador}-pai`);
  }
};

const checarVitoria = (jogador: string): void => {
  let arrayVencedor = [] as Element[];
  const vencedor = VITORIAS.some((array: number[]) => {
    return array.every((index: number) => {
      const casasVencedoras = casas[index].classList.contains(jogador);
      if (casasVencedoras) {
        arrayVencedor = [...arrayVencedor, casas[index]];
        return casasVencedoras;
      }
    });
  });

  if (vencedor) {
    arrayVencedor.forEach((el) => {
      const elNode = el.firstElementChild;
      if (!elNode.classList.contains("vencedor")) {
        elNode.classList.add("vencedor");
      }
    });
    encerrarJogoCompleto(jogador);
  } else if (checarEmpate()) {
    encerrarJogoCompleto();
  } else {
    checarVez = !checarVez;
  }
};

const checarEmpate = (): boolean => {
  let x = 0;
  let o = 0;

  casas.forEach((casa, index) => {
    if (!isNaN(index)) {
      if (casas[index].classList.contains(`${JOGADOR_X}-pai`)) {
        x++;
      }

      if (casas[index].classList.contains(`${JOGADOR_O}-pai`)) {
        o++;
      }
    }
  });

  return x + o === 9 ? true : false;
};

const encerrarJogoCompleto = (vencedor = null) => {
  const jogador = vencedor === "fa-x-pai" ? "X" : "O";

  if (vencedor) {
    alert(`O vencedor foi o jogador ${jogador}`);
    alterarPlacar(vencedor);
  } else {
    alert("N??o houve vencedor, inicie a pr??xima partida!");
  }

  setTimeout(() => limparTabuleiro(), 2000);
};

const alterarPlacar = (vencedor: string): void => {
  const jogador_pontuacao =
    vencedor === "fa-x-pai" ? jogador_x_pontos : jogador_o_pontos;
  let placar = parseInt(jogador_pontuacao.innerText) + 1;
  jogador_pontuacao.innerText = placar.toString();

  const jogadorVencedor =
    vencedor === "fa-x-pai" ? "pontosjogadorX" : "pontosjogadorO";
  localStorage.setItem(jogadorVencedor, placar.toString());
};

const limparTabuleiro = (): void => {
  casas.forEach((casa) => {
    const casaChild = casa.querySelectorAll(".fa-regular");

    if (casaChild) {
      casaChild.forEach((ch) => {
        casa.removeChild(ch);
      });
    }

    casa.classList.remove("fa-x-pai");
    casa.classList.remove("fa-circle-pai");
  });

  checarVez = true;
};
