import React from 'react';
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";


const Friends = (props) => {
    return(
<div>{props.name}</div>
    );
}



const Nav = (props) => {


    let  friends =props.sidebar.
    map( (p)=>                <Friends id={p.id} name={p.name}/>);









                    return (
                    <nav className={classes.nav}>
                        <div className={classes.item}>
                            <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink></div>
                        <div className={classes.item}>
                            <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink></div>
                        <div className={classes.item}>
                            <NavLink to="/users" activeClassName={classes.active}>Users</NavLink></div>
                        <div className={classes.item}>
                            <NavLink to="/news" activeClassName={classes.active}>News</NavLink></div>
                        <div className={classes.item}>
                            <NavLink to="/music" activeClassName={classes.active}>Music</NavLink></div>
                        <div className={classes.item}>
                            <NavLink to="settings" activeClassName={classes.active}>Settings</NavLink></div>
                        <div> Friends</div>
                        <div> {friends} </div>
                    </nav>



    );
}
export default Nav;
