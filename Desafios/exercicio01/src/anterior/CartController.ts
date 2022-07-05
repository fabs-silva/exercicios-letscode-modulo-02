/* const updateProductAlreadyInCart = (
  selectedProduct: ProductCart
): ProductCart | null => {
  let cart = getProductsLocalStorage();

  let productInCart: ProductCart | undefined = cart.find(
    (p) => p.id === selectedProduct.id
  );

  if (productInCart !== undefined) {
    const updatedProduct = setAmountSelected(selectedProduct);

    return updatedProduct;
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
 */
