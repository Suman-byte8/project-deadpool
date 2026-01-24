import React, { StrictMode } from 'react' // Added React import
import { createRoot } from 'react-dom/client'
import App from './App.jsx' // IMPORT APP HERE
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)