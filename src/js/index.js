import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'

import reducer from './reducer'
import App from './containers/App'

require('!style!css!sass!../scss/styles.scss')

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunkMiddleware)
    )
)

render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('app')
)
