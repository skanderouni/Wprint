import {CART_CLEAR_ITEMS, CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING_ADDRESS } from "../Constants/CartConstants";
import axios from "axios";

// add item to cart
export const addToCart = ( id,qty) => async (dispatch,getState) => {
    const { data } = await axios.get('/api/products/'+id+'');

        dispatch({
            type:CART_ADD_ITEM,
            payload:{
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                qty,
            },
        });
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems));


};

//remove product from cart 
export const removefromcart = (id) => (dispatch,getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload : id,
    });
    localStorage.setItem("cartItem", JSON.stringify(getState().cart.cartItems));
};
//remove product from cart 
export const clearcart = () => (dispatch) => {
    dispatch({
        type: CART_CLEAR_ITEMS,
        //payload : id,
    });
    localStorage.removeItem("cartItems");
    
};


//save shipping address 
export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload : data,
    });
    localStorage.setItem("shippingAddress", JSON.stringify(data));
};