import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import Login from '../screens/Login';
import Auth from "../screens/Auth";
import Main from "../screens/Main";


const LoginStack = createStackNavigator();

const LoginStackNavigation = () => {
    return (
        <LoginStack.Navigator>
            <LoginStack.Screen name="Main"
                               component={Main}
                               options={{
                                   headerShown: false,
                                   headerBackTitleVisible: false}}
            />
            <LoginStack.Screen name="Login"
                              component={Login}
                              options={{
                                  headerBackTitleVisible: false}}
            />
            <LoginStack.Screen name="Auth" component={Auth}
                              options={{
                                  headerBackTitleVisible: false}}/>
        </LoginStack.Navigator>
    );
};

export default LoginStackNavigation;
