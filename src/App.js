import React, {useEffect, useState} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import TabNavigation from "./navigations/Tab";
import {Button, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import {RefreshControl} from "react-native-web";
import MainStackNavigation from "./navigations/MainStack";



const App = () => {

    return (
            <NavigationContainer>
                <MainStackNavigation/>
            </NavigationContainer>
    );
};

export default App;



