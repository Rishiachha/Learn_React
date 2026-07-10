import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'

createRoot(document.getElementById('root')).render(
  //strict mode is a react tool which identifies the potential problems
  <StrictMode>
    <App />
  </StrictMode>,
)
