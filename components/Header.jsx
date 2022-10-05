import React from 'react';
import {StyleSheet, View} from "react-native";
import Logo from "./LogoIcon";
import ExitIcon from "./ExitIcon";
import {StatusBar} from "expo-status-bar";

const Header = () => {
    return (
        <View style={styles.header}>
            <StatusBar backgroundColor='#E4B062'/>
            <View style={styles.headerWrapper}>
                <Logo style={styles.logo}/>
                <ExitIcon/>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {marginTop: 17},
    header: {
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: "#E4B062",
        minHeight: 118,
        width: "100%",
    },
    headerWrapper: {
        paddingTop: 30,
        paddingRight: 17,
        paddingLeft: 17,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    logo: {
        width: 70,
        height: 63,
    },
    exit: {
        width: 62,
        height: 56,
        backgroundColor: "rgba(0, 0, 0, .1)",
    },
});
export default Header;