const getTitle = (text: string): HTMLHeadingElement => {
  const h1Element = document.createElement('h1');
  h1Element.classList.add('app-title');
  h1Element.textContent = text;

  return h1Element;
};

const getParagraphText = (text: string, pClass?: string) => {
  const textElement = document.createElement('p') as HTMLParagraphElement;
  textElement.textContent = text;

  pClass && textElement.classList.add(pClass);

  return textElement;
};

export { getTitle, getParagraphText };
