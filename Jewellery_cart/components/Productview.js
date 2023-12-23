import { useSelector } from "react-redux";
import Row from 'react-bootstrap/Row'
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import '../App.css';
import { Listitems } from "./Listitems";

export const Productview=()=>{
    const products=useSelector(state=>state.products);
    const renderList = products && products.map((product) => {
        const { id, title, image, price, category,description } = product;
        return (
    
            <Listitems key={id} id={id} title={title} price={price} 
            description={description} category={category} image={image}/>
       
        );
      });
      return <>
      <Container><Row >{renderList}</Row></Container></>;
};    