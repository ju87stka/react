import {usersAPI} from "../api/Api";
import {updateObjectInArray} from "../utils/objects-helper";

const FOLLOW = "FOLLOW";
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS= "SET_USERS"
const SET_CURRENT_PAGE="SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT="SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING ="TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING ="TOGGLE_IS_FOLLOWING"


let initialState = {
    users:[],
    pageSize:5,
    totalUsersCount:0,
    currentPage:1,
    isFetching: true,
    followingInProgress:[]

};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case  FOLLOW :
            return {
                ...state,
                users:updateObjectInArray(state.users,action.userId, "id",{followed: true})

            };
        case  UNFOLLOW :
            return {
                ...state,
                users:updateObjectInArray(state.users,action.userId, "id",{followed: false})

            };
        case  SET_USERS :
            return {
                ...state,
              users: action.users
            };

        case  SET_CURRENT_PAGE :
            return {
                ...state,
                currentPage:action.currentPage
            };
        case  SET_TOTAL_USERS_COUNT :
            return {
                ...state,
                totalUsersCount:action.count
            };
        case  TOGGLE_IS_FETCHING :
            return {
                ...state,
                isFetching:action.isFetching
            };
        case  TOGGLE_IS_FOLLOWING :
            return {
                ...state,

                followingInProgress:action.isFetching
                    ?[...state.followingInProgress, action.userId]
                    :state.followingInProgress.filter(id=>id!=action.userId)
            };


        default:
            return state;
    }


}
export const followSuccess = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unfollowSuccess = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}
export const setUsers= (users) => {
    return {
        type: SET_USERS,
        users
    }
}
export const setCurrentPage = (currentPage ) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}
    export const setTotalUsersCount = (totalUsersCount ) => {
        return {
            type: SET_TOTAL_USERS_COUNT,
            count: totalUsersCount
        }

    }
        export const toggleIsFetching = (isFetching ) => {
            return {
                type: TOGGLE_IS_FETCHING,
                isFetching:isFetching
            }}

            export const toggleIsFollowing = (isFetching,userId ) => {
                return {
                    type: TOGGLE_IS_FOLLOWING,
                    isFetching:isFetching,
                    userId:userId
                }


}
export const getUsersThunkCreator=(currentPage,pageSize)=>{
   return async(dispatch)=>{


   dispatch( toggleIsFetching(true));
       dispatch( setCurrentPage(currentPage));

       let data= await usersAPI.getUsers(currentPage,pageSize)

        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
       dispatch( toggleIsFetching(false));



   }}


    const followUnfollowFlow= async (dispatch, userId, apiMethod,actionCreator)=>{

        dispatch(toggleIsFollowing(true,userId))
        let response=await  apiMethod(userId)
        if (response.data.resultCode == 0) {
            dispatch(actionCreator(userId))
        }
        dispatch(toggleIsFollowing(false,userId))

    }

export const follow=(userId,pageSize)=>{
    return async (dispatch)=>{
        let apiMethod= usersAPI.follow.bind(usersAPI)
         let actionCreator=followSuccess
        followUnfollowFlow(dispatch,userId,apiMethod,actionCreator)

            }}

export const unfollow=(userId,pageSize)=>{
    return async (dispatch)=>{
        let apiMethod= usersAPI.unfollow.bind(usersAPI)
        let actionCreator=unfollowSuccess
        followUnfollowFlow(dispatch,userId,apiMethod,actionCreator)

    }}

export default usersReducer;