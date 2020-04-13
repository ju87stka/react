import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile)

        return <Preloader/>

    return (
        <div>
            <div>
                {  /*<img
                src={'https://discoverportugal.ru/media/zoo/images/praia-do-barranco-das-canas_4d99f19e19702a07a9bb6191b30fa565.jpg'}>
            </img>*/}
            </div>
            <div className={classes.descriptionBlock} >
                <img src={props.profile.photos.large}/>
                <ProfileStatus updateStatus={props.updateStatus} status={props .status}/>
            </div>


        </div>

    );
}
export default ProfileInfo;