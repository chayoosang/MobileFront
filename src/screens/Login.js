import React, {useEffect, useState} from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import CustomInput from "./Login/CustomInput";
import CustomButton from "./Login/CustomButton";
import * as Location from 'expo-location';

const Login = ({navigation}) => {

    const [city, setCity] = useState("Loading..");
    const [ok, setOk] = useState(true);


    //권한요청 (앱사용중에만 위치를 요청)
    const getCity = async () => {
        const {granted} = await Location.requestForegroundPermissionsAsync();

        if (!granted) {
            setOk(false);
        }

        //경도 위도 좌표 가져오기
        const {
            coords: {latitude, longitude},
        } = await Location.getCurrentPositionAsync({accuracy: 5});

        const location = await Location.reverseGeocodeAsync(
            {latitude, longitude},
            {useGoogleMaps: false},
        );

        setCity(location[0].isoCountryCode);
    }

    useEffect(()=> {
        getCity();
    },[])

    const _onPress = () => {

        if (city === "US") {
            alert("위치 인증이 완료되었습니다.")
            navigation.navigate('TabMain');
        } else {
            alert("현재 위치에서는 해당 서비스를 이용할 수 없습니다." + city)
        }


    };


    return (
        <View style={styles.root}>
            <Text style={styles.title}>Login</Text>
            <CustomInput placeholder='id'/>
            <CustomInput placeholder='password' flag = {true}/>
            <CustomButton text='Login' onPress={() => _onPress()}/>
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

export default Login;
