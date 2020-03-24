import React from "react";
import  styles from "./users.module.css";
import * as axios from "axios";
import  userPhoto from "../../assets/images/user.png"
let  Users =(props)=>{
    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
            props.setUsers(response.data.items);


        });

   /* props.setUsers(
        [
        {
            id: 1,
            photoUrl:"https://i5.stat01.com/1/9844/98430164/afacdb/kotik-basik-bebi-v-pizhamke.jpg",

            followed: false,
            fullName: "Dmitriy",
            status: "Status 1",
            location: {city: "Minsk", country: "Belarus"}
        },
        {id: 2,             photoUrl:"https://i5.stat01.com/1/9844/98430164/afacdb/kotik-basik-bebi-v-pizhamke.jpg",
            followed: false, fullName: "Sasha", status: "Status 2", location: {city: "Moscow", country: "Russia"}},
        {
            id: 3,
            photoUrl:"https://i5.stat01.com/1/9844/98430164/afacdb/kotik-basik-bebi-v-pizhamke.jpg",

            followed: true,
            fullName: "Andrew",
            status: "Status 3   ",
            location: {city: "Kiev", country: "Ukraine"}
        },
        {
            id: 4,
            photoUrl:"https://i5.stat01.com/1/9844/98430164/afacdb/kotik-basik-bebi-v-pizhamke.jpg",

            followed: false,
            fullName: "Dmitriy",
            status: "Status 1",
            location: {city: "Minsk", country: "Belarus"}
        },


    ]
    )*/
    }
    return <div>
        {
            props.users.map(u=> <div key={u.id}>
            <span>
                <div>

                    <img src={u.photos.small !=null ? u.photos.small : userPhoto} className={styles.userPhoto}/>

                </div>
                <div>
                    {u.followed ? <button onClick={()=>{props.unfollow(u.id)}}>UnFollow</button>:
                        <button onClick={()=>{props.follow(u.id)}}>Follow</button>

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
    </div>

}
export  default  Users;
