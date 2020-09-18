import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './views/Home';

class RouterCmp extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default RouterCmp;
