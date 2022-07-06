const inputSingleString = (id: string) => {
  const inputString = document.getElementById(id) as HTMLInputElement;

  return inputString.value.toLowerCase().trim();
};

const inputMultipleStrings = (id: string) => {
  const inputArray = document.getElementById(id) as HTMLInputElement;

  let arrayItems: string[] = Array.from(
    inputArray.value.toLowerCase().split(','),
    (i) => i.trim()
  );

  for (let item of arrayItems) {
    item = item.trim();
  }

  const arrayUniqueValues = [...new Set(arrayItems)];

  return arrayUniqueValues;
};

const inputBoolean = (id: string) => {
  const inputBoolean = document.querySelector(
    `[name = ${id}]`
  ) as HTMLInputElement;

  return inputBoolean.checked.valueOf();
};

export { inputSingleString, inputMultipleStrings, inputBoolean };
