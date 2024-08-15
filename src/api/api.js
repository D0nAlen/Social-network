import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        // "API-KEY": "b5060a38-721d-46b8-b013-d042ee61098a",
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        });
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => { return response.data; });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => { return response.data; });
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
}

export const authAPI = {
    me() { return instance.get(`auth/me`, { withCredentials: true }); }
}