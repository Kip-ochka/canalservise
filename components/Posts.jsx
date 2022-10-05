import Post from "./Post";
import { Alert, FlatList, View } from "react-native";
import Header from "./Header";
import { useEffect, useState } from "react";
import axios from "axios";

const Posts = ({ loggedIn, setLoggedIn }) => {
  const [posts, setPosts] = useState([]);
  const renderPosts = ({ item }) => (
    <Post
      key={item.id}
      author={item.userId}
      company={item.userId}
      title={item.title}
      body={item.body}
    />
  );
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then(({ data }) => {
        setPosts(data);
      })
      .catch((error) => {
        Alert.alert(`Ошибка ${error}`, "Пожалуйста, перезагрузите приложение.");
      });
  }, []);

  return (
    <View>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <FlatList data={posts} renderItem={renderPosts} />
    </View>
  );
};

export default Posts;
