import React from 'react';
import { ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import SpotsContainer from './spots/spots_container';
import SpotContainer from './spots/spot_container';
import ProfileContainer from './profile/profile_container';

const App = () => (
  <div>
    <NavBarContainer  />
    <div >
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/spots" component={SpotsContainer} />
      <Route path="/spot/:id" component={SpotContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
    </Switch>
    </div>
  </div>
);

export default App;