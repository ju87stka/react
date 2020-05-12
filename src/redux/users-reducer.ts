import {usersAPI} from "../api/Api";
import {updateObjectInArray} from "../utils/objects-helper";
import {PhotosType, UserType} from "../Types/types";

const FOLLOW = "FOLLOW";
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS= "SET_USERS"
const SET_CURRENT_PAGE="SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT="SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING ="TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING ="TOGGLE_IS_FOLLOWING"



let initialState = {
    users:[] as Array<UserType>,
    pageSize:5 as number,
    totalUsersCount:0 as number,
    currentPage:1 as number,
    isFetching: true as boolean,
    followingInProgress:[] as Array<number>

};
type InitialStateType=typeof initialState

const usersReducer = (state = initialState, action:any):InitialStateType => {
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
type FollowSuccessType={
    type: typeof FOLLOW,
    userId:number
}
export const followSuccess = (userId:number):FollowSuccessType => {
    return {
        type: FOLLOW,
        userId
    }
}
type UnfollowSuccessType={
    type: typeof UNFOLLOW,
    userId:number
}
export const unfollowSuccess = (userId:number):UnfollowSuccessType => {
    return {
        type: UNFOLLOW,
        userId
    }
}
type SetUsersType={
    type: typeof SET_USERS,
    users:Array<UserType>
}
export const setUsers= (users: Array<UserType>):SetUsersType => {
    return {
        type: SET_USERS,
        users
    }
}

type SetCurrentPageType={
    type:typeof SET_CURRENT_PAGE,
    currentPage:number
}
export const setCurrentPage = (currentPage :number ) :SetCurrentPageType=> {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}
type SetTotalUsersCountType={
    type: typeof SET_TOTAL_USERS_COUNT,
    count: number
}
    export const setTotalUsersCount = (totalUsersCount :number ):SetTotalUsersCountType => {
        return {
            type: SET_TOTAL_USERS_COUNT,
            count: totalUsersCount
        }

    }
    type ToggleIsFetchingType={
        type: typeof TOGGLE_IS_FETCHING,
        isFetching:boolean
    }
        export const toggleIsFetching = (isFetching :boolean):ToggleIsFetchingType => {
            return {
                type: TOGGLE_IS_FETCHING,
                isFetching:isFetching
            }}
type ToggleIsFollowingType={
    type:typeof TOGGLE_IS_FOLLOWING,
    isFetching:boolean,
    userId:number
}
            export const toggleIsFollowing = (isFetching :boolean,userId:number ):ToggleIsFollowingType => {
                return {
                    type: TOGGLE_IS_FOLLOWING,
                    isFetching:isFetching,
                    userId:userId
                }


}
export const getUsersThunkCreator=(currentPage:number,pageSize:number)=>{
   return async(dispatch:any)=>{


   dispatch( toggleIsFetching(true));
       dispatch( setCurrentPage(currentPage));

       let data= await usersAPI.getUsers(currentPage,pageSize)

        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
       dispatch( toggleIsFetching(false));



   }}


    const followUnfollowFlow= async (dispatch:any, userId:number, apiMethod:any,actionCreator:any)=>{

        dispatch(toggleIsFollowing(true,userId))
        let response=await  apiMethod(userId)
        if (response.data.resultCode == 0) {
            dispatch(actionCreator(userId))
        }
        dispatch(toggleIsFollowing(false,userId))

    }

export const follow=(userId:number,pageSize:number)=>{
    return async (dispatch:any)=>{
        let apiMethod= usersAPI.follow.bind(usersAPI)
         let actionCreator=followSuccess
        followUnfollowFlow(dispatch,userId,apiMethod,actionCreator)

            }}

export const unfollow=(userId:number,pageSize:number)=>{
    return async (dispatch:any)=>{
        let apiMethod= usersAPI.unfollow.bind(usersAPI)
        let actionCreator=unfollowSuccess
        followUnfollowFlow(dispatch,userId,apiMethod,actionCreator)

    }}

export default usersReducer;