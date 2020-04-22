import {authAPI, usersAPI} from "../api/Api";
import {stopSubmit} from "redux-form"
import {getInfoAuf} from "./auf-reducer";
const SET_INITIALIZED = "SET_INITIALIZED";



let initialState = {
    initialized:false,

};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case  SET_INITIALIZED :
            return {
              ...state,
                initialized:true

            };
            default:


            return state;
    }


}
export const initialisedSuccess = () => {
    return {
        type: SET_INITIALIZED

    }
}
export const initializeApp=()=>{
    return (dispatch)=>{
       let dispatchResult=dispatch(getInfoAuf())
        Promise.all([dispatchResult]).then(()=>{
            dispatch(initialisedSuccess())
        })






    }}


export default appReducer;