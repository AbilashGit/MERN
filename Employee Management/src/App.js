import logo from './logo.svg';
import './App.css';
import {Home} from './Home';
import {Department} from './Department';
import {Employee} from './Employee';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        React front End
        <nav className = "navbar navbar-expand-sm bg-light navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/Home" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/Department" activeClassName="active"> Department</NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/Employee" activeClassName="active">Employee</NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/Home' component= {Home}/>
          <Route path='/Department' component= {Department}/>
          <Route path='/Employee' component= {Employee}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
