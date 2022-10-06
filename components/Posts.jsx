import Post from "./Post";
import { FlatList, View } from "react-native";
import Header from "./Header";

const Posts = ({ loggedIn, setLoggedIn }) => {

  const renderPosts = ({ item }) => (
    <Post
      key={item.id}
      author={item.userId}
      company={item.userId}
      title={item.title}
      body={item.body}
    />
  );


  return (
    <View>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <FlatList data={[]} renderItem={renderPosts} />
    </View>
  );
};

export default Posts;
