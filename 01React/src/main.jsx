import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { App2, App3 } from './App.jsx'
import CounDownApp from './CounDownApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <CounDownApp />
  </StrictMode>,
)
