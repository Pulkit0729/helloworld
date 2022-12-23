const { apiUrl1 } = require("../../Constant");
const axios = require("axios");
const base64 = require('base-64');

class AuthApi {

    async postSignup(user, password, onError, onComplete) {
        let url = apiUrl1 + 'authorize/signup';

        try {
            const res = await axios.post(url, {}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + base64.encode(user + ':' + password),
                },
                config: {
                    credentials: 'include',
                }
            });
            if (res.data.success) {
                onComplete();
            } else {
                onError(res.data.msg)
            }

        } catch (error) {
            console.log(error)
            onError(error);
        }
    }
}

export default AuthApi;