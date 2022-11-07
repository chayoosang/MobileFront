import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Monthly, Today, Weekly} from "./BulletinProp/BulletinProps";

const Tab = createMaterialTopTabNavigator();


const Bulletin = () => {
    return(
            <Tab.Navigator {...{screenOptions}}>
                <Tab.Screen name="Today" component={Today}/>
                <Tab.Screen name="Weekly" component={Weekly}/>
                <Tab.Screen name="Monthly" component={Monthly}/>
            </Tab.Navigator>
    )
};

const screenOptions = {
    tabBarStyle: {
        backgroundColor: '#fff',
        height: 50,
    },
    tabBarLabelStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'none',
    },
    tabBarActiveTintColor: '#fff',

    tabBarInactiveTintColor: 'rgba(255,0,0, 0.3)',

    tabBarIndicatorStyle:{
        borderBottomColor: '#FF4D4D',
        borderBottomWidth: 50,
    }
};


export default Bulletin;
