import {NavigationContainer} from "@react-navigation/native";
import {useState} from "react";
import AuthScreen from "./components/AuthScreen";
import Stack from "./Stack/Stack";
import Posts from "./components/Posts";


export default function App() {
    const [loggedIn, setIsLoggedIn] = useState(false)
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Auth' screenOptions={{headerShown: false}}>
                <Stack.Screen name='Auth' component={AuthScreen}/>
                <Stack.Screen name='Posts' component={Posts}/>
            </Stack.Navigator>
        </NavigationContainer>

    );
}

