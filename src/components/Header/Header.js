import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header=(props)=> {
    return (
        <header className={classes.header}>
            <img src='https://www.proza.ru/pics/2018/10/03/1345.jpg'></img>
            <div className={classes.loginBlock}>
                {props.isAuth ? <div>{props.login}- <button onClick={props.logout} >Log out</button></div>
                : <NavLink  to={"/login"}>Login</NavLink>}


            </div>
        </header>
);
}
export default Header;
