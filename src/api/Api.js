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

                return response.data })
    }}

