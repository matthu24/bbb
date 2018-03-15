import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
//frontend routes here
const App = () => (
  <div>
    <h1>Bench BnB</h1>

    <Switch>
      <Route exact path='/' component={GreetingContainer}/>
      <Route exact path='/login' component={LoginFormContainer} />
    </Switch>
  </div>
);

export default App;
