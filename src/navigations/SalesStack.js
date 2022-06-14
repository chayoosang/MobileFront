import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import SalesHome from '../screens/SalesHome';
import SalesDetails from "../screens/SalesDetails";


const SalesStack = createStackNavigator();

const SalesStackNavigation = () => {
    return (
        <SalesStack.Navigator>
            <SalesStack.Screen name="SalesHome" component={SalesHome}/>
            <SalesStack.Screen name="SalesDetails" component={SalesDetails}/>
        </SalesStack.Navigator>
    );
};

export default SalesStackNavigation;
