import React from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import Portals from './components/Portals'
import Home from './components/Home'
import Sports from './components/Sports'
import Weather from './components/Weather'
import './App.css'

const Links = () => (
        <nav>
          <NavLink exact activeClassName="active" to="/">Home</NavLink>
          <NavLink activeClassName="active" to="/sports">Sports</NavLink>
          <NavLink activeClassName="active" to="/weather">Weather</NavLink>
        </nav>
)

function App() {
    const handleClick = () => {
        console.log("Clicked");
    }
    return (
        <div className="App" onClick={() => handleClick()}>
            <Portals />  
            <Router>
                <Links />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/sports' component={Sports}/>
                    <Route path='/weather' component={Weather}/>
                </Switch>
            </Router>
                 
        </div>
    )
}

export default App
