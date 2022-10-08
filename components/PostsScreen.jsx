import Post from "./Post";
import { FlatList, View, StyleSheet } from "react-native";
import Header from "./Header";

const PostsScreen = ({
  loggedIn,
  isMobile,
  setLoggedIn,
  allUsersFirstInfo,
}) => {
  const renderPosts = ({ item }) => {
    return <Post postData={item} isMobile={isMobile} />;
  };

  return (
    <View style={style.postListWrapper}>
      <Header
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        isMobile={isMobile}
      />
      <FlatList
        numColumns={isMobile ? 1 : 2}
        data={allUsersFirstInfo}
        renderItem={renderPosts}
        style={isMobile ? style.postListMobile : style.postListTabs}
      />
    </View>
  );
};
const style = StyleSheet.create({
  postListMobile: {
    height: "100%",
    flex: 1,
  },
  postListTabs: {
    height: "100%",
    paddingLeft: 37,
    paddingRight: 37,
  },
  postListWrapper: {
    height: "100%",
    flex: 1,
  },
});

export default PostsScreen;
