import React from 'react'
import { useContext } from 'react'
import { CountContext }  from '../usecontext/CountContext'

// function Display({ count }) {
function Display() {
    const { count } = useContext(CountContext);
  return (
    <>
    <div>Display</div>
    <p>i am displaying count: {count}</p>
    </>
  )
}

export default Display