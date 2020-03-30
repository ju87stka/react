
const  ADD_POST="ADD-POST";
const  UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT';
const  SET_USER_PROFILE='SET_USER_PROFILE';


let initialState= {             posts: [
        {id: 1, message: "First post", likesCount: 12},
        {id: 2, message: "Second post", likesCount: 6},
    ],
    newPostText: "igor",
    profile: null



};

 const profileReducer=(state=initialState, action)=>{
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = "";

            return stateCopy;
        }



        case UPDATE_NEW_POST_TEXT : {
            let stateCopy = {...state};

            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case SET_USER_PROFILE : {

            return {...state, profile:action.profile};
        }

        default:
            return state;
    }





}
export  const addPostActionCreator=()=>   {
    return{
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator=(text)=>   {
    return{
        type:UPDATE_NEW_POST_TEXT,
        newText : text    }
}
export const setUserProfile=(profile)=>   {
    return{
        type:SET_USER_PROFILE,
        profile : profile    }
}

export default profileReducer;