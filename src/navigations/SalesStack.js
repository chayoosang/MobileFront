import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import SalesHome from '../screens/Sales/SalesHome';
import SalesDetails from "../screens/Sales/SalesDetails";


const SalesStack = createStackNavigator();

const SalesStackNavigation = () => {
    return (
        <SalesStack.Navigator>
            <SalesStack.Screen name="SalesHome" component={SalesHome}
                               options={{
                                   headerShown: false,
                                   headerBackTitleVisible: false}}/>
            <SalesStack.Screen name="SalesDetails" component={SalesDetails}
                               options={{
                                   headerBackTitleVisible: false}}/>
        </SalesStack.Navigator>
    );
};

export default SalesStackNavigation;
