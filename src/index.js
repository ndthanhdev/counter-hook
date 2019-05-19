import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import MainPage from './MainPage'
import { initStore } from './store'

function App() {
  const store = initStore()

  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
