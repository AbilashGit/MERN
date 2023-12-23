import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import BootstrapPage from './components/BootstrapPage';
import ReactstrapPage from './components/ReactstrapPage';
import ReactbootstrapPage from './components/ReactbootstrapPage';

class Links extends React.Component {
  render() {
    return (
      <nav>
        <NavLink exact activeClassName="active" to="/">Using bootstrap.css</NavLink>
        <NavLink activeClassName="active" to="/reactstrap">Using reactstrap</NavLink>
        <NavLink activeClassName="active" to="/reactbootstrap">Using react-bootstrap</NavLink>
      </nav>
    );
  }
}

export default class App extends React.Component {
  render() {
      return (
        <Router>
          <div>
            <Links/>
            <Switch>
              <Route exact path="/" component={BootstrapPage} />
              <Route path="/reactstrap" component={ReactstrapPage} />
              <Route path="/reactbootstrap" component={ReactbootstrapPage} />
            </Switch>
          </div>
        </Router>
      );
  }
}
