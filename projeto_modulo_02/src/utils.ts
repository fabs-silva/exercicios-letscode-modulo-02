export interface Options {
  method: string;
  headers: {
    ['X-RapidAPI-Key']: string;
    ['X-RapidAPI-Host']: string;
  };
}

const randomNumbers = (quantity: number): number[] => {
  let numbersArray: number[] = [];

  for (let i = 0; i < quantity; i++) {
    let newNumber = Math.floor(Math.random() * 898);

    const checkNumberInArray = numbersArray.find((n) => n === newNumber);

    if (checkNumberInArray) {
      newNumber = Math.floor(Math.random() * 898);
    }

    numbersArray = [...numbersArray, newNumber];
  }
  return numbersArray;
};

const gettingApiPromise = (url: string) => {
  return new Promise<Response>((resolve, reject) => {
    const options: Options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
        'X-RapidAPI-Host': 'pokemon-go1.p.rapidapi.com',
      },
    };

    let response: Promise<Response> = fetch(url, options).then((response) =>
      response.json()
    );

    response ? resolve(response) : reject(undefined);
  });
};

export { randomNumbers, gettingApiPromise };
