import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './CartContext'
import App from './App'
import './styles.css'

import { HashRouter } from 'react-router-dom'

<HashRouter>
  <CartProvider>
    <App />
  </CartProvider>
</HashRouter>
