import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { results } from './data.js'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App results={results}/>
  </StrictMode>,
)
