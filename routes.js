import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Blog from './components/Blog';

export default (
  <Route component={App}>
    <Route path='/' component={Blog} />
    <Route path='/blog' component={Blog} />
  </Route>
);