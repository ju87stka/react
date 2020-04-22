import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsersThunkCreator,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, toggleIsFollowing,
    unfollow
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {usersAPI} from "../../api/Api";
import {compose} from "redux";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers
} from "../../redux/users-selectors";


class UsersAPIComponent extends React.Component {


    componentDidMount() {

        this.props.requestUsers(this.currentPage, this.props.pageSize)


    }

    onPageChanged = (pageNumber) => {

        this.props.requestUsers(pageNumber, this.props.pageSize)



    }

    render() {


        return <>

            {this.props.isFetching ? <Preloader/>: null}

            <Users    totalUsersCount={this.props.totalUsersCount}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}
                         onPageChanged={this.onPageChanged}
                         users={this.props.users}
                         follow={this.props.follow}
                         unfollow={this.props.unfollow}
                      followingInProgress={this.props.followingInProgress}


                                />
        </>

    }
}


let  mapStateToProps =(state)=>{
    return{
        users:getUsers(state),
        pageSize:getPageSize(state),
        totalUsersCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress:getFollowingInProgress(state)

    }
};





export  default compose(
    connect (mapStateToProps,
        { follow,
            unfollow,
            setCurrentPage,
            toggleIsFollowing,
            requestUsers: getUsersThunkCreator
        }),
        withAuthRedirect
)(UsersAPIComponent)





