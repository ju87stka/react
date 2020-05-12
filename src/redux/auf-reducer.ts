import {authAPI, securityAPI, usersAPI} from "../api/Api";
import {stopSubmit} from "redux-form"
const SET_USER_DATA = "auf/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "auf/GET_CAPTCHA_URL_SUCCESS";



let initialState = {
    userId:null as number|null,
    email:null as string|null,
    login:null as string|null,
    isFetching: false as boolean,
    isAuth:false as boolean,
    captchaUrl:null as string|null
};
export type InitialStateType=typeof initialState


const aufReducer = (state:InitialStateType = initialState, action:any):InitialStateType => {
    switch (action.type) {
        case  SET_USER_DATA :
        case  GET_CAPTCHA_URL_SUCCESS :
            return {

              ...state,
                ...action.payload
            };


            default:


            return state;
    }


}
type SetAuthUserDataActionPayloadType={
    userId:number|null,
    email:string|null,
    login:string|null,
    isAuth:boolean|null
}
type SetAuthUserDataActionType={
    type:typeof SET_USER_DATA,
    payload:SetAuthUserDataActionPayloadType
}
export const setAuthUserData = (userId:number|null ,email:string|null ,login:string|null ,isAuth:boolean|null ): SetAuthUserDataActionType=> {
    return {
        type: SET_USER_DATA,
        payload:{userId,email,login,isAuth}
    }
}


type GetCaptchaUrlSuccessActionType={
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    payload:{captchaUrl:string}
}

export const getCaptchaUrlSuccess = (captchaUrl:string):GetCaptchaUrlSuccessActionType => {
    return {
        type: GET_CAPTCHA_URL_SUCCESS,
        payload:{captchaUrl}
    }
}



export const getInfoAuf=()=>
     async (dispatch:any)=>{
         let response = await authAPI.isAuthMe()

            if(response.data.resultCode===0){
                let {id, login, email}=response.data.data;
                dispatch(setAuthUserData(id,email,login,true))
            }






    }

export const login=(email:string,password:string,rememberMe:boolean,captcha:string)=> async (dispatch:any)=>{

    let response= await  authAPI.login(email,password,rememberMe,captcha)
    if(response.data.resultCode===0){
        dispatch(getInfoAuf())


    }else{
        if(response.data.resultCode===10) {
            dispatch(getCaptchaUrl())
        }
        let message=response.data.messages.length>0 ?response.data.messages[0]:"Some Error"
        dispatch(stopSubmit("login", {_error:message}))

    }
}
export const getCaptchaUrl=()=> async (dispatch:any)=>{

    let response= await  securityAPI.getCaptchaUrl()
const captchaUrl=response.data.url
        dispatch(getCaptchaUrlSuccess(captchaUrl))


}
export const logout=()=>{
    return async (dispatch:any)=>{
       let response= await authAPI.logout()

            if(response.data.resultCode===0){
                dispatch(setAuthUserData(null,null,null,false))
            }





    }}

export default aufReducer;