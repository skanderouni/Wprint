import React from "react";
import {Redirect,Route} from "react-router-dom";

function PrivateRouter({component: Component, ...reset}) {
    return(
        <Route 
        {...reset}
        component={(props) =>{
            const token = window.localStorage.getItem("userInfo");
            if(token) {
                return <Component {...props} />;
            }else {
                return <Redirect to= {"/login"} />;
            }
        }}
        />
    );
};




export default PrivateRouter;