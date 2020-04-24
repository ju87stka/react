import {authAPI, usersAPI} from "../api/Api";
import {stopSubmit} from "redux-form"
const SET_USER_DATA = "auf/SET_USER_DATA";



let initialState = {
    userId:null,
    email:null,
    login:null,
    isFetching: false,
    isAuth:false
};

const aufReducer = (state = initialState, action) => {
    switch (action.type) {
        case  SET_USER_DATA :
            return {
              ...state,
                ...action.payload



            };
            default:


            return state;
    }


}
export const setAuthUserData = (userId,email,login,isAuth) => {
    return {
        type: SET_USER_DATA,
        payload:{userId,email,login,isAuth}
    }
}
export const getInfoAuf=()=>
     async (dispatch)=>{
         let response = await authAPI.isAuthMe()

            if(response.data.resultCode===0){
                let {id, login, email}=response.data.data;
                dispatch(setAuthUserData(id,email,login,true))
            }






    }

export const login=(email,password,rememberMe)=> async (dispatch)=>{

     let response= await  authAPI.login(email,password,rememberMe)
    if(response.data.resultCode===0){
                dispatch(getInfoAuf())
            }else{
                let message=response.data.messages.length>0 ?response.data.messages[0]:"Some Error"
                dispatch(stopSubmit("login", {_error:message}))

            }






    }
export const logout=()=>{
    return async (dispatch)=>{
       let response= await authAPI.logout()

            if(response.data.resultCode===0){
                dispatch(setAuthUserData(null,null,null,false))
            }





    }}

export default aufReducer;