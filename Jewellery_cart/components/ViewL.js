import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Listitems } from "./Listitems";


export const ViewL=()=>{
    const products=useSelector(state=>state.products);
    

    return(
        <div>
       <Container fluid>
       <Row lg="auto" md={3}>
       {products && products.map(antiques=>(
       <Listitems key={antiques.id} id={antiques.id} title={antiques.title} price={antiques.price} 
       description={antiques.description} category={antiques.category} image={antiques.image}/>
      ))}
        </Row>
       </Container>
       </div>
    );
}