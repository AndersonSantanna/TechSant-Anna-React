import React from 'react'
import {Router, Route, Redirect,hashHistory} from 'react-router'

import about from '../about/about'
import home from '../home/home'
import contacts from '../contacts/contacts'
import project from '../projects/pageOne'
import project2 from '../projects/pageTwo'

export default props =>(
    <Router history={hashHistory}>
        <Route path='/' component={home} />
        <Route path='/about' component={about} />
        <Route path='/contacts' component={contacts} />
        <Route path='/projects' component={project} />
        <Route path='/projects/2' component={project2} />

        <Redirect from='*' to='#/'/>
    </Router>
)