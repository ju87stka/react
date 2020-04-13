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
 };

 const dialogsReducer=(state=initialState,action)=>{

     switch (action.type) {




case ADD_MESSAGE: {
    let newMessage = {
        id: 5,
        message: action.newMessageText
    };
    return {...state,
messages: [...state.messages, newMessage]




    };



}
default:
return state;
}
}

export  const addMessageActionCreator=(newMessageBody)=>   {
    return{
        type: ADD_MESSAGE,
        newMessageText:newMessageBody
    }
}


export  default dialogsReducer;