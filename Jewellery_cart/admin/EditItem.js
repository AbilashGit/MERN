import { useDispatch } from "react-redux"
import { addProduct, editProduct } from "../actions/productActions";
import Additemform from "./Additemform"
import { useHistory } from "react-router";
import { Button } from "react-bootstrap";
import EditItemform from "./EditItemform";
export const Edititem=(props)=>{
    const dispatch=useDispatch();
    const product=props;
    let history=useHistory();
    const editnew=(product)=>{
        dispatch(editProduct(product));
    }
    
    return(
        <div>
             <h1>Hello</h1>
        </div>
    );
}