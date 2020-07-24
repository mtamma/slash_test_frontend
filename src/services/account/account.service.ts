import server from '@/services/server/server.service'

class AccountService {
    login(params: object) {
        const url = '/api/signin';
        return server.postHttp(url, params)
        .then((response) => {
            return response;
        });
    }
}

export default new AccountService()