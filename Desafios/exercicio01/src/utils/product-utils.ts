export const productPriceReais = (price: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
};

export const amountLeftText = (
  amount: number,
  button?: HTMLButtonElement
): string => {
  const amountItemText = amount === 1 ? "item" : "itens";

  if (amount < 1) {
    button && (button.disabled = true);
    return `<span class="out-of-stock">Fora de estoque</span>`;
  } else {
    button && (button.disabled = false);
    return `* ${amount} ${amountItemText} em estoque`;
  }
};
