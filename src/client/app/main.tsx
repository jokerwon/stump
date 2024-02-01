import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import '@unocss/reset/tailwind.css'
import './main.css'
import 'virtual:uno.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
