/** @format */
//199 to 203
// import Layout from '../Layout/Layout'
// import * as data from '../../src/data'
// const HomePage = () => {
//   const addProductHandler = product => {
//     console.log(product)
//   }
//   return (
//     <Layout>
//       {/* <h2>This is Home page</h2> */}
//       <main className='container'>
//         <section className='productList'>
//           {data.products.map(product => {
//             return (
//               <section className='product'>
//                 <div className='productImg'>
//                   <img src={product.image} alt={product.name}></img>
//                 </div>
//                 <div className='productDesc'>
//                   <p>{product.name}</p>
//                   <p>${product.price}</p>
//                   <button
//                     onClick={() => addProductHandler(product)}
//                     className='btn primary'
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </section>
//             )
//           })}
//         </section>
//       </main>
//     </Layout>
//   )
// }

// export default HomePage

//204 and 205
import Layout from '../Layout/Layout'
import * as data from '../../src/data'
import { useCart, useCartActions } from '../Providers/CartProviders'
import checkInCart from '../utils/checkInCart'
import { toast } from 'react-toastify'
import { NavLink } from 'react-router-dom'
const HomePage = () => {
  const { cart } = useCart()
  const dispatch = useCartActions()
  const addProductHandler = product => {
    // console.log(product)
    toast.success(`${product.name} added to cart!`)
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }
  return (
    <Layout>
      {/* <h2>This is Home page</h2> */}
      <main className='container'>
        <section className='productList'>
          {data.products.map(product => {
            return (
              <section className='product' key={product.id}>
                <div className='productImg'>
                  <img src={product.image} alt={product.name}></img>
                </div>
                <div className='productDesc'>
                  <p>{product.name}</p>
                  <p>${product.price}</p>

                  <button
                    onClick={() => addProductHandler(product)}
                    className='btn primary'
                    disabled={checkInCart(cart, product) ? true : false}
                  >
                    {checkInCart(cart, product) ? (
                      <NavLink to='/cart' className='continuOrdering'>
                        <p>continue</p>
                      </NavLink>
                    ) : (
                      'Add to Cart'
                    )}
                  </button>
                </div>
              </section>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export default HomePage
