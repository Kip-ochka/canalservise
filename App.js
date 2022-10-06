import {NavigationContainer} from "@react-navigation/native";
import AppProvider from "./components/AppProvider";

export default function App() {
    return (
        <NavigationContainer>
            <AppProvider/>
        </NavigationContainer>
    );
}
