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


class UsersAPIComponent extends React.Component {


    componentDidMount() {

        this.props.getUsers(this.currentPage, this.props.pageSize)


    }

    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize)



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
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress

    }
};





export  default compose(
    connect (mapStateToProps,
        { follow,
            unfollow,
            setCurrentPage,
            toggleIsFollowing,
            getUsers: getUsersThunkCreator
        }),
        withAuthRedirect
)(UsersAPIComponent)





