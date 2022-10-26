import axios from "axios";

function post(url, data) {
    return axios({
        method: 'post',
        url,
        data: JSON.stringify(data),
        headers: {"Content-Type": "application/json" }
    })
}

export const PostService = {
    index: (data) => {
        return post('/api/post/index', data);
    }
}