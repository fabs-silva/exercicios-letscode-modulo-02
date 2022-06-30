import { Product, ProductCart } from './../models/Product';
const productPriceReais = (price: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
};

const amountLeftText = (amount: number, button?: HTMLButtonElement): string => {
  const amountItemText = amount === 1 ? 'item' : 'itens';

  if (amount < 1) {
    button && (button.disabled = true);
    return `<span class="product-out-of-stock">Fora de estoque</span>`;
  } else {
    button && (button.disabled = false);
    return `* ${amount} ${amountItemText} em estoque`;
  }
};

const getInputValue = (cssId: string): string => {
  const input = document.getElementById(cssId) as HTMLInputElement;

  return input.value;
};

export const getProductImage = (product: Product | ProductCart): string => {
  return product.image === ''
    ? `<img class="cart-product-image" src="https://www.cer-cavalos.com/images/not_found.png" alt="Imagem não disponível">`
    : `<img class="cart-product-image" src="${product.image}" alt="${product.name}">`;
};

const checkAmountSelected = (
  amountSelected: number,
  amountLeft: number
): number => {
  if (amountSelected > amountLeft) {
    throw new Error('Quantidade maior do que a disponível em estoque');
  }

  return amountSelected;
};

export {
  productPriceReais,
  amountLeftText,
  getInputValue,
  checkAmountSelected,
};
