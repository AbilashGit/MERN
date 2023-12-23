import { useSelector,useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { Col, Container, Row,Image, Card } from "react-bootstrap";
import {deleteProduct, setProducts} from "../actions/productActions";
import '../App.css'; 
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Edititem } from "./EditItem";

export const AListitems=(props)=>{
  const id=props.id;
  const product=props;
  const dispatch=useDispatch();
  const handledelete=()=>{
  if(window.confirm("Are you sure you want to delete?"));
        dispatch(deleteProduct(id));
        dispatch(setProducts());
  }


return(
    <Col md={4} key={props.id} className="Col">  
         
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
                    <div className="yellow">
                    <Button variant="info" onClick={handledelete}>Delete</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                  </div>
                </div>
              </div>
          </div>
          </Card>
    </Col>
 );
}