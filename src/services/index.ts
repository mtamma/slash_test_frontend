import http from 'axios'

export default {
    init: () => {
        http.defaults.baseURL = 'http://localhost:3000';
        http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    }
}