const UPDATE_NEW_MESSAGE_TEXT="UPDATE-NEW-MESSAGE-TEXT";
const ADD_MESSAGE="ADD-MESSAGE";

type  DialogType={
    id:number
    name:string
}
type  MessageType={
    id:number
    message:string
}
let initialState= {
     dialogs: [
        {id: 1, name: "Igor"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera"}
    ] as Array<DialogType>,

    messages: [
        {id: 1, message: "Hi1"},
        {id: 2, message: "Hi2"},
        {id: 3, message: "Hi3"},
        {id: 4, message: "Hi4"},
        {id: 5, message: "Hi5"},
        {id: 6, message: "Hi6"}
    ] as Array<MessageType>,
 };

export  type InitialStateType=typeof initialState
 const dialogsReducer=(state=initialState,action:any): InitialStateType=>{

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

type AddMessageActionCreatorType={
    type: typeof ADD_MESSAGE,
        newMessageText:string
}
export  const addMessageActionCreator=(newMessageBody:string): AddMessageActionCreatorType=>   {
    return{
        type: ADD_MESSAGE,
        newMessageText:newMessageBody
    }
}


export  default dialogsReducer;