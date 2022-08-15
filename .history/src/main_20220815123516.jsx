import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from "@ethersproject/providers";
import {} from 'react-router'

function getLibrary(provider) {
  return new Web3Provider(provider)
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Web3ReactProvider>
)
