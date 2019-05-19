import { createStore, compose, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducer from './reducer'

export function initStore(preloadState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  return createStore(
    reducer,
    preloadState,
    composeEnhancers(applyMiddleware(reduxThunk))
  )
}
