type CartLine = {
  product: string;
  price: number;
  quantity: number;
};

type CartLineWithSubtotal = {
  product: string;
  price: number;
  quantity: number;
  subtotal: number;
};

export function calculateSubtotal(cart: CartLine[]): CartLineWithSubtotal[] {
  const result = cart.map((game) => {
    return {
      product: game.product,
      price: game.price,
      quantity: game.quantity,
      subtotal: game.quantity * game.price,
    }
  })
  return result;
}