import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div><img
                src={'https://discoverportugal.ru/media/zoo/images/praia-do-barranco-das-canas_4d99f19e19702a07a9bb6191b30fa565.jpg'}>
            </img></div>
            <div className={classes.descriptionBlock} >
                Ava
            </div>


        </div>

    );
}
export default ProfileInfo;