import React from "react";
import {StyleSheet, Text, TouchableOpacity, View, Image} from "react-native";


const Main = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/main.png")} style={styles.itemImg}/>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.likeButton} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.likeText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.chatButton} onPress={() => navigation.navigate('Auth')}>
                    <Text style={styles.chatText}>Register</Text>
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
    itemImg: {
        width: "100%",
        height: "90%",
        resizeMode: "cover",
    },

    buttons: {
        marginTop: 20,
        flex: 0.3,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },

    likeButton: {
        backgroundColor: "grey",
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
        borderColor: "grey",
        borderWidth: "2px",
        width: "40%",
        height: 60,
        alignItems: "center",
        justifyContent: "center",
    },

    chatText:{
        color: "grey",
        fontSize: 20,
    },
});


export default Main;
