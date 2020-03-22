import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <div className={classes.item}>
                <img src={"https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg"}>
                </img></div>
            <NavLink to={"/dialogs/" + props.id}> {props.name}</NavLink>
        </div>

    )

}

export default DialogItem;
