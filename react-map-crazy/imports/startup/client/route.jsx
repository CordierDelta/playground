import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import HomeContainer from '../../ui/containers/home/home.jsx';

Meteor.startup(() =>{
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ HomeContainer } />
    </Router>, document.getElementById('root'))
});
