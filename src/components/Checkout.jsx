import React, { useContext } from 'react'
import CartContext from './context'

const Checkout = () => {
    const {items} = useContext(CartContext)
  return (
    <div>
        <h1>Checkout</h1>
        <div className='shopping__iphone'>
            {items.map((item) => (
                <div>
                    <h2>{item.name}</h2>
                    <h3>{item.price}</h3>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Checkout