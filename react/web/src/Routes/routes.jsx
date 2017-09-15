import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import App from './app'
import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={HomeUser} />
            <Route path='user' component={HomeUser} />
            <Route path='specialist' component={HomeSpecialist} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)