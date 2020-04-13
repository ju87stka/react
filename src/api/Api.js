import * as axios from "axios";

const instance=axios.create(
    {
        baseURL : "https://social-network.samuraijs.com/api/1.0/",
        withCredentials:true,
        headers:{"API-KEY":"73ed2ed5-b96a-4f1b-85ac-a580d11c5705"}

    }
)
export  const usersAPI={
    getUsers(currentPage=2,pageSize=1){

        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response=>{

                return response.data })},

        follow(userId){
           return  instance .post(`follow/${userId.id}`, {})

        },
        unfollow(userId){
           return instance.delete(`follow/${userId.id}`)
        },

        getMyId(userId){
        return profileAPI.getProfile(userId)
        }
    }
    export const authAPI={
        isAuthMe(){
            return  instance.get(`/auth/me`)

        },
        login(email,password,rememberMe=false){
            return  instance.post(`/auth/login`,{email,password,rememberMe})

        },
        logout(email,password,rememberMe=false){
            return  instance.delete(`/auth/login`)

        }

}
export  const profileAPI={


    getProfile(userId){
        return instance.get("profile/"+userId)
    },
    getStatus(userId){
        return instance.get("profile/status/"+userId)
    },
    updateStatus(status){
        return instance.put("profile/status/",{status:status})
    }
}





