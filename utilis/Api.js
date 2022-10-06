import axios from "axios";
import {Alert} from "react-native";

export default class Api {
    constructor() {
        this._email = 'Sincere@april.biz'
        this._baseUrl = "https://jsonplaceholder.typicode.com";
        this._profileData = {email: '1234', password: '1234'};
    }

    _handleError(error) {
        Alert.alert(`Ошибка ${error}`, "Пожалуйста, перезагрузите приложение.");
    }

    _get

    _getUser({userId}) {
        axios.get(`${this._baseUrl}/users/${userId}`)
            .then(({data}) => {
                return data
            })
            .catch((error) => {
                this._handleError(error);
            });
    };

    authtorization(email, password) {
        const incomingData = {email: email, password: password};
        return new Promise((resolve, reject) => {
            if (this._profileData.email === incomingData.email && this._profileData.password === incomingData.password) {
                const userId = {userId: 1}
                resolve(userId)
            } else {
                reject('Ошибка авторизации')
            }
        })

    }
}

