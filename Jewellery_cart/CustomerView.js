import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import {ProductsList} from "./components/ProductsList"
import { Productdetail } from "./components/Productdetail";
import { Bangles } from "./components/Bangles";
import { Antiques } from "./components/Antiques";
import Navbar from 'react-bootstrap/Navbar'
import { Container, Nav } from "react-bootstrap";
import { Chains } from "./components/Chains";
import { EarRings } from "./components/EarRings";
import { Rings } from "./components/Rings";
import { Silver } from "./components/Silver";
import { Necklace } from "./components/Necklace";
import { About } from "./components/About";
import { Contacts } from "./components/Contacts";
import { Link } from "react-router-dom";


const Links1=()=>{
    return(
<Navbar style={{backgroundColor:"red"}} expand="lg">
  <Navbar.Brand as={Link} to="/"><h3><b>HOME</b></h3></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/chains"><b style={{color:"darkred"}}>CHAINS</b></Nav.Link>
      <Nav.Link href="/necklace"><b style={{color:"darkred"}}>NECKLACE</b></Nav.Link>
      <Nav.Link href="/bangles"><b style={{color:"darkred"}}>BANGLES</b></Nav.Link>
      <Nav.Link href="/antiques"><b style={{color:"darkred"}}>ANTIQUES</b></Nav.Link>
      <Nav.Link href="/earrings"><b style={{color:"darkred"}}>EAR RINGS</b></Nav.Link>
      <Nav.Link href="/rings"><b style={{color:"darkred"}}>RINGS</b></Nav.Link>
      <Nav.Link href="/silver"><b style={{color:"darkred"}}>SILVER</b></Nav.Link>
      <Nav.Link href="/contacts"><b style={{color:"darkred"}}>CONTACTS</b></Nav.Link>
      <Nav.Link href="/about"><b style={{color:"darkred"}}>ABOUT</b></Nav.Link>
      </Nav>
  </Navbar.Collapse>
</Navbar>
    );
}
export default function CustomerView(){
    return(
       <div>
           <Router>
              <Header/>
              <Links1/>
              <Switch>
                  <Route path="/antiques" component={Antiques}/>
                  <Route path="/chains" component={Chains}/>
                  <Route path="/earrings" component={EarRings}/>
                  <Route path="/rings" component={Rings}/>
                  <Route path="/silver" component={Silver}/>
                  <Route path="/necklace" component={Necklace}/>
                  <Route path="/bangles" component={Bangles}/>
                  <Route path="/" exact component={ProductsList}></Route>
                  <Route path="/product/:id" component={Productdetail}></Route>
                  <Route path="/about" component={About}/>
                  <Route path="/contacts" component={Contacts}/>
                 <Route>Not found</Route>
             </Switch>
           </Router>
       </div>        
    )
}