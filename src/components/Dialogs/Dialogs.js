import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink, Redirect} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormsControl/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import AddMessageForm from "./AddMessageForm/AddMessageForm";



const Dialogs = (props) => {
    let  state=props.dialogsPage

    let dialogsElements=state.dialogs.
    map(          (dialog)=><DialogItem name={dialog.name} id={dialog.id}/>       );
    let messagesElement= state.messages.
    map((message) => <Message message={message.message}/>);
    let newMessageElement=React.createRef();



    let addNewMessage=(values) =>{
props.addMessage(values.newMessageBody)
    }




    if(!props.isAuth) return  <Redirect to={"/login"}/>


    return (


        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>


            <div className={classes.messages}>
                {messagesElement}

                <AddMessageForm onSubmit={addNewMessage} />

            </div>
        </div>




    );
}

export default Dialogs;
