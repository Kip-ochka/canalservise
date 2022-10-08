import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Stack from "../Stack/Stack";
import AuthScreen from "./AuthScreen";
import PostsScreen from "./PostsScreen";
import Api from "../utilis/Api";
import { Alert, Dimensions } from "react-native";

const AppProvider = () => {
  const screen = Dimensions.get("screen");
  const navigation = useNavigation();
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [userData, setUserData] = useState({});
  const [allUsersFirstInfo, setAllUsersFirstInfo] = useState([]);
  const [isMobile, setIsMobile] = useState(true);
  const api = new Api(userData);

  const checkIsMobile = () => {
    if (screen.width < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const submitSignIn = (evt) => {
    evt.preventDefault();
    api
      .authorization(email, passWord)
      .then((response) => {
        setUserData(response);
        setIsLoggedIn(true);
        navigation.navigate(PostsScreen);
        setEmail("");
        setPassWord("");
      })
      .catch((error) => {
        Alert.alert(`${error}`, "Проверьте введенные данные");
        setIsLoggedIn(false);
      });
  };

  useEffect(() => {
    api.getUsersInformation(setAllUsersFirstInfo);
    checkIsMobile();
  }, []);

  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Auth">
        {(props) => (
          <AuthScreen
            {...props}
            loggedIn={loggedIn}
            isMobile={isMobile}
            email={email}
            setEmail={setEmail}
            passWord={passWord}
            setPassWord={setPassWord}
            setLoggedIn={setIsLoggedIn}
            submitSignIn={submitSignIn}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="PostsScreen">
        {(props) => (
          <PostsScreen
            {...props}
            loggedIn={loggedIn}
            isMobile={isMobile}
            setLoggedIn={setIsLoggedIn}
            allUsersFirstInfo={allUsersFirstInfo}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default AppProvider;
