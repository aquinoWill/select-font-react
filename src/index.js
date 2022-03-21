import React from 'react'
import ReactDOM from 'react-dom'
import { StateContextProvider, StateReducer, InitialState } from 'context'
import App from './App'
import { GlobalStyles } from 'global.styles'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <StateContextProvider reducer={StateReducer} initialState={InitialState}>
      <App />
    </StateContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()

export default App
