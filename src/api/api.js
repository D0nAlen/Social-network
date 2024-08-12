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
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        });
    },

    setUnfollow(userId) {
        return instance.delete(`/follow/${userId}`).then(response => {
            return response.data;
        });
    },

    setFollow(userId) {
        return instance.post(`/follow/${userId}`).then(response => {
            return response.data;
        });
    }
}