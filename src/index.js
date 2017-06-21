import 'bootstrap-loader'
import './sass/index.scss'

import React from 'react'
import { render } from 'react-dom'

import Layout from './component/layout'

window.React = React

render(
    <Layout />,
    document.getElementById('root')
)