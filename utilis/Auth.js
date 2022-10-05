//тут я расположил псевдо авторизацию, емейл и пароль, я изначально задам в переменную и буду сравнивать их с приходящими из инпутов

import { Alert } from "react-native";

class Auth {
  constructor() {
    this._myData = { email: "1234", password: "1234" };
  }

  signIn(email, password, navgator, setLoggedIn) {
    const incomingData = { email: email, password: password };
    console.log(incomingData.password);
    console.log(this._myData.password);
    if (
      this._myData.email === incomingData.email &&
      this._myData.password === incomingData.password
    ) {
      setLoggedIn(true);
      navgator.navigate("Posts");
    } else {
      Alert.alert(
        "Неверные данные",
        "Ваш e-mail или пароль не совпадают с данными пользователя, пожалуйста перепроверьте их"
      );
    }
  }
}

const auth = new Auth();

export default auth;
