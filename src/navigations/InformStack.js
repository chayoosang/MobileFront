import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import InformHome from '../screens/Inform/InformHome';
import InformDetails from '../screens/Inform/InformDetails';


const InformStack = createStackNavigator();

const InformStackNavigation = () => {
    return (
        <InformStack.Navigator>
            <InformStack.Screen name="InformHome" component={InformHome}
                                options={{
                                    headerShown: false,
                                    headerBackTitleVisible: false}}/>
            <InformStack.Screen name="InformDetails" component={InformDetails}
                                options={{
                                    headerBackTitleVisible: false}}/>
        </InformStack.Navigator>
    );
};

export default InformStackNavigation;
