import React, { useContext } from 'react'
import {AiFillShopping} from 'react-icons/ai'
import CartContext from './context'

const Card = ({name, price}) => {
    const {addToCart} = useContext(CartContext)
  return (
    <div onClick={() => addToCart(name, price)} className='card'>
        <div className='product'>
            <img src='https://softech.kg/image/cache/8af0e86156f176545b7e126cf9aef658.png' alt=''/>
        </div>
        <div className='basket'>
                <h3>{name}</h3>
            <AiFillShopping/>
        </div>
        <span>${price}</span>
    </div>
  )
}

export default Card