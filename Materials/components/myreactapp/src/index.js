import React from 'react'
import { render } from 'react-dom'
import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import AppTodo from './componentsTodo/App'
import rootReducer from './reducersTodo'
import {composeWithDevTools} from 'redux-devtools-extension' 
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
//const store = createStore(rootReducer)

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware),
));


render(
  <Provider store={store}>
    <AppTodo />
  </Provider>,
  document.getElementById('root')
)
