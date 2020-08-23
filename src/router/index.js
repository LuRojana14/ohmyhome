import React from 'react'
import { SignUp, Login, Home, Tasks, NotFound } from '../pages'
import { PrivateRoute } from '../components'
import { Route, Switch, BrowserRouter as ReactRouter } from 'react-router-dom'


export function Router () {
  return (
    <ReactRouter>
      <Switch>
        <PrivateRoute exact={true} path={'/'} component={Home} />
        <PrivateRoute path={'/login'} component={Login} />
        <Route path={'/signup'} component={SignUp} />
        <Route path={'/tasks'} component={Tasks} />
        <Route component={NotFound} />
      </Switch>
    </ReactRouter>
  )
}
