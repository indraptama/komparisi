import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import NewKtp from './NewKtp'

const RoutePath = (props) => {
  return(
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/newktp' component={NewKtp}/>
      </Switch>
    </div>
  )
}

export default RoutePath
