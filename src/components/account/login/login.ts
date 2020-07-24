import accountService from '@/services/account/account.service'
import _ from 'lodash';

export default {
    name: 'Login',
    data: () => {
        return {
            isLoading: false,
            loginData: {
                username: '',
                password: ''
            },
            errorMessage: ''
        };
    },
    methods: {
        loginFn() {
            const username = this.loginData.username;
            const password = this.loginData.password;
            if (!username || !password) {
                return;
            }
            const params = this.loginData;
            accountService.login(params)
            .then((result) => {
                const token = _.get(result, 'data.token');
                if (!token) {
                    this.errorMessage = _.get(result, 'message', '');
                    return;
                }
                localStorage.login = true;
                this.$router.push({
                    name: 'dashboard'
                });
            })
        }
    }
}