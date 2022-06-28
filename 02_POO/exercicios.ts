 //Exercício 01

const canetaVermelha = {
    marca: 'bic',
    tipo: 'esferográfica',
    cor: 'vermelha',
} 

//Exercício 02

interface Televisao {
    canal: number,
    volume: number,
    ligada: boolean,
};

const tv: Televisao = {
    canal: 0,
    volume: 0,
    ligada: false,
}

const liga = (tv: Televisao) => {
    if (tv.ligada === true) {
        return;
    }

    tv.ligada = true;

    return tv.ligada;
}

const desliga = (tv: Televisao) => {
    if (tv.ligada === false) {
        return;
    }

    tv.ligada = false;

    return tv.ligada;
}

const mudaDeCanal = (tv: Televisao, novoCanal: number) => {
    tv.canal = novoCanal;
    return tv.canal;
}

const aumentaVolume = (tv: Televisao) => {
    return tv.volume += 1;
}

const diminuiVolume = (tv: Televisao) => {
    return tv.volume -= 1;
} 

//Exercício 03

class Pessoa {
    constructor(public nomeCompleto: string,
        public email: string) {

        this.nomeCompleto = nomeCompleto;
        this.email = email;

    }

    get getNomeCompleto(): string {
        return this.nomeCompleto;
    }

    get getEmail(): string {
        return this.email;
    }

    get getPrimeiroNome(): string {
        return this.nomeCompleto.split(' ')[0];
    }
} 

//Exercício 04

class Televisao {
    #canal: number;
    #volume: number;
    #ligada: boolean;

    constructor() {
        this.#canal = 0;
        this.#volume = 0
        this.#ligada = false;
    }

    get canal(): number {
        return this.#canal;
    }

    get volume(): number {
        return this.#volume;
    }

    get ligada(): boolean {
        return this.#ligada;
    }

    public liga() {
        if (this.#ligada) {
            return;
        }

        return this.#ligada;
    }

    public desliga() {
        if (!this.#ligada) {
            return;
        }

        return !this.#ligada;
    }

    public mudaDeCanal(novoCanal: number) {
        this.#canal = novoCanal;
        return this.#canal;
    }

    public aumentaVolume() {
        return this.#volume + 1;
    }

    public diminuiVolume() {
        return this.#volume - 1;
    }
} 

//Exercício 05

class Boletim {
    constructor(
        public nome: string,
        public ano: number,
        public semestre: number,
        public medias: number[]
    ) {

        if (this.ano <= 1964) {
            throw new Error("O ano deve ser maior que 1964");
        }

        if (this.semestre <= 0 && this.semestre > 14) {
            throw new Error("Selecione um semestre entre 1 e 14");
        }

        if (this.medias.length !== 6) {
            throw new Error("Devem ser cadastradas as médias de todas as matérias");
        }

        medias.forEach(media => {
            if (media < 0 && media > 10) {
                throw new Error("A nota deve estar entre 0 e 10");
            }
        })

        this.nome = nome;
        this.ano = ano;
        this.semestre = semestre;
        this.medias = medias;
    }

    get getNome() {
        return this.nome;
    }

    get getAno() {
        return this.ano;
    }

    get getSemestre() {
        return this.semestre;
    }

    get getMedias() {
        return this.medias;
    }
} 

//Exercício 06

const categoriasCNH: string[] = ['A', 'B', 'C', 'D', 'E', 'AB', 'AC', 'AD', 'AE'];

class CNH {
    constructor(
        public nome: string,
        public numeroCnh: string,
        public pais: string,
        public idade: number,
        public categoria: string | null
    ) {

        this.nome = nome;
        this.numeroCnh = numeroCnh;
        this.pais = pais;

        if ((this.pais === 'US' || this.pais === 'CA') && this.idade < 16) {
            throw new Error("A idade não pode ser menor que 16");

        }

        if ((this.pais === 'CH' || this.pais === 'RU') && this.idade < 21) {
            throw new Error("A idade não pode ser menor que 21");
        }

        if (this.idade < 18) {
            throw new Error("A idade não pode ser menor que 18");

        }

        if (this.pais === 'BR') {
            if (categoriasCNH.some(cat => cat === this.categoria)) {
                this.categoria = categoria;
            }

            throw new Error("Selecione uma categoria válida")
        }


        this.idade = idade;
        this.categoria = null;
    }

    get getNome() {
        return this.nome;
    }

    get getNumeroCnh() {
        return this.numeroCnh;
    }

    get getPais() {
        return this.pais;
    }

    get getIdade() {
        return this.idade;
    }

    get getCategoria() {
        return this.categoria;
    }
} 

//Exercício 07

