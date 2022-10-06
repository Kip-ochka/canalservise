import {useState} from 'react';
import {useNavigation} from "@react-navigation/native";
import auth from "../utilis/Auth";
import Stack from "../Stack/Stack";
import AuthScreen from "./AuthScreen";
import Posts from "./Posts";

const AppProvider = () => {
    const navigation = useNavigation()
    const [loggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState("");
    const [passWord, setPassWord] = useState("");
    const [userData, setUserData] = useState('')
    const submitSignIn = (evt) => {
        evt.preventDefault();
        auth.signIn(email, passWord)
            .then((userData) => {
                    setUserData(userData.userId)
                    navigation.navigate(Posts)
                    setIsLoggedIn(true)
                    setEmail("")
                    setPassWord("")
                }
            ).catch(() => auth.handleAuthError())
    }
    return (
        <Stack.Navigator
            initialRouteName="Auth"
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen name="Auth">
                {(props) => (
                    <AuthScreen
                        {...props}
                        loggedIn={loggedIn}
                        email={email}
                        setEmail={setEmail}
                        passWord={passWord}
                        setPassWord={setPassWord}
                        setLoggedIn={setIsLoggedIn}
                        submitSignIn={submitSignIn}
                    />
                )}
            </Stack.Screen>
            <Stack.Screen name="Posts">
                {(props) => (
                    <Posts {...props} loggedIn={loggedIn} setLoggedIn={setIsLoggedIn}/>
                )}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

export default AppProvider;