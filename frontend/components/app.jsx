import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from 'util/route_util';

import NavContainer from './nav/nav_container';
import SessionFormContainer from './session_form/session_form_container';
import FeedContainer from './feed/feed_container';
import ProfileContainer from './profile/profile_container';
import Dummy from './dummy';
import Footer from './footer';


const App = () => (
  <div className="App">
    <NavContainer />
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <ProtectedRoute exact path="/" component={FeedContainer} />
      <ProtectedRoute path='/api/user/:id' component={ProfileContainer} />
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
