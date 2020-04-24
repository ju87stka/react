import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user1.png"
import {NavLink} from "react-router-dom";
import Paginators from "../Common/Paginators/Paginators";

let User = (props) => {

let u=props.u

    return( <div>
            <span>
                <div>
                     <NavLink to={"/profile/" + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                     </NavLink>
                </div>
                <div>
                    {u.followed ?

                        <button disabled={props.followingInProgress.some(id=> id===u.id)} onClick={() => {
                            props.unfollow(u.id)

                        }}>UnFollow</button> :


                        <button disabled={props.followingInProgress.some(id=> id===u.id)} onClick={() => {

                            props.follow(u.id)


                        }}>Follow</button>

                    }

                </div>
            </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>

                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>



                </span>

            </div>)



}


export default User;



