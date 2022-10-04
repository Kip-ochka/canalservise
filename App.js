import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Post from "./components/Post";
import ExitIcon from "./components/ExitIcon";
import Logo from "./components/Logo";
import Auth from "./components/Auth";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="#E4B062" />
      <View style={styles.header}>
        <View style={styles.headerWrapper}>
          <Logo />
          <ExitIcon />
        </View>
      </View>
      <View style={styles.mainSection}>
        <Post />
      </View>
      <Auth />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#E4B062",
    minHeight: 118,
    width: "100%",
  },
  headerWrapper: {
    paddingTop: 30,
    paddingRight: 17,
    paddingLeft: 17,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: 70,
    height: 63,
  },
  exit: {
    width: 62,
    height: 56,
    backgroundColor: "rgba(0, 0, 0, .1)",
  },
  mainSection: {},
});
