import React from 'react'
import './App.css'

export default function App() {

  return (
    <div className="App">
      <h1>Hello, React with JSX!</h1>
      <p>This is a simple React example using JSX.</p>
    </div>
  )
}
//we can only export one default component per file
//but we can export multiple named components if needed
 export function App2() {

  return (
    <div className="App2">
      <h1>Hello from App2 Component!</h1>
      <p>This is another React component in the same file.</p>
    </div>
  )
}
 export function App3() {

  return (
    <div className="App3">
      <h1>Hello from App3 Component!</h1>
      <p>This is yet another React component in the same file.</p>
    </div>
  )
}
// Now, in main.jsx, we can import and use App, App2, and App3 components.
//but for app2 and app3 we have to use named import syntax
//import App from './App.jsx'  //default import
//import { App2, App3 } from './App.jsx'  //named import





