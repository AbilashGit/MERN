import { useSelector,useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { Col, Container, Row,Image, Card } from "react-bootstrap";
import {setProducts} from "../actions/productActions";
import JewelsApi from "../data/JewelsApi";
import '../App.css'; 
import { Link } from "react-router-dom";

export const Listitems=(props)=>{
  const id=props.id;

return(
  
    <Col md={4} key={props.id} className="Col">  
       <Link to={"/product/"+id}>
         
         <Card className='Card'>
          <div>
              <div>
                <div>
                  <div>
                    <img className='image1' src={props.image} alt={props.title} />
                  </div>
                  <div>
                    <div className='yellow'>{props.title}</div>
                    <div className='yellow'>$ {props.price}</div>
                    <div className='red'>{props.category}</div>
                  </div>
                </div>
              </div>
          </div>
          </Card>
        </Link>
    </Col>
 );
}