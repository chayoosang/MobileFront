import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import Login from '../screens/Login';
import TabMain from "../screens/TabMain";
import Main from "../screens/Main";
import Auth from "../screens/Auth";


const MainStack = createStackNavigator();

const MainStackNavigation = () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen name="Main"
                              component={Main}
                              options={{
                                  headerShown: false,
                                  headerBackTitleVisible: false}}
            />
            <MainStack.Screen name="Login"
                              component={Login}
                              options={{
                                  headerBackTitleVisible: false}}
            />
            <MainStack.Screen name="Auth"
                              component={Auth}
                              options={{
                                  headerBackTitleVisible: false}}
            />
            <MainStack.Screen name="TabMain" component={TabMain}
                              options={{
                                  headerShown: false,
                                  headerBackTitleVisible: false}}/>
        </MainStack.Navigator>
    );
};

export default MainStackNavigation;
