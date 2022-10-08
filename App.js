import { NavigationContainer } from "@react-navigation/native";
import AppProvider from "./src/components/AppProvider";

export default function App() {
  return (
    <NavigationContainer>
      <AppProvider />
    </NavigationContainer>
  );
}
