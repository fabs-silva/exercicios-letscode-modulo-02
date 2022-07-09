const inputSingleString = (id: string) => {
  const inputString = document.getElementById(id) as HTMLInputElement;

  if (inputString.value === "") {
    return;
  }

  return inputString.value.toLowerCase().trim();
};

const inputMultipleStrings = (id: string) => {
  const inputArray = document.getElementById(id) as HTMLInputElement;

  if (inputArray.value === "") {
    return;
  }

  let arrayItems: string[] = Array.from(
    inputArray.value.toLowerCase().split(","),
    (i) => i.trim()
  );

  for (let item of arrayItems) {
    if (item === "") {
      return;
    }
    item = item.trim();
  }

  const arrayUniqueValues = [...new Set(arrayItems)];

  return arrayUniqueValues;
};

export { inputSingleString, inputMultipleStrings };
