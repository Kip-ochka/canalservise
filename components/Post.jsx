import { StyleSheet, Text, View } from "react-native";

const Post = ({}) => {
  return (
    <View style={styledPost.post}>
      <Text style={styledPost.typography}>Author: Leanne Graham</Text>
      <Text style={styledPost.typography}>Company: Romaguera-Crona</Text>
      <Text style={styledPost.typography}>
        Title:sunt aut facere repellat provident occaecati excepturi optio
        reprehenderit
      </Text>
    </View>
  );
};

const styledPost = StyleSheet.create({
  post: {
    marginLeft: 14,
    marginRight: 14,
    marginBottom: 10,
    minWidth: 292,
    minHeight: 200,
    borderRadius: 6,
    borderColor: "#27569C",
    borderWidth: 5,
  },
  typography: {
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 19,
    paddingTop: 17,
    paddingLeft: 17,
    paddingRight: 17,
  },
});
export default Post;
