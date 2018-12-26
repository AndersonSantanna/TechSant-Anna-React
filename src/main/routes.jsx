import React from 'react'
import {Router, Route, Redirect,hashHistory} from 'react-router'

import About from '../about/about'
import Home from '../home/home'

export default props =>(
    <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='#/'/>
    </Router>
)