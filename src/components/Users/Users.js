import React from "react";

import Paginators from "../Common/Paginators/Paginators";
import User from "./User";

let Users = (props) => {

    return <div>
        <Paginators currentPage={props.currentPage} totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
                    onPageChanged={props.onPageChanged}/>
                    <div>
        {
            props.users.map(u => <User u={u} key={u.id} followingInProgress={props.followingInProgress}
                follow={props.follow} unfollow={props.unfollow}

            /> )
        }
    </div>
    </div>

}


export default Users;



