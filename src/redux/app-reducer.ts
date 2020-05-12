import {getInfoAuf} from "./auf-reducer";
const SET_INITIALIZED = "SET_INITIALIZED";

export type InitialStateType={
    initialized:boolean
}


let initialState:InitialStateType = {
    initialized:false,

};

const appReducer = (state: InitialStateType = initialState, action:any):InitialStateType => {
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
type InitialisedSuccessActionType={
    type: typeof SET_INITIALIZED
}
export const initialisedSuccess = () : InitialisedSuccessActionType=> {
    return {
        type: SET_INITIALIZED

    }
}
export const initializeApp=()=>{
    return (dispatch:any)=>{
       let dispatchResult=dispatch(getInfoAuf())
        Promise.all([dispatchResult]).then(()=>{
            dispatch(initialisedSuccess())
        })






    }}


export default appReducer;