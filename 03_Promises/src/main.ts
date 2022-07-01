const promiseEx01 = new Promise((resolve, reject) => {
  resolve(3);
});

promiseEx01.then((value) => {
  return value;
});

const promiseEx02 = new Promise((resolve, reject) => {
  reject('Boo!');
});

promiseEx02.then((reason) => {
  return reason;
});

const promiseEx03 = (parametro: any) =>
  new Promise((resolve, reject) => {
    parametro ? resolve(parametro) : reject(parametro);
  });

const teste = 3 + 3 === 6;

console.log(promiseEx03(teste));

const promiseEx04 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('exercício 04');
  }, 1000);
});

promiseEx04.then((value) => {
  return value;
});
