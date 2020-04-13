import {profileAPI, usersAPI} from "../api/Api";
import {followSuccess, toggleIsFollowing} from "./users-reducer";

const  ADD_POST="ADD-POST";
const  UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT';
const  SET_USER_PROFILE='SET_USER_PROFILE';
const  SET_STATUS='SET_STATUS';


let initialState= {             posts: [
        {id: 1, message: "First post", likesCount: 12},
        {id: 2, message: "Second post", likesCount: 6},
    ],
    newPostText: "igor",
    profile: null,
    status:""



};

 const profileReducer=(state=initialState, action)=>{
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);

            return stateCopy;
        }




        case SET_USER_PROFILE : {

            return {...state, profile:action.profile};
        }
        case SET_STATUS : {

            return {...state, status:action.status};
        }

        default:
            return state;
    }





}
export  const addPostActionCreator=(newPostElement)=>   {
    return{
        type: ADD_POST,
        newPostText:newPostElement
    }
}
export  const setStatus=(status)=>   {
    return{
        type: SET_STATUS,
        status:status
    }
}

export const setUserProfile=(profile)=>   {
    return{
        type:SET_USER_PROFILE,
        profile : profile    }
}

export const getUserProfile=(userId)=>{
    return (dispatch)=>{
        usersAPI.getMyId(userId).then(response => {

            dispatch(setUserProfile(response.data));

        })




    }}
export const getStatus=(userId)=>{
    return (dispatch)=> {
        profileAPI.getStatus(userId).then(response => {

            dispatch(setStatus(response.data));

        })
    }}
        export const updateStatus=(status)=>{
            return (dispatch)=> {
                profileAPI.updateStatus(status).then(response => {
if(response.data.resultCode===0) {
    dispatch(setStatus(status));
}
                })
            }}

export default profileReducer;