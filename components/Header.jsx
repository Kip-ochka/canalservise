import React from "react";
import { StyleSheet, View } from "react-native";
import LogoIconMobile from "./LogoIconMobile";
import ExitIcon from "./ExitIcon";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import LogoIconTabs from "./LogoIconTabs";

const Header = ({ loggedIn, setLoggedIn, isMobile }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <StatusBar backgroundColor="#E4B062" />
      <View style={styles.headerWrapper}>
        {isMobile ? (
          <LogoIconMobile style={styles.logo} />
        ) : (
          <LogoIconTabs style={styles.logo} />
        )}

        {loggedIn ? (
          <ExitIcon
            onPress={() => {
              navigation.navigate("Auth");
              setLoggedIn(false);
            }}
          />
        ) : null}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { marginTop: 17 },
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
});
export default Header;
