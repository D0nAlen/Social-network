import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "",
    },
});

export const usersAPI = {
getUsers(currentPage = 1, pageSize = 10){
    return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(response => {
        return response.data;
    });
}
}