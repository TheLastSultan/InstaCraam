import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavContainer from './nav/nav_container';
import SessionFormContainer from './session_form/session_form_container';
import Footer from './footer';
import { AuthRoute, ProtectedRoute } from 'util/route_util';

import Dummy from './dummy';

const App = () => (
  <div className="App">
    <NavContainer />
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <ProtectedRoute exact path="/" component={Dummy} />
    </Switch>
    <Footer />
  </div>
);

export default App;

// <Route exact path="/" component={SearchContainer} />
// <Route path="/benches/:benchId" component={BenchShowContainer} />









// <Switch>
//   <Route path="/" component={Splash} />
// </Switch>
