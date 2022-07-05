import text from "../usernames.txt?raw";

const textArray = text.toString().replace(/\r\n/g, "\n").split("\n");

const newTextArray = textArray.filter((str) => {
  return str.length === 15 && str[5] === "d" && str[8] === "a";
});
console.log(newTextArray);

const promiseArray: Promise<Response>[] = newTextArray.map((str) => {
  return new Promise<Response>((resolve, reject) => {
    const response: Promise<Response> = fetch(
      `https://api.github.com/users/${str}`
    ).then((response) => response.json());

    if (JSON.stringify(response) === "{}") {
      reject(str);
    }

    resolve(response);
  });
});

Promise.allSettled(promiseArray).then((results) => {
  let notExistant: string[] = [];

  results.forEach((result) => {
    if (result.status === "rejected") {
      notExistant = [...notExistant, result.reason];
    }
  });

  if (notExistant == []) {
    console.log("Todos os usuários foram encontrados");
  }

  console.log(`Usuários que não existem:
  ${notExistant}`);
});
