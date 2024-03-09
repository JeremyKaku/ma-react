import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import SquareParentComp from './squareParentComp.jsx'
import { SquareProvider } from './squareProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <SquareProvider>
      <SquareParentComp />
    </SquareProvider>
  </React.StrictMode>,
)
