import text from '../usernames.txt?raw';

const textArray = text.toString().replace(/\r\n/g, '\n').split('\n');

const newTextArray = textArray.filter((str) => {
  return str.length === 8 && str[2] === 'o' && str[5] === 'd';
});
console.log(newTextArray);

const promiseArray: Promise<Response>[] = newTextArray.map((str) => {
  return new Promise<Response>((resolve, reject) => {
    const response: Promise<Response> = fetch(
      `https://api.github.com/users/${str}`
    ).then((response) => response.json());

    response ? resolve(response) : reject('not found');
  });
});

Promise.allSettled(promiseArray).then((results) => {
  let notExistant: string[] = [];
  let existant: string[] = [];
  results.forEach((result) => {
    if (result.value.name === null || result.value.name === undefined) {
      notExistant = [...notExistant, result.value];
    }
    existant = [...existant, result.value.name];
  });
  console.log(`Usuários que não existem:
  ${notExistant}
  
  Usuários que existem:
  ${existant}`);
});
