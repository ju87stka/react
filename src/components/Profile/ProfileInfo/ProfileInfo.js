import React, {useDebugValue, useState} from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";

import ProfileStatusWithHooks from "./ProfileStatusWithHooks"
import userPhoto from "../../../assets/images/user1.png"
import ProfileBlockForm from "./ProfileBlockForm";

const ProfileInfo = (props) => {
    let [editMode,setEditMode]=useState(false)
    let [status,setStatus]=useState(props.status)
    if (!props.profile)

        return <Preloader/>

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    const onSubmit=   (formData)=>{

     props.saveProfile(formData).then(
            ()=>{

            setEditMode(false)


            })


    }

    return (
        <div>
            <div>
                {  /*<img
                src={'https://discoverportugal.ru/media/zoo/images/praia-do-barranco-das-canas_4d99f19e19702a07a9bb6191b30fa565.jpg'}>
            </img>*/}
            </div>
            <div className={classes.descriptionBlock}>

                <img src={props.profile.photos.large || userPhoto}/>
                <br/>
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

                {editMode ? <ProfileBlockForm initialValues={props.profile} onSubmit={onSubmit}
                    profile={props.profile}/>:
                 <ProfileBlock goToEditMode={()=>{setEditMode(true)}} {...props }/>
                }
                <ProfileStatusWithHooks updateStatus={props.updateStatus} status={props.status}/>
            </div>


        </div>

    );
}
const ProfileBlock=(props)=>{
   return <div>
       {props.isOwner && <div><button onClick={props.goToEditMode}>Edit</button></div>}
        <div>
            <b>Full name</b>: {props.profile.fullName}
        </div>

        <div>
            <b>Loooking for a job</b>: {props.profile.lookingForAJob ? "yes" : "no"}
        </div>
        {props.profile.lookingForAJob &&
        <div>
            <b>My skills</b>: {props.profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>About me</b>: {props.profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key=>{
            return  <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
        })}
        </div>
        <div>
            <b>About me</b>: {props.profile.aboutMe}
        </div>
        <div>
            <b>About me</b>: {props.profile.aboutMe}
        </div>

    </div>

}



const Contact =({contactTitle, contactValue})=>{
    return (
        <div className={classes.contact}>
            <b>{contactTitle}</b>: {contactValue}
        </div>

    )
}
export default ProfileInfo;