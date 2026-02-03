import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { App2, App3 } from './App.jsx'
import CounDownApp from './usestate/AppUseState.jsx'
import AppUseEffect from './useeffect/AppUseEffect.jsx'
import Clock from './useeffect/Clock.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Clock />
  </StrictMode>,
)
