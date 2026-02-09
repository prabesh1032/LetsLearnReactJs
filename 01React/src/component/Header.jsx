import React from 'react'
import Display from './Display'

function Header( { count }) {
  return (
    <div>Header
        <Display count={count}/>
    </div>
  )
}

export default Header