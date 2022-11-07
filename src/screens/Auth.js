import React, {useEffect, useState} from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import CustomInput from "./Login/CustomInput";
import CustomButton from "./Login/CustomButton";
import * as Location from 'expo-location';

const Auth = ({navigation}) => {



    return (
        <View style={styles.root}>
            <Text style={styles.title}>Register</Text>
            <CustomInput placeholder='id'/>
            <CustomInput placeholder='password' flag = {true}/>
            <CustomButton text='Next' onPress={() => navigation.navigate('Main')}/>
        </View>);
};

const styles = StyleSheet.create({
    root : {
        alignItems : 'center',
        padding: 20,
        marginTop: '75%',
    },
    title : {
        fontSize : 50,
    },
});

export default Auth;
