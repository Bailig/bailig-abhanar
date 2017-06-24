import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { App, Whoops404 } from './index'
import SkillContent from './skill/containers/content'

const routes = (
    <Router>
        <Switch>
            <Route path="/" exact component={App}/>
            <Route path="/skill" exact component={App}/>
            <Route path="/work" exact component={App}/>
            <Route component={Whoops404} />
        </Switch>
    </Router>
)

export default routes 