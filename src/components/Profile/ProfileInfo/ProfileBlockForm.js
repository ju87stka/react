import React from "react";
import {Input, Textarea} from "../../Common/FormsControl/FormsControls";
import {required} from "../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import classes from './ProfileInfo.module.css';
import style from "../../Common/FormsControl/FormsControl.module.css";


const ProfileBlockForm=({handleSubmit,error, ...props})=>{
    debugger
    return        <form onSubmit={handleSubmit}>
             <div>
                <button>Save</button>

            </div>
        {error && <div className={style.formSummaryError}>
            {error}


        </div>}
            <div>
                <b>Full name</b>:
                <Field placeholder={"Full name "} name={"fullName"} component={Input}
                       validate={[]}/>
            </div>

            <div>
                <b>Loooking for a job</b>:
                <Field  name={"lookingForAJob"} component={Input} type={"checkbox"}
                       validate={[]}/>
            </div>

            <div>
                <b>My skills</b>:
                <Field placeholder={"My skills"} name={"lookingForAJobDescription"} component={Textarea}
                       validate={[]}/>

            </div>

            <div>
                <b>About me</b>:
                <Field placeholder={"About me"} name={"aboutMe"} component={Textarea}
                       validate={[]}/>

            </div>
            <div>
            <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key=>{
                return <div className={classes.contact}>
                    <b>{key} :</b>
                        { <Field  placeholder={key} name={"contacts."+key} component={Input}
                                 />}
                    </div>



            })}
            </div>


        </form>



}
const ProfileBlockFormReduxForm=reduxForm({form:"edit-profile"})(ProfileBlockForm)
export default ProfileBlockFormReduxForm