import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"
import { setProducts } from "../actions/productActions";
import JewelsApi from "../data/JewelsApi";
import { Aproductview } from "./Aproductview";

export const AProductsList=()=>{
    const products=useSelector(state=>state.products);
    const dispatch=useDispatch();
    const fetchProducts =  () => {
      return dispatch(setProducts());
    };
    
      useEffect(() => {
        fetchProducts();
      }, []);
      return(
          <div>
                  <Aproductview/>          
          </div>
      );
}
    


    

