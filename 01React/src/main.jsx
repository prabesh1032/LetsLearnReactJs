import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { App2, App3 } from './App.jsx'
import CounDownApp from './usestate/AppUseState.jsx'
import AppUseEffect from './useeffect/AppUseEffect.jsx'
import Clock from './useeffect/Clock.jsx'
import TimeOut from './useeffect/TimeOut.jsx'
import SearchUsers from './useeffect/Search.jsx'
import Countdown from './useeffect/CountDownTimer.jsx'  
import AutoSave from './useeffect/AutoSave.jsx'
import AppMemo from './usememo/Appmemo.jsx'
import ToDo from './usememo/ToDo.jsx'
import Stopwatch from './useref/Stopwatch.jsx';
import Login from './useref/Login.jsx'
import Video from './useref/Video.jsx'

createRoot(document.getElementById('root')).render(
    <>
        {/* <App /> */}
        {/* <App2 /> */}
        {/* <App3 /> */}
        {/* <CounDownApp /> */}
        {/* <Clock /> */}
        {/* <TimeOut/> */}
        {/* <SearchUsers /> */}
        {/* <Countdown /> */}
        {/* <AutoSave /> */}
        {/* <AppMemo /> */}
        {/* <ToDo /> */}
        {/* <Stopwatch /> */}
        {/* <Login /> */}
        <Video />
    </>
)
