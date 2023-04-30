import React from 'react'
import ReactDOM from 'react-dom/client'
import BaseRoutes from '../Routes.jsx'
import App from './App.jsx'
import { TransactionProvider } from './context/TrackingContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TransactionProvider>    <BaseRoutes/>
</TransactionProvider>
  </React.StrictMode>,
)
