import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminView  from "./AdminView";
import "./App.css";
import CustomerView from "./CustomerView";

export default function App(){
    return(
       <div>
           <Router>
               <Switch>
                   <Route path="/admin" component={AdminView}/>
                   <Route path="/" component={CustomerView}/>
               </Switch>
           </Router>
       </div>        
    )
}