import accountService from '@/services/account/account.service'

export default {
    name: 'Login',
    data: () => {
        return {
            isLoading: false,
            loginData: {
                username: '',
                password: ''
            }
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
                if (result) {
                    localStorage.login = true;
                    this.$router.push({
                        name: 'dashboard'
                    });
                }
            })
        }
    }
}