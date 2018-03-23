import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import Trick from './trick/trick';
import Benches from './search/search_container';
//frontend routes here
const App = () => (
  <div>
    <h1>Bench BnB</h1>
    <Route exact path='/' component={GreetingContainer}/>

    <Switch>
      <Route exact path = '/' component={Benches}/>
      <Route exact path='/login' component={LoginFormContainer} />
      <Route exact path='/trick' component={Trick}/>
    </Switch>
  </div>
);

export default App;
