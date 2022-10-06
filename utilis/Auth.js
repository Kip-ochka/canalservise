//тут я расположил псевдо авторизацию, емейл и пароль, я изначально задам в переменную и буду сравнивать их с приходящими из инпутов

import {Alert} from "react-native";

class Auth {
    constructor() {
        this._myData = {email: "1234", password: "1234"};
    }

    handleAuthError() {
        Alert.alert(
            'Ошибка',
            "Ваш e-mail или пароль не совпадают с данными пользователя, пожалуйста перепроверьте их"
        )
    }

    signIn(email, password) {
        const incomingData = {email: email, password: password};
        return new Promise((resolve, reject) => {
            if (this._myData.email === incomingData.email &&
                this._myData.password === incomingData.password) {
                const userData = {userId: 1}
                resolve(userData)
            } else {
                reject({})
            }
        })
    }
}

const auth = new Auth();

export default auth;
