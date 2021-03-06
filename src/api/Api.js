import * as axios from "axios";

const instance = axios.create(
    {
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        withCredentials: true,
        headers: {"API-KEY": "73ed2ed5-b96a-4f1b-85ac-a580d11c5705"}

    }
)
export const usersAPI = {
    getUsers(currentPage = 2, pageSize = 1) {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {

                return response.data
            })
    },

    follow(userId) {
        return instance.post(`follow/${userId}`, {})

    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },

    getMyId(userId) {
        return profileAPI.getProfile(userId)
    }
}
export const authAPI = {
    isAuthMe() {
        return instance.get(`auth/me`)

    },
    login(email, password, rememberMe = false,captcha=null) {
        return instance.post(`auth/login`, {email, password, rememberMe,captcha })

    },
    logout(email, password, rememberMe = false) {
        return instance.delete(`auth/login`)

    }

}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)

    }

}
export const profileAPI = {


    getProfile(userId) {
        return instance.get("profile/" + userId)
    },
    getStatus(userId) {
        return instance.get("profile/status/" + userId)
    },
    updateStatus(status) {
        return instance.put("profile/status/", {status: status})
    },
    savePhoto(photoFile) {
        const formData = new FormData()
        formData.append("image", photoFile)
        return instance.put("profile/photo/", formData, {headers: {"Content-Type": "multipart/form-data"}})
    },
    saveProfile(profile) {

        return instance.put("profile/", profile)
    }



}





