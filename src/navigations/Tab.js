import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Home, Sales, Inform, Bulletin, My} from "../screens/TabScreens";



const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Sales" component={Sales} />
            <Tab.Screen name="Bulletin" component={Bulletin} />
            <Tab.Screen name="Inform" component={Inform} />
            <Tab.Screen name="My" component={My} />
        </Tab.Navigator>
    );
};

export default TabNavigation;
