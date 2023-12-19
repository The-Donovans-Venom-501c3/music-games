import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider as JotaiProvider } from 'jotai'


ReactDOM.createRoot(document.getElementById('root')).render(
    <JotaiProvider>
    <App />
    </JotaiProvider>
)
