import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import ThemeContextWrapper from './theme/ThemeWrapper';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContextWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeContextWrapper>
)
