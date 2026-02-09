import React from 'react'
import { useContext } from 'react'
import { CartItemContext } from '../usecontext/CartItemContext'

function Cart() {
    const { cartitems } = useContext(CartItemContext);
  return (
    <div>Total Cart item is::{cartitems.length}</div>
  )
}

export default Cart