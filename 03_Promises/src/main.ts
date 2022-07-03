const promiseEx01 = new Promise((resolve, reject) => {
  resolve(3);
});

promiseEx01.then((value) => {
  return value;
});

const promiseEx02 = new Promise((resolve, reject) => {
  reject("Boo!");
});

promiseEx02.then((reason) => {
  return reason;
});

const promiseEx03 = (parametro: boolean) =>
  new Promise((resolve, reject) => {
    parametro ? resolve(parametro) : reject(parametro);
  });

const teste = 3 + 3 === 6;

console.log(promiseEx03(teste));

const promiseEx04 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("exercício 04");
  }, 1000);
});

promiseEx04.then((value) => {
  return value;
});

const promiseEx05 = (numero: number) => {
  return new Promise<string>((resolve, reject) => {
    if (numero % 2 === 1) {
      reject(`O número ${numero} é ímpar`);
    }

    try {
      setTimeout(() => {
        resolve(`O número ${numero} é par`);
      }, 1000);
    } catch (err) {
      reject(err);
    }
  });
};

const app = document.getElementById("app")!;
/* promiseEx05(5)
  .then((res) => {
    app.innerText = res;
  })
  .catch((err) => {
    app.innerText = err;
  }); */

const promiseEx06 = (parametro: any) => {
  return new Promise<string>((resolve, reject) => {
    const isnum = /^\d+$/;
    const toNumber = parseInt(parametro as string);

    if (!isnum.test(parametro)) {
      reject("String inválida!");
    }

    try {
      setTimeout(() => {
        resolve(`${toNumber} ao quadrado é ${Math.pow(toNumber, 2)}`);
      }, 1000);
    } catch (err) {
      reject(err);
    }
  });
};

promiseEx06("57adba")
  .then((res) => {
    app.innerText = res;
  })
  .catch((err) => {
    app.innerText = err;
  });

//Exercício 7
const getCountry = (url: string) => {
  return new Promise<Response>((resolve, reject) => {
    const response: Promise<Response> = fetch(url)
      .then((response) => response.json())
      .then((result) => result.name);

    response ? resolve(response) : reject(undefined);
  });
};

const getCharacter = () => {
  const id: number = parseInt(prompt("Digite o id do personagem:")!);
  return new Promise<Response>((resolve, reject) => {
    let response: Promise<Response> = fetch(
      `https://swapi.dev/api/people/${id}`
    ).then((response) => response.json());

    if (response.detail === "Not found") {
      console.log(response.detail);
      reject(undefined);
    }
    resolve(response);
  });
};

getCharacter()
  .then(async (res) => {
    if (res.homeworld === undefined) {
      return undefined;
    }

    const country = await getCountry(res.homeworld);

    if (country === undefined) {
      console.log(res);
      return undefined;
    }

    res.homeworld = country;
    console.log(res);
    return res;
  })
  .catch((err) => {
    return err;
  });
