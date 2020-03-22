import React from 'react';

import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator,
} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps=(state)=>{
    return {
dialogsPage:state.dialogsPage
}
}
let mapDispatchToProps=(dispatch)=>{
    return{
        updateNewMessageBody:(text)=>{
            dispatch(updateNewMessageTextActionCreator(text));

        },
        addMessage:()=>{
            dispatch(addMessageActionCreator());

        }

    }
}


const DialogsContainer=connect(mapStateToProps,mapDispatchToProps)(Dialogs);


export default DialogsContainer;
