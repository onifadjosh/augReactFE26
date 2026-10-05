import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Fish from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import  Appslice  from './redux/appslice.js'

export const store = configureStore({
  reducer:Appslice
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
    <Provider store={store}>
        <Fish />
    </Provider>
   </BrowserRouter>
  </StrictMode>,
)
