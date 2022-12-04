/** @format */
//113
export default function checkInCart(cart, product) {
  return cart.find(c => c.id === product.id)
  //113
}
