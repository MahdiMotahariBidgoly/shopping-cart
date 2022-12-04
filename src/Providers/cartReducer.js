/** @format */
//204 to 210
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      console.log(action, state)

      const updatedCart = [...state.cart]
      const index = updatedCart.findIndex(item => item.id === action.payload.id)
      if (index < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 })
      } else {
        const updatedItem = { ...updatedCart[index] }
        updatedItem.quantity++
        updatedCart[index] = updatedItem
      }
      return {
        ...state,
        cart: updatedCart,
        total: state.total + action.payload.offPrice
      }
    }

    case 'REMOVE_FROM_CART': {
      console.log(action, state)

      const updatedCart = [...state.cart]
      const index = updatedCart.findIndex(item => item.id === action.payload.id)
      const updatedItem = { ...updatedCart[index] }

      if (updatedItem.quantity === 1) {
        const filteredCart = updatedCart.filter(
          item => item.id !== action.payload.id
        )
        return {
          ...state,
          cart: filteredCart,
          total: state.total - action.payload.offPrice
        }
      } else {
        updatedItem.quantity--
        updatedCart[index] = updatedItem
        return {
          ...state,
          cart: updatedCart,
          total: state.total - action.payload.offPrice
        }
      }
    }
    default:
      return state
  }
}
export default cartReducer

//or instead of top model look at the  211
// const addProduct = (state, payload) => {
//   console.log(payload, state)

//   const updatedCart = [...state.cart]
//   const index = updatedCart.findIndex(item => item.id === payload.id)
//   if (index < 0) {
//     updatedCart.push({ ...payload, quantity: 1 })
//   } else {
//     const updatedItem = { ...updatedCart[index] }
//     updatedItem.quantity++
//     updatedCart[index] = updatedItem
//   }
//   return {
//     ...state,
//     cart: updatedCart,
//     total: state.total + payload.price
//   }
// }

// const removProduct = (state, payload) => {
//   {
//     console.log(payload, state)

//     const updatedCart = [...state.cart]
//     const index = updatedCart.findIndex(item => item.id === payload.id)
//     const updatedItem = { ...updatedCart[index] }

//     if (updatedItem.quantity === 1) {
//       const filteredCart = updatedCart.filter(item => item.id !== payload.id)
//       return {
//         ...state,
//         cart: filteredCart,
//         total: state.total - payload.price
//       }
//     } else {
//       updatedItem.quantity--
//       updatedCart[index] = updatedItem
//       return {
//         ...state,
//         cart: updatedCart,
//         total: state.total - payload.price
//       }
//     }
//   }
// }

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return addProduct(state, action.payload)

//     case 'REMOVE_FROM_CART':
//       return removProduct(state, action.payload)
//     default:
//       return state
//   }
// }
// export default cartReducer
