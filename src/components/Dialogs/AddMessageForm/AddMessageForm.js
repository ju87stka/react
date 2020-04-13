import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../Common/FormsControl/FormsControls";
import React from "react";

const maxLenght50=maxLengthCreator(50)

const  AddMessageForm=(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>

            <div>
                <div>
                    <Field component={Textarea} name="newMessageBody" placeholder ="Enter your message"

                           validate={[required,maxLenght50]}
                    />


                </div>
                <div>

                    <button >Add Message</button>
                </div>
            </div>
        </form>
    )
}
export  default reduxForm({
    form:"dialogAddMessageForm"
})(AddMessageForm)