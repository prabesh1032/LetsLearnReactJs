import React from 'react'
import Counter from '../component/Counter'

function Body({ count, setCount }) {
  return (
    <div>Body
        <Counter count={count} setCount={setCount}/>
    </div>

  )
}

export default Body