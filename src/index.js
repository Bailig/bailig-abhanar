import 'bootstrap-loader'
import './sass/index.scss'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from "react-redux"

import routes from './routes/routes'
import store from './modules/store'


window.React = React
window.store = store

render(
    <Provider store={store}>
        { routes }
    </Provider>,
    document.getElementById('root')
)