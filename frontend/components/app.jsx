import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from 'util/route_util';

import Dummy from './dummy';

const App = () => (
  <div className="container">
    <nav>
      <GreetingContainer />
    </nav>
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <ProtectedRoute exact path="/" component={Dummy} />
    </Switch>
  </div>
);

export default App;

// <Route exact path="/" component={SearchContainer} />
// <Route path="/benches/:benchId" component={BenchShowContainer} />









// <Switch>
//   <Route path="/" component={Splash} />
// </Switch>
