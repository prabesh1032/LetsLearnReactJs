import React from 'react'
import Header from '../component/Header'
import Footer from '../component/footer'
import Body from '../component/Body'
import { useState } from 'react'
import { CountContext } from './CountContext'
import { CartItemContext } from './CartItemContext'

function AppuseContext() {
         const [count, setCount] = useState(0);
        //this is too much complex for just a counter app, we can use useContext to avoid prop drilling and make our code cleaner and more maintainable.

        const [cartitems, setCartitems] = useState([]);
  return (
    <>
        {/* <Header count={count} setCount={setCount}/> 
        <Body count={count} setCount={setCount}/>
        <Footer /> */}
        <CountContext.Provider value={{count, setCount}}>
        <CartItemContext.Provider value={{cartitems, setCartitems}}>
            <Header />
            <Body />
            <Footer />
        </CartItemContext.Provider>
        </CountContext.Provider>
    </>
  )
}

export default AppuseContext