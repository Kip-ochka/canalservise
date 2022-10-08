import {useEffect, useState} from 'react';
import {useNavigation} from "@react-navigation/native";
import Stack from "../Stack/Stack";
import AuthScreen from "./AuthScreen";
import Posts from "./Posts";
import Api from "../utilis/Api";
import {Alert} from "react-native";

const AppProvider = () => {
    const navigation = useNavigation()
    const [loggedIn, setIsLoggedIn] = useState(false)
    const [email, setEmail] = useState("")
    const [passWord, setPassWord] = useState("")
    const [userData, setUserData] = useState({})
    const [allUsersFirstInfo, setAllUsersFirstInfo] = useState([])
    const api = new Api(userData)

    const submitSignIn = (evt) => {
        evt.preventDefault()
        api.authorization(email, passWord).then(response => {
            setUserData(response)
            setIsLoggedIn(true)
            navigation.navigate(Posts)
            setEmail("")
            setPassWord("")
        }).catch((error) => {
            Alert.alert(`${error}`, 'Проверьте введенные данные')
            setIsLoggedIn(false)
        })
    }

    useEffect(() => {
        api.getUsersInformation(setAllUsersFirstInfo)
    },[])

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
                    <Posts {...props} loggedIn={loggedIn} setLoggedIn={setIsLoggedIn}
                           allUsersFirstInfo={allUsersFirstInfo}/>
                )}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

export default AppProvider;