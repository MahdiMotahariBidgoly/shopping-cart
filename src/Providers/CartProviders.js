/** @format */

//204
import { useContext, useReducer, createContext } from 'react'
import cartReducer from './cartReducer'
const CartContext = createContext()
const CartContextDispature = createContext()
const initialState = {
  cart: [],
  total: 0
}
const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState)

  return (
    <CartContext.Provider value={cart}>
      <CartContextDispature.Provider value={dispatch}>
        {children}
      </CartContextDispature.Provider>
    </CartContext.Provider>
  )
}

export default CartProvider
export const useCart = () => useContext(CartContext)
export const useCartActions = () => useContext(CartContextDispature)
