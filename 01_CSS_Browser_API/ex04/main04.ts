import { comecarJogo, encerrarJogo } from './functions04.js';

const botaoInicia = document.querySelector('.botao-inicia') as HTMLButtonElement;
const botaoEncerra = document.querySelector('.botao-encerra') as HTMLButtonElement;
botaoEncerra.disabled = true;

const jogador1_pontos = document.querySelector('#jogador1>p.tabuleiro-jogador-pontos') as HTMLParagraphElement;
const jogador2_pontos = document.querySelector('#jogador2>p.tabuleiro-jogador-pontos') as HTMLParagraphElement;

let placarJogador1 = 0;
let placarJogador2 = 0;

jogador1_pontos.innerText = `${placarJogador1.toString()}`;
jogador2_pontos.innerText = `${placarJogador2.toString()}`;

let jogoRolando = false;

botaoInicia.addEventListener('click', () => {
  comecarJogo(botaoInicia, botaoEncerra);
  jogoRolando = true;
});

botaoEncerra.addEventListener('click', () => {
  encerrarJogo(botaoInicia, botaoEncerra);
  jogoRolando = false;
});

export default {};
