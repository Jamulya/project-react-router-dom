import React from 'react'
import Card from './Card'

const Products = () => {
    const products = [
        {name: 'Iphone 10', price: 1000},
        {name: 'Iphone 11', price: 1100},
        {name: 'Iphone 12', price: 1200},
        {name: 'Iphone 13', price: 1300},
    ]
  return (
    <div className='product__list'>
        {products.map((products) => (
            <Card name={products.name} price={products.price}/>
        ))}
    </div>
  )
}

export default Products