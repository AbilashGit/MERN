import axios from "axios";

export default class JewelsApi{
    static getallJewels(){
        return axios.get("http://localhost:3001/products")
        .then(res=>res.data).catch(error => {
            throw(error);
        });
    }
    static addJewel(product){
        return axios.post("http://localhost:3001/products",product)
        .then(res => res.data);
    }
    static deleteJewel(id){
        return axios.delete("http://localhost:3001/products/"+id)
        .then(res => res.data);
    }
    static editJewel(product){
        return axios.put("http://localhost:3001/products",product)
        .then(res => res.data);
    }
}