class Carro {
    constructor(
        public marca: string,
        public cor: string,
        public modelo: string,
        public volumeAtualDoTanqueEmLitros: number,
        public capacidadeDoTanqueEmLitros: number,
        public tipoDeCombustivel: string,
    ) {

        this.marca = marca;
        this.cor = cor;
        this.volumeAtualDoTanqueEmLitros = volumeAtualDoTanqueEmLitros;
        this.capacidadeDoTanqueEmLitros = capacidadeDoTanqueEmLitros;

        this.modelo = 'hatch' || 'sedan';

        this.tipoDeCombustivel = 'álcool' || 'gasolina' || 'flex';
    }

    get getMarca() {
        return this.marca;
    }

    get getCor() {
        return this.cor;
    }

    get getModelo() {
        return this.modelo;
    }

    get getVolumeAtualDoTanqueEmLitros() {
        return this.volumeAtualDoTanqueEmLitros;
    }

    get getCapacidadeDoTanqueEmLitros() {
        return this.capacidadeDoTanqueEmLitros;
    }

    get getTipoDeCombustivel() {
        return this.tipoDeCombustivel
    }

    public abastecer(litros: number, combustivel: string = 'gasolina') {
        let combustivelEscolhido = this.tipoDeCombustivel === 'flex' ? combustivel : this.tipoDeCombustivel;
        let precoPorLitro = combustivelEscolhido === 'gasolina' ? 5.62 : 4.16;

        this.volumeAtualDoTanqueEmLitros += litros;
        return litros * precoPorLitro;

    }
}

//Exercício 08

class Time {
    constructor(
        public pais: string,
        public esporte: string,
        public pontuacao: number,
    ) {

        this.pais = pais;
        this.esporte = esporte;
        this.pontuacao = 0;
    }

    get getPais() {
        return this.pais;
    }

    get getEsporte() {
        return this.esporte;
    }

    get getPontuacao() {
        return this.pontuacao;
    }

    public pontua(resultado: string) {
        if (resultado === 'W') {
            return this.pontuacao += 3;
        }

        if (resultado === 'L') {
            return this.pontuacao += 0;
        }

        if (resultado === 'D') {
            return this.pontuacao += 1;
        }

        throw new Error('Valor inválido. Digite W para vitória, L para derrota e D para empate.')
    }
} 

//Exercício 09

class Veiculo {
  public rodas: number;

  constructor(public usaCombustivel: boolean) {
    this.usaCombustivel = usaCombustivel;
  }

  get getUsaCombustivel() {
    return this.usaCombustivel;
  }

  get getRodas() {
    return this.rodas;
  }

  set setRodas(rodas: number) {
    if (this.rodas < 1) {
      throw new Error("Um veículo deve ter pelo menos 1 roda");
    }

    this.rodas = rodas;
  }
}

class Carro extends Veiculo {
  constructor(
    public usaCombustivel: boolean,
    public tipoDeCombustivel: string
  ) {
    super(usaCombustivel);

    this.tipoDeCombustivel = "álcool" || "gasolina" || "flex";
  }
}

class Bicicleta extends Veiculo {
  constructor(public usaCombustivel: boolean, public infantil: boolean) {
    super(usaCombustivel);

    if (this.rodas < 2) {
      throw new Error("Uma bicicleta deve ter pelo menos 2 rodas");
    }

    this.infantil = infantil;
  }
}

//Exercício 10
class Programa {
  constructor(public duracaoEmMinutos: number, public genero: string) {
    this.duracaoEmMinutos = duracaoEmMinutos;
    this.genero = genero;
  }

  get getDuracaoEmMinutos() {
    return this.duracaoEmMinutos;
  }

  get getGenero() {
    return this.genero;
  }
}

class Seriado extends Programa {
  constructor(
    public duracaoEmMinutos: number,
    public genero: string,
    public anoDeInicio: number,
    public numeroDeEpisodios: number,
    public anoDeFim?: number
  ) {
    super(duracaoEmMinutos, genero);

    this.anoDeInicio = anoDeInicio;
    this.anoDeFim = anoDeFim;

    if (this.numeroDeEpisodios < 1) {
      throw new Error("O número de episódios deve ser maior do que 0");
    }

    this.numeroDeEpisodios = numeroDeEpisodios;
  }

  get getAnoDeInicio() {
    return this.anoDeInicio;
  }

  get getAnoDeFim() {
    return this.anoDeFim;
  }

  get getNumeroDeEpisodios() {
    return this.numeroDeEpisodios;
  }
}

