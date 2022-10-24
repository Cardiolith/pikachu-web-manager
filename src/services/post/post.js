import axios from "axios";

export const PostService = {
    index: (data) => {
        return axios({
            method: "post",
            url: "/api/post/index",
        })
    }
}