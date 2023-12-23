import * as types from "../constants/actionTypes";
import JewelsApi from "../data/JewelsApi";


export const allSet=(products)=>{
    return {
        type: types.SET_PRODUCTS,
        payload: products
    };
};

export const setProducts=()=>{
    return function(dispatch) {
        return JewelsApi.getallJewels().then(
            products=>{dispatch(allSet(products))})
            .catch(error => {
                throw(error);
              });
    };
};

export const productAdded=(product)=>{
    return {
        type: types.ADD_PRODUCT,
        payload: product
    };
}

export const productDeleted=(id)=>{
    return {
        type: types.DELETE_PRODUCT,
        payload: id
    };
}
export const productedited=(product)=>{
    return {
        type: types.EDIT_PRODUCT,
        payload: product
    };
}

export const addProduct=(product)=>{
    return function(dispatch) {
        return JewelsApi.addJewel(product).then(
            product=>{dispatch(productAdded(product))})
            .catch(error => {
                throw(error);
              });
    };
};

export const editProduct=(product)=>{
    return function(dispatch) {
        return JewelsApi.addJewel(product).then(
            product=>{dispatch(productAdded(product))})
            .catch(error => {
                throw(error);
              });
    };
};

export const deleteProduct=(id)=>{
    return function(dispatch) {
        return JewelsApi.deleteJewel(id).then(
            product=>{dispatch(productDeleted(id))})
            .catch(error => {
                throw(error);
              });
    }
}
