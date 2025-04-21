import { createRoot } from 'react-dom/client'
import LogIn from './components/LogIn/LogIn'
import SignIn from './components/SignIn/SignIn'
import './App.css'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
