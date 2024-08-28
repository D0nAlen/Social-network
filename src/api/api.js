import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "b5060a38-721d-46b8-b013-d042ee61098a",
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
        console.warn("Obsolete method. Please profileAPI object");
        return instance.get(`profile/${userId}`);
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status });
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },

    logout() {
        return instance.delete(`auth/login`);
    }
}