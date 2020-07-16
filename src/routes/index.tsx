import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Posts from '../pages/Posts';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Posts}/>
  </Switch>
)

export default Routes;