class Filme extends Programa {
  get getDuracaoEmHoras() {
    const tempoHoras = Math.floor(this.duracaoEmMinutos / 60);
    const tempoSobra = this.duracaoEmMinutos % 60;

    return `${tempoHoras} h ${tempoSobra} min`;
  }
}
//Exercício 11

class Livro {
  constructor(public nome: string, public autor: string, public ano: number) {
    this.nome = nome;
    this.autor = autor;
    this.ano = ano;
  }

  get getNome() {
    return this.nome;
  }

  get getAutor() {
    return this.autor;
  }

  get getAno() {
    return this.ano;
  }
}

class Ebook extends Livro {
  constructor(
    public nome: string,
    public autor: string,
    public ano: number,
    public numeroPaginas: number,
    public numeroCapitulos: number
  ) {
    super(nome, autor, ano);
    this.numeroPaginas = numeroPaginas;
    this.numeroCapitulos = numeroCapitulos;
  }
}

class AudioBook extends Livro {
  constructor(
    public nome: string,
    public autor: string,
    public ano: number,
    public duracaoEmMinutos: number
  ) {
    super(nome, autor, ano);
    this.duracaoEmMinutos = duracaoEmMinutos;
  }
}

//Exercício 12
class Dispositivo {
  calcula() {
    return "Calcula";
  }
}

function MixinIlumina(superClass: typeof Dispositivo) {
  return class extends superClass {
    ilumina() {
      return `Ilumina`;
    }
  };
}

function MixinAcessaInternet(superClass: typeof Dispositivo) {
  return class extends superClass {
    acessaInternet() {
      return `Acessa a internet`;
    }
  };
}

function MixinTiraFotos(superClass: typeof Dispositivo) {
  return class extends superClass {
    tiraFotos() {
      return `Tira fotos`;
    }
  };
}

function MixinRegistraPassos(superClass: typeof Dispositivo) {
  return class extends superClass {
    registraPassos() {
      return `Registra Passos`;
    }
  };
}

class Relogio extends MixinAcessaInternet(MixinRegistraPassos(Dispositivo)) {}
class Computador extends MixinAcessaInternet(MixinTiraFotos(Dispositivo)) {}
class Celular extends MixinAcessaInternet(
  MixinTiraFotos(MixinIlumina(MixinRegistraPassos(Dispositivo)))
) {}

//Exercício 13
class Produto {
  constructor(public nome: string, public valor: number) {
    this.nome = nome;
    this.valor = valor;
  }

  get getNome() {
    return this.nome;
  }

  get getValor() {
    return this.valor;
  }
}

class Cartela {
  constructor(public idDoEstabelecimento: string, public carimbos: number) {
    this.idDoEstabelecimento = idDoEstabelecimento;
    this.carimbos = carimbos;
  }

  get getIdDoEstabelecimento() {
    return this.idDoEstabelecimento;
  }

  get getCarimbos() {
    return this.carimbos;
  }
}

class Prescricao {
  constructor(public remedios: string[]) {
    this.remedios = remedios;
  }

  get getRemedios() {
    return this.remedios;
  }
}

class Estabelecimento {
  constructor(public id: number, public produtos: Produto[]) {
    (this.id = id), (this.produtos = produtos);
  }
}

function MixinRestaurante(superClass: typeof Estabelecimento) {
  return class extends superClass {
    constructor(
      public id: number,
      public produtos: Produto[],
      public pontosParaResgatarPremio: number
    ) {
      super(id, produtos);
      this.pontosParaResgatarPremio = pontosParaResgatarPremio;
    }
    resgatarPremio(cartela: Cartela) {
      if (cartela.carimbos !== this.pontosParaResgatarPremio) {
        throw new Error("Você ainda não atingiu a quantidade de carimbos");
      }

      cartela.carimbos = 0;
      return "Prêmio";
    }
  };
}

function MixinFarmacia(superClass: typeof Estabelecimento) {
  return class extends superClass {
    comprarRemedios(prescricao: Prescricao, remedios: string[]) {
      const remediosComprar = remedios.map((remedio) => {
        return prescricao.remedios.filter((r) => remedio === r)[0];
      });

      if (!remediosComprar) {
        throw new Error("Não há remédios a serem comprados");
      }

      return remediosComprar;
    }
  };
}

function MixinBar(superClass: typeof Estabelecimento) {
  return class extends superClass {
    pedirBebida(idade: number, produto: Produto) {
      if (idade < 18) {
        throw new Error("É proibido vender bebidas a menores de 18 anos");
      }
      return produto;
    }
  };
}

class Restaurante extends MixinRestaurante(Estabelecimento) {}
class Bar extends MixinRestaurante(MixinBar(Estabelecimento)) {}
class Farmacia extends MixinFarmacia(Estabelecimento) {}
 
