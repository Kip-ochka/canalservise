import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

function Auth(props) {
  return (
    <View style={authStyled.wrapper}>
      <Text style={authStyled.title}>Authorization</Text>
      <View style={authStyled.inputWrapper}>
        <Text style={authStyled.authTypography}>Login</Text>
        <TextInput style={authStyled.input} />
      </View>
      <View style={authStyled.inputWrapper}>
        <Text style={authStyled.authTypography}>Password</Text>
        <TextInput style={authStyled.input} />
      </View>
      <Pressable style={authStyled.authButton}>
        <Text style={authStyled.authButtonText}>Submit</Text>
      </Pressable>
    </View>
  );
}

const authStyled = StyleSheet.create({
  wrapper: {
    borderColor: "#27569C",
    borderWidth: 5,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: 18,
    color: "#27569C",
    textAlign: "center",
    fontWeight: "800",
    fontSize: 24,
    lineHeight: 29,
  },
  inputWrapper: {},
  input: {
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
export default Auth;
