import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        // "API-KEY": "df4f8f83-6604-4f9f-822b-a64824e63ead",
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