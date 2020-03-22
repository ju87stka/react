const UPDATE_NEW_MESSAGE_TEXT="UPDATE-NEW-MESSAGE-TEXT";
const ADD_MESSAGE="ADD-MESSAGE";

let initialState= {
     dialogs: [
        {id: 1, name: "Igor"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera"}
    ],

    messages: [
        {id: 1, message: "Hi1"},
        {id: 2, message: "Hi2"},
        {id: 3, message: "Hi3"},
        {id: 4, message: "Hi4"},
        {id: 5, message: "Hi5"},
        {id: 6, message: "Hi6"}
    ],
    newMessageText: "igor"
 };

 const dialogsReducer=(state=initialState,action)=>{

     switch (action.type) {

         case UPDATE_NEW_MESSAGE_TEXT :{
             return {...state,

                 newMessageText:action.newText

             };

         }


case ADD_MESSAGE: {
    let newMessage = {
        id: 5,
        message: state.newMessageText
    };
    return {...state,
        newMessageText : "1",
messages: [...state.messages, newMessage]




    };



}
default:
return state;
}
}

export  const addMessageActionCreator=()=>   {
    return{
        type: ADD_MESSAGE
    }
}
export const updateNewMessageTextActionCreator=(text)=>   {
    return{
        type:UPDATE_NEW_MESSAGE_TEXT,
        newText : text    }
}

export  default dialogsReducer;