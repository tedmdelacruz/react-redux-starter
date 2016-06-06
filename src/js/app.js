import React, { Component } from 'react'
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import { reducer } from './reducer'
import { App } from './containers'

const store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware)
)

render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('app')
);
