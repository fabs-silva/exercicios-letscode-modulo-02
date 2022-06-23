
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

let jogadorX = true;

const identificaAcoes = (): void => {
    document.addEventListener('click', (e: Event | null) => {
        const target = e?.target as HTMLButtonElement;

        if (target.matches(('.casa-tabuleiro'))) {
            const jogador_icone = document.createElement('i') as HTMLElement;
            jogador_icone.classList.add('fa-regular');

            if (jogadorX) {
                jogador_icone.classList.add('fa-x');
                jogador_icone.dataset.XOuO = "x";
            } else {
                jogador_icone.classList.add('fa-circle');
                jogador_icone.dataset.XOuO = "o";
            }

            target?.appendChild(jogador_icone);
            jogadorX = !jogadorX;
        }
    });
};

const limpaTabuleiro = (): void => {
    const casas = document.querySelectorAll('.casa-tabuleiro');

    casas.forEach((casa) => {
        const casaChild = casa.querySelectorAll('.fa-regular');

        if (casaChild) {
            casaChild.forEach(ch => {
                casa.removeChild(ch);
            })
        }
    });

    jogadorX = true;
}

export const comecarJogo = (botaoInicia: HTMLButtonElement, botaoEncerra: HTMLButtonElement): void => {
    botaoInicia.disabled = true;
    botaoEncerra.disabled = false;

    identificaAcoes();
}

export const encerrarJogo = (botaoInicia: HTMLButtonElement, botaoEncerra: HTMLButtonElement): void => {
    const temCerteza = confirm('Tem certeza que deseja encerrar o jogo?');

    if (temCerteza) {
        botaoInicia.disabled = false;
        botaoEncerra.disabled = true;

        limpaTabuleiro();
    }
}

const alterarPlacar = (jogador: HTMLParagraphElement): void => {
    const placarAtual = parseInt(jogador.innerText);
    jogador.innerText = `${(placarAtual + 1).toString()}`;
}


