import {
     USER_LOGIN_FAIL,
     USER_LOGIN_REQUEST,
     USER_LOGIN_SUCCESS,
     USER_LOGOUT ,
     USER_LIST_FAIL,
     USER_LIST_REQUEST,
     USER_LIST_SUCCESS,
     USER_LIST_RESET 
        } from "../Constants/UserConstants";



// login state
export const userLoginReducer = (state = {} , action ) => {
    switch (action.type){
        case USER_LOGIN_REQUEST :
            return{loading: true 
            };

            case USER_LOGIN_SUCCESS :
            return{ loading: false ,userInfo: action.payload 
            };

            case USER_LOGIN_FAIL :
            return{ loading: false , error: action.payload
            };
            case USER_LOGOUT :
                return{};
            default: 
            return state ;
    }
};


// all users    
 export const userListReducer = (state = { users :[]} , action ) => {
    switch (action.type){
        case USER_LIST_REQUEST :
            return{loading: true ,users:[]
            };

            case USER_LIST_SUCCESS :
               

            return{ loading: false ,
                users: action.payload.users,
                pages:action.payload.pages,
                page:action.payload.page  
            };

            case USER_LIST_FAIL :
            return{ loading: false , error: action.payload
            };
           
            default: 
            return state ;
    }
};






