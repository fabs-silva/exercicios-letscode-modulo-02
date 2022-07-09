import { Musician } from "../models/Musician";
import { sanitizeText } from "../utils/General";
import { musiciansList } from "../views/FindMusicians";

const findBySingleInput = (
  input: "name" | "email",
  musicians: Musician[],
  elementId?: string
): Musician[] => {
  const findInput = elementId
    ? (document.getElementById(elementId) as HTMLInputElement)
    : (document.getElementById(input) as HTMLInputElement);

  const findResult = musicians.filter(
    (mus) => sanitizeText(mus[input]) === sanitizeText(findInput.value)
  );

  return findResult.length !== 0 ? findResult : [];
};

const findByArray = (
  input: "instruments" | "musicGenres",
  musicians: Musician[],
  elementId?: string
): Musician[] => {
  const findInput = elementId
    ? (document.getElementById(elementId) as HTMLInputElement)
    : (document.getElementById(input) as HTMLInputElement);

  const findResult = musicians.filter((mus) =>
    mus[input].find((inst: string) => inst === findInput.value)
  );

  return findResult.length !== 0 ? findResult : [];
};

const checkWhichIsSelected = () => {
  const selectedInputs = document.querySelectorAll(
    "[type='checkbox']"
  ) as NodeListOf<HTMLInputElement>;

  let elementNames: string[] = [];

  let filled: number = 0;

  selectedInputs.forEach((input) => {
    if (input.checked) {
      elementNames = [...elementNames, input.value];
    }
  });

  if (elementNames.length === 0) {
    alert("Selecione algum campo para continuar");
    return;
  }

  elementNames.forEach((element) => {
    const relatedInput = document.getElementById(element) as HTMLInputElement;

    if (relatedInput.value !== "") {
      filled += 1;
    }
  });

  if (filled !== elementNames.length) {
    alert("Preencha o campo selecionado para continuar");
    return;
  }

  return elementNames;
};

const getResults = (input: string, musicians: Musician[]) => {
  let results: Musician[] = [];
  if (input === "find-name") {
    results = findBySingleInput("name", musicians, "find-name");
  }

  if (input === "find-email") {
    results = findBySingleInput("email", musicians, "find-email");
  }

  if (input === "find-instruments") {
    results = findByArray("instruments", musicians, "find-instruments");
  }

  if (input === "find-musicGenres") {
    results = findByArray("musicGenres", musicians, "find-musicGenres");
  }

  return results;
};

const findMusiciansButton = (musicians: Musician[]) => {
  const button = document.querySelector<HTMLButtonElement>(".app-form-button");

  button?.addEventListener("click", () => {
    const inputNames = checkWhichIsSelected();
    let results: Musician[] = musicians;

    if (!inputNames) {
      return;
    }

    for (let input of inputNames) {
      results = getResults(input, results);
    }

    if (results.length === 0) {
      alert("A busca não retornou resultados");
      document.location.reload();
      return;
    }

    musiciansList(results);
  });
};

export { findBySingleInput, findMusiciansButton };
