import { createRoot } from 'react-dom/client'
import LogIn from './components/LogIn/LogIn'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LogIn />
  </StrictMode>,
)
