import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const root = document.getElementById('root')

if (!root) throw new Error('Error! Cannot find root element')

root.classList.add('h-screen', 'bg-[#F4C2C2]')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
