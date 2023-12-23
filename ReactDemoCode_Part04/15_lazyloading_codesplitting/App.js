import React from 'react';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import AboutPage from './AboutPage';
// import AllCommentsPage from './AllCommentsPage';
const AllCommentsPage = lazy(() => import('./AllCommentsPage'));

class Links extends React.Component {
  render() {
    return (
      <nav>
        <NavLink exact activeClassName="active" to="/">About</NavLink>
        <NavLink activeClassName="active" to="/comments">Comments</NavLink>
      </nav>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Links />
            <Switch>
              <Route exact path="/" component={AboutPage} />
              <Route path="/comments" 
                render={() => (<Suspense fallback={<h1>Loading...</h1>}><AllCommentsPage /></Suspense>)}
              />
            </Switch>
        </div>
      </Router>
    );
  }
}
