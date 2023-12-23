import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {setProducts} from "../actions/productActions";
import JewelsApi from "../data/JewelsApi";
import { Aproductview } from "./Aproductview";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

export const Listitem=()=>{
    const products=useSelector(state=>state.products);
    const dispatch=useDispatch();
     
    const fetchProducts =  () => {
        return JewelsApi.getallJewels().then(products=>{
        dispatch(setProducts(products));})
      };
    
      useEffect(() => {
        fetchProducts();
      }, []);
       
     console.log(products);
    
      return (<div>
          <Container fluid>
          <Row xs={1} md={3}>
         <Aproductview/> </Row>
          </Container>
          </div>) ;
    };