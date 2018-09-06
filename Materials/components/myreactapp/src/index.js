import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AppTodo from './componentsTodo/App'
import rootReducer from './reducersTodo'

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <AppTodo />
  </Provider>,
  document.getElementById('root')
)
