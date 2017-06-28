
import '../node_modules/font-awesome/css/font-awesome.min.css'
import 'bootstrap-loader'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from "react-redux"
// import './firebase'

import routes from './routes/routes'
import store from './modules/store'

// import * as firebase from 'firebase'

// var config = {
//     apiKey: "AIzaSyAQPgUj3rr4exPZCcnl_iRlRm4a_YEFRxQ",
//     authDomain: "bailigabhanar.firebaseapp.com",
//     databaseURL: "https://bailigabhanar.firebaseio.com",
//     projectId: "bailigabhanar",
//     storageBucket: "",
//     messagingSenderId: "25981334922"
// };
// firebase.initializeApp(config)

window.React = React
window.store = store

render(
    <Provider store={store}>
        { routes }
    </Provider>,
    document.getElementById('root')
)


