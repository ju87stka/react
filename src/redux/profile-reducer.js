import {profileAPI, usersAPI} from "../api/Api";
import {followSuccess, toggleIsFollowing} from "./users-reducer";
import {stopSubmit} from "redux-form";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


let initialState = {
    posts: [
        {id: 1, message: "First post", likesCount: 12},
        {id: 2, message: "Second post", likesCount: 6},
    ],
    newPostText: "igor",
    profile: null,
    status: ""


};

const profileReducer = (state = initialState, action) => {
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

            return {...state, profile: action.profile};
        }
        case SET_STATUS : {

            return {...state, status: action.status};
        }
        case DELETE_POST : {

            return {...state, posts: state.posts.filter(p => p.id != action.postId)};
        }
        case SAVE_PHOTO_SUCCESS : {


            return {...state, profile: {...state.profile, photos: action.photos}};
        }

        default:
            return state;
    }


}
export const addPostActionCreator = (newPostElement) => {
    return {
        type: ADD_POST,
        newPostText: newPostElement
    }
}
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status: status
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
}
export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        postId: postId
    }
}
export const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos: photos
    }
}


export const getUserProfile = (userId) => {
    return async (dispatch) => {
        let response = await usersAPI.getMyId(userId)

        dispatch(setUserProfile(response.data));


    }
}
export const getStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId)

        dispatch(setStatus(response.data));


    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }

    }
}

export const savePhoto = (file) => {

    return async (dispatch) => {
        let response = await profileAPI.savePhoto(file)

        if (response.data.resultCode === 0) {

            dispatch(savePhotoSuccess(response.data.data.photos));

        }

    }
}
export const saveProfile = (profile) => {

    return async (dispatch,getState) => {
       const userId=getState().auf.userId
        let response = await profileAPI.saveProfile(profile)
debugger
        if (response.data.resultCode === 0) {

            dispatch(getUserProfile(userId));

        }
        else{
            let message=response.data.messages.length>0 ?response.data.messages[0]:"Some Error"
            dispatch(stopSubmit("edit-profile", {_error:message}))
            return Promise.reject({_error:message})
        }

    }
}




export default profileReducer;