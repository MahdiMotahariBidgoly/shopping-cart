/** @format */

import { NavLink } from 'react-router-dom'
import Layout from '../Layout/Layout'
import { useCart, useCartActions } from '../Providers/CartProviders'
import './cartPage.css'

const CartPage = () => {
  const dispatch = useCartActions()
  const incrementHandler = item => {
    dispatch({ type: 'ADD_TO_CART', payload: item })
  }
  const removeHandler = item => {
    // console.log(product)
    dispatch({ type: 'REMOVE_FROM_CART', payload: item })
  }
  const { cart, total } = useCart()
  if (!cart.length)
    <Layout>
      return (
      <main>
        <h2>cart is empty</h2>
      </main>
      )
    </Layout>
  return (
    <Layout>
      <main className='container'>
        <section className='cartCenter'>
          <section className='cartItemList'>
            {cart.map(item => {
              return (
                <div className='cartItem' key={item.id}>
                  <div className='itemImg'>
                    <img src={item.image} alt={item.name}></img>
                  </div>
                  <div>{item.name}</div>
                  <div>{item.offPrice * item.quantity}</div>
                  <div className='btnGroup '>
                    <button
                      className='first-child'
                      onClick={() => removeHandler(item)}
                    >
                      Remove
                    </button>
                    <button className='nth-child'>{item.quantity}</button>
                    <button
                      className='last-child'
                      onClick={() => incrementHandler(item)}
                    >
                      Add
                    </button>
                  </div>
                </div>
              )
            })}
          </section>
          <CartSummery total={total} cart={cart} />
        </section>
      </main>
    </Layout>
  )
}

export default CartPage

const CartSummery = ({ total, cart }) => {
  //const [cart,total]= useCart()
  const originalTotalPrice = cart.length
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
    : 0

  return (
    <section className='cartSummery'>
      <h2 style={{ marginBottom: '30px' }}> Cart Summery:</h2>
      <div className='summeryItem'>
        <p>Original Total Price</p>
        <p>{originalTotalPrice}$</p>
      </div>
      <div className='summeryItem'>
        <p>cart discount</p>
        <p>{originalTotalPrice - total}$</p>
      </div>

      <div className='summeryItem net'>
        <p>net Price</p>
        <p>{total}$</p>
      </div>
      <NavLink to='/checkout'>
        <button
          className='btn primary dis'
          style={{ marginTop: '90px', width: '100%' }}
        >
          Go To CheckOut
        </button>
      </NavLink>
    </section>
  )
}
