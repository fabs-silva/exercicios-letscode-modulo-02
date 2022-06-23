
const jogador1 = document.querySelector('#jogador1>p.tabuleiro-jogador-pontos') as HTMLParagraphElement;
const jogador2 = document.querySelector('#jogador2>p.tabuleiro-jogador-pontos') as HTMLParagraphElement;

let botao = document.querySelector('.tabuleiro-inicia') as HTMLButtonElement;

let placarJogador1 = 0;
let placarJogador2 = 0;

jogador1?.append(placarJogador1.toString());
jogador2?.append(placarJogador2.toString());

const alteraPlacar = (jogador: HTMLParagraphElement): void => {
  const placarAtual = parseInt(jogador.innerText);
  jogador.innerText = `${(placarAtual + 1).toString()}`;
}

const comecarJogo = (): void => {
  botao.disabled = true;

}

botao.addEventListener('click', () => {
  comecarJogo();
});