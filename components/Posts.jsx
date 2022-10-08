import Post from "./Post";
import {FlatList, View, StyleSheet} from "react-native";
import Header from "./Header";

const Posts = ({loggedIn, setLoggedIn, allUsersFirstInfo}) => {
    const renderPosts = ({item}) => {
        return <Post postData={item}/>
    };

    return (
        <View style={style.postListWrapper}>
            <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
            <FlatList data={allUsersFirstInfo} renderItem={renderPosts} style={style.postList}/>
        </View>
    )
}
const style = StyleSheet.create({
    postList:{
        height:'100%'
    },
    postListWrapper:{
        height:'100%'
    }
})

export default Posts;
