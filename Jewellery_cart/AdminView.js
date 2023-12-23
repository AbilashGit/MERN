import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from 'react-bootstrap/Navbar'
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {AProductsList} from "./admin/AProductsList";
import { Additem } from "./admin/AddItem";

const Links1=()=>{
    return(
<Navbar fixed="" style={{backgroundColor:"red"}} expand="lg">
  <Navbar.Brand as={Link} to="/admin/all"><h3><b>HOME</b></h3></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/admin/add"><b style={{color:"darkred"}}>ADD ITEM</b></Nav.Link>
      </Nav>
  </Navbar.Collapse>
</Navbar>
    );
}
export default function AdminView(){
    return(
       <div>
           <Router>
              <h1 style={{backgroundColor:"lightblue",textAlign:"center"}}>ADMIN PHASE</h1>
              <Links1/>
              <Switch>
                 <Route path="/admin/all" exact component={AProductsList}/>
                 <Route path="/admin/add" component={Additem}/>
             </Switch>
           </Router>
       </div>        
    )
}