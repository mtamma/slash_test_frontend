import server from '@/services/server/server.service'

class AccountService {
    login(params) {
        const url = '/api/login';
        return server.getHttp(url, params)
        .then((response) => {
            return response;
        });
    }
}

export default new AccountService()