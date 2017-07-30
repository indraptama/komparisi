import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import NewKtp from './NewKtp'
import KomparisiPage from './KomparisiPage'


const RoutePath = (props) => {
  return(
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/newktp' component={NewKtp}/>
        <Route path='/komparisi' component={KomparisiPage}/>
      </Switch>
    </div>
  )
}

export default RoutePath
