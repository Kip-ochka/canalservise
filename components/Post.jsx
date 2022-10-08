import { Image, StyleSheet, Text, View } from "react-native";

const Post = ({ postData, isMobile }) => {
  return (
    <View style={isMobile ? styledPost.postMobile : styledPost.postTabs}>
      {isMobile ? null : (
        <Image
          source={{ uri: postData.firstAlbum.firstPhoto.thumbnailUrl }}
          style={styledPost.postImage}
        />
      )}
      <Text
        style={
          isMobile ? styledPost.typographyMobile : styledPost.typographyTabs
        }
      >
        Author: {postData.name}
      </Text>
      <Text
        style={
          isMobile ? styledPost.typographyMobile : styledPost.typographyTabs
        }
      >
        Company: {postData.company.name}
      </Text>
      <Text
        style={
          isMobile ? styledPost.typographyMobile : styledPost.typographyTabs
        }
      >
        Title: {postData.firstPost.title}
      </Text>
      {isMobile ? null : (
        <Text
          style={
            isMobile ? styledPost.typographyMobile : styledPost.typographyTabs
          }
          numberOfLines={5}
        >
          {postData.firstPost.body}
        </Text>
      )}
    </View>
  );
};

const styledPost = StyleSheet.create({
  postMobile: {
    marginLeft: 14,
    marginRight: 14,
    marginBottom: 10,
    minWidth: 292,
    minHeight: 200,
    flex: 1,
    borderRadius: 6,
    borderColor: "#27569C",
    borderWidth: 5,
  },

  postTabs: {
    borderRadius: 6,
    borderColor: "#27569C",
    borderWidth: 5,
    width: "48%",
    minWidth: 325,
    height: 470,
    overflow: "hidden",
    padding: 25,
    marginRight: 20,
    marginBottom: 25,
  },

  typographyMobile: {
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 19,
    paddingTop: 17,
    paddingLeft: 17,
    paddingRight: 17,
  },

  typographyTabs: {
    fontWeight: "bold",
    fontSize: 16,
    paddingBottom: 8,
    textOverflow: "ellipsis",
  },
  postImage: {
    width: 150,
    height: 150,
    marginBottom: 22,
  },
});
export default Post;
