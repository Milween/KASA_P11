import React from 'react'
import {createRoot} from "react-dom/client"
import './index.css'

import reportWebVitals from './reportWebVitals'
import App from './components/App/App'

const rootElement = document.getElementById('root')
  if (rootElement != null){
    const root = createRoot(rootElement)
  root.render(//will render each component that will build the page as itself
    <App />
  )
}
reportWebVitals()