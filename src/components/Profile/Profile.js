import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {saveProfile} from "../../redux/profile-reducer";


const Profile = (props) => {

    return (

        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
                         saveProfile={props.saveProfile}
            />


            <MyPostsContainer
            />
        </div>

    );
}
export default Profile;