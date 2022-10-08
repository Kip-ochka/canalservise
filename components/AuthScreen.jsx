import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Header from "./Header";

function AuthScreen({
  loggedIn,
  isMobile,
  email,
  setEmail,
  passWord,
  setPassWord,
  setLoggedIn,
  submitSignIn,
}) {
  return (
    <View style={authStyled.screenWrapper}>
      <Header
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        isMobile={isMobile}
      />
      <View
        style={isMobile ? authStyled.containerMobile : authStyled.containerTabs}
      >
        <View
          style={
            isMobile ? authStyled.authWrapperMobile : authStyled.authWrapperTabs
          }
        >
          <Text style={authStyled.title}>Authorization</Text>
          <View
            style={
              isMobile
                ? authStyled.inputWrapperMobile
                : authStyled.inputWrapperTabs
            }
          >
            <Text style={authStyled.authTypography}>Login</Text>
            <TextInput
              style={isMobile ? authStyled.inputMobile : authStyled.inputTabs}
              onChangeText={(newText) => setEmail(newText)}
              value={email}
            />
          </View>
          <View
            style={
              isMobile
                ? authStyled.inputWrapperMobile
                : authStyled.inputWrapperTabs
            }
          >
            <Text style={authStyled.authTypography}>Password</Text>
            <TextInput
              style={isMobile ? authStyled.inputMobile : authStyled.inputTabs}
              onChangeText={(newText) => setPassWord(newText)}
              value={passWord}
            />
          </View>
          <Pressable style={authStyled.authButton} onPress={submitSignIn}>
            <Text style={authStyled.authButtonText}>Submit</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const authStyled = StyleSheet.create({
  screenWrapper: {
    height: "100%",
    flex: 1,
  },
  containerMobile: {
    flex: 1,
    height: "100%",
    alignItems: "center",
  },

  containerTabs: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  authWrapperMobile: {
    borderColor: "#27569C",
    borderWidth: 5,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },

  authWrapperTabs: {
    borderColor: "#27569C",
    borderWidth: 5,
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
  },

  title: {
    marginBottom: 34,
    marginTop: 18,
    color: "#27569C",
    textAlign: "center",
    fontWeight: "800",
    fontSize: 24,
    lineHeight: 29,
  },
  inputWrapperMobile: {},
  inputWrapperTabs: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputMobile: {
    backgroundColor: "#D9D9D9",
    minHeight: 39,
    minWidth: 212,
    borderRadius: 10,
    borderColor: "#27569C",
    borderWidth: 4,
    paddingLeft: 8,
  },

  inputTabs: {
    width: 295,
    height: 45,
    backgroundColor: "#D9D9D9",
    minHeight: 39,
    minWidth: 212,
    borderRadius: 10,
    borderColor: "#27569C",
    borderWidth: 4,
    paddingLeft: 8,
  },

  authButton: {
    textAlign: "center",
    width: 213,
    height: 43,
    backgroundColor: "#E4B062",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 32,
    marginBottom: 32,
  },
  authButtonText: {
    fontWeight: "800",
    fontSize: 24,
    lineHeight: 29,
  },
  authTypography: {
    paddingTop: 24,
    fontWeight: "800",
    fontSize: 24,
    lineHeight: 29,
    marginBottom: 14,
  },
});

export default AuthScreen;
