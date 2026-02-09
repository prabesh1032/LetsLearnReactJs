import React from 'react'
import Header from '../component/Header'
import Footer from '../component/footer'
import Body from '../component/Body'
import { useState } from 'react'

function AppuseContext() {
        const [count, setCount] = useState(0);
  return (
    <>
        <Header count={count} setCount={setCount}/> 
        <Body count={count} setCount={setCount}/>
        <Footer />
    </>
  )
}

export default AppuseContext