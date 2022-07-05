import { Product, ProductCart } from './../models/Product';
const productPriceReais = (price: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
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

export { productPriceReais, getInputValue };
