import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Home, Sales, Inform, Bulletin, My} from "../screens/TabScreens";
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator>
                <Tab.Screen name="Home" component={Home}
                            options={{
                                tabBarIcon:({focused})=> (
                                    <Ionicons
                                        name="ios-home"
                                        size={30}
                                        style={{color:focused ? 'rgba(255,0,0, 0.7)':'rgba(60,60,60, 0.5)'}}
                                    />
                                ),
                                tabBarActiveTintColor : 'rgba(255,0,0, 0.7)',
                                tabBarInactiveTintColor : 'rgba(60,60,60, 0.5)',
                                headerTitle : "Uhwolim",
                                headerTitleAlign : "center",
                                headerTintColor : 'rgba(255,0,0, 0.7)',
                                headerTitleStyle : {
                                    fontSize: 32,
                                    fontWeight: 'bold',
                                    fontStyle: 'italic',
                                }
                            }}
                />
                <Tab.Screen name="Sales" component={Sales}
                            options={{
                                tabBarIcon:({focused})=> (
                                    <Ionicons
                                        name="basket"
                                        size={30}
                                        style={{color:focused ? 'rgba(255,0,0, 0.7)':'rgba(60,60,60, 0.5)'}}
                                    />
                                ),
                                tabBarActiveTintColor : 'rgba(255,0,0, 0.7)',
                                tabBarInactiveTintColor : 'rgba(60,60,60, 0.5)',
                                headerTitle : "Uhwolim",
                                headerTitleAlign : "center",
                                headerTintColor : 'rgba(255,0,0, 0.7)',
                                headerTitleStyle : {
                                    fontSize: 32,
                                    fontWeight: 'bold',
                                    fontStyle: 'italic',
                                }
                            }}
                />
                <Tab.Screen name="Bulletin" component={Bulletin}
                            options={{
                                tabBarIcon:({focused})=> (
                                    <Ionicons
                                        name="browsers-outline"
                                        size={30}
                                        style={{color:focused ? 'rgba(255,0,0, 0.7)':'rgba(60,60,60, 0.5)'}}
                                    />
                                ),
                                tabBarActiveTintColor : 'rgba(255,0,0, 0.7)',
                                tabBarInactiveTintColor : 'rgba(60,60,60, 0.5)',
                                headerTitle : "Uhwolim",
                                headerTitleAlign : "center",
                                headerTintColor : 'rgba(255,0,0, 0.7)',
                                headerTitleStyle : {
                                    fontSize: 32,
                                    fontWeight: 'bold',
                                    fontStyle: 'italic',
                                }
                            }}
                />

                <Tab.Screen name="Inform" component={Inform}
                            options={{
                                tabBarIcon:({focused})=> (
                                    <Ionicons
                                        name="ios-information-circle"
                                        size={30}
                                        style={{color:focused ? 'rgba(255,0,0, 0.7)':'rgba(60,60,60, 0.5)'}}
                                    />
                                ),
                                tabBarActiveTintColor : 'rgba(255,0,0, 0.7)',
                                tabBarInactiveTintColor : 'rgba(60,60,60, 0.5)',
                                headerTitle : "Uhwolim",
                                headerTitleAlign : "center",
                                headerTintColor : 'rgba(255,0,0, 0.7)',
                                headerTitleStyle : {
                                    fontSize: 32,
                                    fontWeight: 'bold',
                                    fontStyle: 'italic',
                                }
                            }}
                />
                <Tab.Screen name="My" component={My}
                            options={{
                                tabBarIcon:({focused})=> (
                                    <Ionicons
                                        name="ios-cog"
                                        size={30}
                                        style={{color:focused ? 'rgba(255,0,0, 0.7)':'rgba(60,60,60, 0.5)'}}
                                    />
                                ),
                                tabBarActiveTintColor : 'rgba(255,0,0, 0.7)',
                                tabBarInactiveTintColor : 'rgba(60,60,60, 0.5)',
                                headerTitle : "Uhwolim",
                                headerTitleAlign : "center",
                                headerTintColor : 'rgba(255,0,0, 0.7)',
                                headerTitleStyle : {
                                    fontSize: 32,
                                    fontWeight: 'bold',
                                    fontStyle: 'italic',
                                }
                            }}
                />
        </Tab.Navigator>
    );
};

export default TabNavigation;
