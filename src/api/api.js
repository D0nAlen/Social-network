import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "f1cff00b-9303-49f6-b0d1-f6e940d3c084",
    },
});

export const usersAPI = {
getUsers(currentPage = 1, pageSize = 10){
    return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(response => {
        return response.data;
    });
}
}