const addProductAlreadyInCart = (
  cart: ProductCart[],
  selectedProduct: ProductCart
): ProductCart | null => {
  const amountSelected = checkAmountSelected(productInCart.amountLeft);

  let productInCart: ProductCart | undefined = cart.find(
    (p) => p.id === selectedProduct.id
  );

  if (productInCart !== undefined) {
    const newAmountSelected = productInCart.amountSelected + amountSelected;

    if (newAmountSelected > selectedProduct.amountLeft) {
      throw new Error('Quantidade maior do que a disponível em estoque');
    }

    return {
      ...productInCart,
      amountSelected: newAmountSelected,
      total: newAmountSelected * productInCart.price,
    };
  }

  return null;
};

const addProductToCart = (selectedProduct: ProductCart): void => {
  const cartHtml = document.querySelector('.cart-body') as HTMLDivElement;
  let cart = getProductsLocalStorage();

  const amountSelected = checkAmountSelected(selectedProduct);

  const productAlreadyInCart = addProductAlreadyInCart(cart, selectedProduct);

  if (productAlreadyInCart) {
    cart = cart.filter((p) => p.id !== productAlreadyInCart.id);
    cart.push(productAlreadyInCart);
  } else {
    const productCart = {
      id: selectedProduct.id,
      name: selectedProduct.name,
      price: selectedProduct.price,
      image: selectedProduct.image,
      amountLeft: selectedProduct.amountLeft,
      amountSelected: amountSelected,
      total: selectedProduct.total,
    };

    cart.push(productCart);

    const newItem = renderProductCart(productCart);
    cartHtml.appendChild(newItem);
    removeFromCart(productCart.id);
  }

  saveProductLocalStorage(cart);
};
