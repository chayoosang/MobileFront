import React from "react";
import {StyleSheet, View, Text} from "react-native"





export const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <Text>작은 메뉴</Text>
                <Text>어울림</Text>
                <Text>검색</Text>
            </View>
            <View style={styles.main}>
                <Text>광고</Text>
                <Text>게시판</Text>
            </View>
        </View>
    );
};

export const Sales = () => {
    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <Text>작은 메뉴</Text>
                <Text>어울림</Text>
                <Text>검색</Text>
            </View>
            <View style={styles.main}>
                <Text>게시판</Text>
            </View>
        </View>
    );
};

export const Bulletin = () => {
    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <Text>작은 메뉴</Text>
                <Text>어울림</Text>
                <Text>검색</Text>
            </View>
            <View style={styles.main}>
                <Text>게시글</Text>
            </View>
        </View>
    );
};

export const Inform = () => {
    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <Text>작은 메뉴</Text>
                <Text>어울림</Text>
                <Text>검색</Text>
            </View>
            <View style={styles.main}>
                <Text>게시판</Text>
            </View>
        </View>
    );
};

export const My = () => {
    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <Text>작은 메뉴</Text>
                <Text>어울림</Text>
                <Text>검색</Text>
            </View>
            <View style={styles.main}>
                <Text>게시판</Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    menu: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        backgroundColor: "yellow"
    },
    main: {
        flex: 2,
        justifyContent: 'space-between',
        alignItems: "center",
    }


});


