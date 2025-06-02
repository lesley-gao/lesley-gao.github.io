import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Hotjar from '@hotjar/browser';

const siteId = 6422647;
const hotjarVersion = 6;
Hotjar.init(siteId, hotjarVersion);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
