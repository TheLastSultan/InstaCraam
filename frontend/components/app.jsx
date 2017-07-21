import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from 'util/route_util';

import NavContainer from './nav/nav_container';
import SessionFormContainer from './session_form/session_form_container';
import FeedContainer from './feed/feed_container';
import ExploreContainer from './explore/explore_container';
import { ProfileContainer, EditProfileContainer } from './profile/profile_container';
import Dummy from './dummy';
import Footer from './footer';


const App = () => (
  <div className="App">
    <NavContainer />
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <ProtectedRoute exact path="/" component={FeedContainer} />
      <ProtectedRoute exact path='/user/:id' component={ProfileContainer} />
      <ProtectedRoute exact path='/user/:id/edit' component={EditProfileContainer} />
      <ProtectedRoute exact path='/explore' component={ExploreContainer} />
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
