import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import Bulletin from '../screens/Bulletin/BulletinHome';
import BulletinDetails from '../screens/Bulletin/BulletinProp/BulletinDetails';
import Article from '../screens/Bulletin/BulletinProp/BulletinArticle';
import BulletinArcList from '../screens/Bulletin/BulletinProp/BulletinArcList';
const BulletinStack = createStackNavigator();

const BulletinStackNavigation = () => {
    return (
        <BulletinStack.Navigator>
            <BulletinStack.Screen name="BulletinsHome" component={Bulletin} options={{
          headerShown: false,}}/>
          <BulletinStack.Screen name="BulletinDetails" component={BulletinDetails} options={{
          headerShown: false,}}/>
          <BulletinStack.Screen name="Article" component={Article} options={{
          headerShown: false,}}/>
          <BulletinStack.Screen name="BulletinArcList" component={BulletinArcList} options={{
          headerShown: false,}}/>
        </BulletinStack.Navigator>
    );
};

export default BulletinStackNavigation;
