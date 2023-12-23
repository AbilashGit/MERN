import { useSelector,useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row,Image } from "react-bootstrap";
import {setProducts} from "../actions/productActions";
import JewelsApi from "../data/JewelsApi";
import '../App.css'; 

export const Productdetail=()=>{
    const products=useSelector(state=>state.products);
    const dispatch=useDispatch();
    const { id }=useParams();

 const fetchProducts =  () => {
    return JewelsApi.getallJewels().then(products=>{
    dispatch(setProducts(products));})
  };

  useEffect(() => {
    fetchProducts();
  }, []);
 
 return(
     <div>
           <Container  >
         <Row>
    {products && products.filter(product=>(product.id==id)).map(selectedproduct=>(
     <div style={{alignContent:'center'}} key={id}>
       
       <Col style={{backgroundColor:"green",textAlign:"center",padding:10}}>
       <Image src={selectedproduct.image} style={{maxHeight:600}}fluid/>
           <h1>{selectedproduct.title}</h1>
           <h2>
           <a>${selectedproduct.price}</a>
           </h2>
           <h3>{selectedproduct.category}</h3>
           <p>{selectedproduct.description}</p>
           </Col>
         
     </div>     
    ))}
      </Row>  
           </Container>
    </div>
 );
}