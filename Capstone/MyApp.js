import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch,Link,NavLink} from 'react-router-dom';
import IssuesListing from './components/IssuesListing';


class Links extends React.Component {
  render() {
    return (
      <nav>
        <NavLink exact activeClassName="active" to="/about">About</NavLink> &nbsp; &nbsp;
        <NavLink  to="/IssuesComponent" activeClassName="active">Issues</NavLink>
      </nav>
    );
  }
}

export default class MyApp extends React.Component {
  render() {
      return (
        <Router>
          <div>
            <Links/>
            <Switch>
            <Route path="/about" render={() => <h2>About:This application is used to track the status of the issues raised(Using Redux)</h2> } />
              <Route exact path="/IssuesComponent" component={IssuesListing}/>
              <Redirect from="/" to="/about" />
              <Redirect from="/about-wipro" to="/about" />
            </Switch>
          </div>
        </Router>
      );
  }
}