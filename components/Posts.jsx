import Post from "./Post";
import {FlatList, View} from "react-native";
import Header from "./Header";

const Posts = ({loggedIn, setLoggedIn, allUsersFirstInfo}) => {
    const renderPosts = ({item}) => {
        return <Post postData={item}/>
    };

    return (
        <View>
            <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
            <FlatList data={allUsersFirstInfo} renderItem={renderPosts}/>
        </View>
    )
}

export default Posts;
