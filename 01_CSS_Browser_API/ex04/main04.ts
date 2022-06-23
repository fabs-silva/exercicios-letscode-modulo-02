
const VITORIAS: Array<Number[]> = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [1, 4, 8],
  [2, 4, 5],
];

const JOGADOR1: string = '<i class="fa-regular fa-x"></i>';
const JOGADOR2: string = '<i class="fa-regular fa-circle"></i>';

const casas = document.querySelectorAll('.casa-tabuleiro');

const jogador1_pontos = document.querySelector('#jogador1>p.tabuleiro-jogador-pontos') as HTMLParagraphElement;
const jogador2_pontos = document.querySelector('#jogador2>p.tabuleiro-jogador-pontos') as HTMLParagraphElement;

const botaoInicia = document.querySelector('.botao-inicia') as HTMLButtonElement;
const botaoEncerra = document.querySelector('.botao-encerra') as HTMLButtonElement;
botaoEncerra.disabled = true;

let placarJogador1 = 0;
let placarJogador2 = 0;

jogador1_pontos?.append(placarJogador1.toString());
jogador2_pontos?.append(placarJogador2.toString());

document.addEventListener('click', (e: Event | null) => {
  const target = e?.target as HTMLButtonElement;
  if (target.matches(('.casa-tabuleiro'))) {
    console.log(target.id);
  }
});

const alteraPlacar = (jogador: HTMLParagraphElement): void => {
  const placarAtual = parseInt(jogador.innerText);
  jogador.innerText = `${(placarAtual + 1).toString()}`;
}

const comecarJogo = (): void => {
  botaoInicia.disabled = true;
  botaoEncerra.disabled = false;
}

botaoInicia.addEventListener('click', () => {
  comecarJogo();
});

const encerrarJogo = (): void => {
  botaoInicia.disabled = false;
  botaoEncerra.disabled = true;
}

botaoEncerra.addEventListener('click', () => {
  encerrarJogo();
});

//https://github.com/lucascavalcante/jogo-da-velha/blob/master/js/scripts.js