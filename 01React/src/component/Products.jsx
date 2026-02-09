import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { CountContext } from '../usecontext/CountContext'
import { CartItemContext } from '../usecontext/CartItemContext'

function Products({ item }) {
    const [addedToCart, setAddedToCart] = useState(false);
    const { cartitems, setCartitems } = useContext(CartItemContext);
  return (
    <div className='bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl'>
        <div className='bg-cyan-300 h-48 flex items-center justify-center'>
            <span className='text-6xl'>🛍️</span>
        </div>
        <div className='p-6'>
            <h3 className='text-xl font-bold text-gray-800 mb-2'>{item.name}</h3>
            <p className='text-2xl font-semibold text-green-600 mb-4'>${item.price}</p>
            {
                addedToCart ? 
                <button 
                    onClick={() => { setAddedToCart(false); setCartitems(cartitems - 1); }} 
                    className='w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2'
                >
                    <span>🗑️</span> Remove from Cart
                </button> : 
                <button 
                    onClick={() => { setAddedToCart(true); setCartitems(cartitems + 1); }} 
                    className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2'
                >
                    <span>🛒</span> Add to Cart
                </button>
            }
        </div>
    </div>
  )
}

export default Products