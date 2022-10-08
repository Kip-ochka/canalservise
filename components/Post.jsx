import { StyleSheet, Text, View } from "react-native";

const Post = ({postData}) => {
  console.log(postData)
  return (
    <View style={styledPost.post}>
      <Text style={styledPost.typography}>Author: {postData.name}</Text>
      <Text style={styledPost.typography}>Company: {postData.company.name}</Text>
      <Text style={styledPost.typography}>
        Title: {postData.firstPost.title}
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
    minHeight: 180,
    flex:1,
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
