import { useDispatch } from "react-redux"
import { addProduct } from "../actions/productActions";
import Additemform from "./Additemform"
import { useHistory } from "react-router";
import { Button } from "react-bootstrap";

export const Additem=()=>{
    const dispatch=useDispatch();
    let history=useHistory();
    const addnew=(product)=>{
        dispatch(addProduct(product));
    }
    return(
        <div>
            <Button onClick={()=>history.push("\all")}>BACK</Button>
            <Additemform onSave={addnew}/>
        </div>
    );
}