import React from "react";
import {View, StyleSheet, Text, Image, Button, TouchableOpacity} from "react-native";


const SalesDetails = ({route}) => {
    return (
        <View style={styles.container}>
            <View style={styles.details}>
                <Image style={styles.itemImg} source={route.params.img}/>
                <Text style={styles.price}>{route.params.price}</Text>
                <Text style={styles.name}>{route.params.name}</Text>
                <View style={styles.etc}>
                    <Text style={styles.etcText}>{route.params.location}</Text>
                    <Text style={styles.etcText}>{route.params.time}</Text>
                </View>
                <Text style={styles.exp}>{route.params.exp}</Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.likeButton}>
                    <Text style={styles.likeText}>like</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.chatButton}>
                    <Text style={styles.chatText}>Let's chat</Text>
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
    itemImg: {
        width: "100%",
        height: 300,
        resizeMode: "cover",
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
        fontSize: "20px",
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
        fontSize: "20px",
    },


});

export default SalesDetails;
