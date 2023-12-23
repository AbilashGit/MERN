import { useSelector,useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { Container, Row,Image } from "react-bootstrap";
import {setProducts} from "../actions/productActions";
import JewelsApi from "../data/JewelsApi";
import '../App.css'; 
import { Listitems } from "./Listitems";

export const Antiques=()=>{
    const products=useSelector(state=>state.products);
    const dispatch=useDispatch();

 const fetchProducts =  () => {
    return JewelsApi.getallJewels().then(products=>{
    dispatch(setProducts(products));})
  };

  useEffect(() => {
    fetchProducts();
  }, []);
 
 return(<div>
     <h1>ANTIQUES</h1><br></br>
    <Container fluid>
    <Row xs={1} md={3}>
    {products && products.filter(product=>(product.category=="antiques")).map(antiques=>(
    <Listitems key={antiques.id} id={antiques.id} title={antiques.title} price={antiques.price} 
    description={antiques.description} category={antiques.category} image={antiques.image}/>
   ))}
     </Row>
    </Container>
    </div>) ;

}