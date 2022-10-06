import axios from "axios";
import { Alert } from "react-native";

class Api {
  constructor(userId) {
    this._baseUrl = "https://jsonplaceholder.typicode.com";
    this._user = userId;
  }

  _handleError(error) {
    Alert.alert(`Ошибка ${error}`, "Пожалуйста, перезагрузите приложение.");
  }

  getUsers(setState) {
    axios.get(`${this._baseUrl}/users`).then(({ data }) => {
      setState(data).catch((error) => {
        this._handleError(error);
      });
    });
  }
}

