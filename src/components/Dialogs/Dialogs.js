import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator,
} from "../../redux/dialog-reducer";

const Dialogs = (props) => {
    let  state=props.dialogsPage

    let dialogsElements=state.dialogs.
    map(          (dialog)=><DialogItem name={dialog.name} id={dialog.id}/>       );
    let messagesElement= state.messages.
    map((message) => <Message message={message.message}/>);
    let newMessageElement=React.createRef();

    let addMessage=() =>{
props.addMessage();
    }
    let onMessageChange=()=>{
        let text = newMessageElement.current.value;
props.updateNewMessageBody(text);
    }

    return (


        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>


            <div className={classes.messages}>
                {messagesElement}
                <div>
                    <textarea ref={newMessageElement}
                              onChange={onMessageChange}
                              value={props.dialogsPage.newMessageText}
                    />

                </div>
                <div>

                    <button onClick={addMessage}>Add Message</button>
                </div>
            </div>
        </div>



    );
}
export default Dialogs;
