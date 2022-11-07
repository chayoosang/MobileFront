import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import SalesHome from '../screens/Sales/SalesHome';
import SalesDetails from "../screens/Sales/SalesDetails";
import InformHome from "../screens/Inform/InformHome";


const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SalesHome" component={SalesHome}/>
            <Stack.Screen name="SalesDetails" component={SalesDetails}/>
            <Stack.Screen name="InformHome" component={InformHome}/>
        </Stack.Navigator>
    );
};

export default StackNavigation;
