import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";


const InformDetails = ({route}) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.title}>
                    {route.params.title}
                </Text>
            </View>
            <View style={styles.details}>
                <Image style={styles.itemImg}/>
                <Text style={styles.exp}>{route.params.content}</Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.likeButton}>
                    <Text style={styles.likeText}>like</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.chatButton}>
                    <Text style={styles.chatText}>Apply</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",

    },
    details: {
        flex: 2,
    },
    titleView: {
        margin: 14,
    },
    title: {
        fontSize: 25,
    },
    itemImg: {
        width: "100%",
        height: 300,
        resizeMode: "contain",
        backgroundColor: "grey",

    },
    price: {
        fontSize: 35,
        fontWeight: "bold",
        marginLeft: 10,
    },
    name: {
        fontSize: 30,
        fontWeight: "bold",
        marginLeft: 10,
    },
    etc: {
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    etcText: {
        fontSize: 15,
        color: "darkgray",
        marginLeft: 10,

    },
    exp: {
        fontSize: 15,
        margin: 20,
    },

    buttons: {
        flex: 0.3,
        flexDirection: "row",
        justifyContent: "space-around",
        borderTopWidth: "1px",
        alignItems: "center",
    },

    likeButton: {
        backgroundColor: "pink",
        width: "40%",
        height: 60,
        alignItems: "center",
        justifyContent: "center",
    },

    likeText:{
        color: "white",
        fontSize: 20,
    },

    chatButton: {
        backgroundColor: "white",
        borderColor: "pink",
        borderWidth: "2px",
        width: "40%",
        height: 60,
        alignItems: "center",
        justifyContent: "center",
    },

    chatText:{
        color: "pink",
        fontSize: 20,
    },


});

export default InformDetails;
