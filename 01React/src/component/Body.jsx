import React, { useState } from 'react'
import Counter from '../component/Counter'
import Products from './Products';

// function Body({ count, setCount }) {
function Body() {
    const [item] = useState([
        {id:1, name:'Product 1', price:100},
        {id:2, name:'Product 2', price:200},
        {id:3, name:'Product 3', price:300},
        {id:4, name:'Product 4', price:400},
        {id:5, name:'Product 5', price:500},
        {id:6, name:'Product 6', price:600},
        {id:7, name:'Product 7', price:700},
        {id:8, name:'Product 8', price:800},
        {id:9, name:'Product 9', price:900},
        {id:10, name:'Product 10', price:1000}
    ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Body</h1>
      {/* <Counter /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {item.map((product) => (
            <Products key={product.id} item={product} />
        ))}
      </div>
    </div>
  )
}

export default Body