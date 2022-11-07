import React from "react";
import {StyleSheet, View, Text, TouchableOpacity, FlatList} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

const items = [
    {_id:1, item_name: "Lorem ipsum dolor sit amet, consectetur adipis"
    , item_detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    item_notif:"21",
    item_img: require('../../../../assets/image.png')},
    {_id:2, item_name: "consectetur adipiscing elit, sed do eiusmod te"
    , item_detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    item_notif:"21",
    item_img: require('../../../../assets/icon.png')},
    {_id:3, item_name: "Lorem ipsum dolor sit amet, consectetur adipis"
    , item_detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
   item_notif:"21",
    item_img: require('../../../../assets/icon.png')},
    {_id:4, item_name: "consectetur adipiscing elit, sed do eiusmod te"
    , item_detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    item_notif:"21",
    item_img: require('../../../../assets/icon.png')},
    {_id:5, item_name: "Lorem ipsum dolor sit amet, consectetur adipis"
    , item_detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    item_notif:"21",
    item_img: require('../../../../assets/icon.png')},
    {_id:6, item_name: "consectetur adipiscing elit, sed do eiusmod te"
    , item_detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    item_notif:"21",
    item_img: require('../../../../assets/icon.png')},
    {_id:7, item_name: "Lorem ipsum dolor sit amet, consectetur adipis"
    , item_detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    item_notif:"21",
    item_img: require('../../../../assets/icon.png')},
    {_id:8, item_name: "consectetur adipiscing elit, sed do eiusmod te"
    , item_detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    item_notif:"21",
    item_img: require('../../../../assets/icon.png')},

];

function NavTestList(){
    return(
        <View style={styles.listStyle}>
            <TouchableOpacity>
             <Text style={styles.navText}>Lorem ipsum dolor sit amet, consectetur adip... [21] </Text>
            </TouchableOpacity>
        </View>
    );
}

export const Today = ({navigation}) => {

        const _onPress1 = item => {
        navigation.navigate('BulletinDetails', {_id:item._id, name:item.item_name,
            detail:item.item_detail,
            time:item.item_time, img:item.item_img,
            notf:item.item_notif,
        });

    }
    return (
        <View style={styles.container}>
            <View style={styles.navMenu}>
                <FlatList numColumns={1}
                data={items}
                renderItem={({item})=>
                <TouchableOpacity activeOpacity={0.3} style={styles.item}
                                            key={item._id}
                                            onPress={() => _onPress1(item)}>
                              <View style={styles.artList}>
                                <Text style={styles.artListTxt}>{item.item_name}</Text>
                                <Text style={styles.artListTxt}> [{item.item_notif}]</Text>
                              </View>

                              <View style={styles.itemText}>
                              </View>
                          </TouchableOpacity>
            }/>

                <TouchableOpacity style = {styles.navButton}
                onPress={()=>navigation.navigate('Article')}>
                    <Text style={styles.navButtomText}>write</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.alwaysDisplay}>
            <View style={styles.adsBox}>
                <Text>Ads Here</Text>
            </View>
            <View style={styles.recentBox}>
                <View style={styles.goRecentButton}>
                    <Text style={styles.goRecentButtonText}>Recent</Text>
                    <TouchableOpacity
                    onPress={()=>navigation.navigate('BulletinArcList')}
                    ><Text style={styles.goRecentButtonText}>+</Text></TouchableOpacity>
                </View>
                <NavTestList/>
                <NavTestList/>
                <NavTestList/>
                <NavTestList/>
            </View>
            </View>
        </View>
    );
};

export const Weekly = ({navigation}) => {

    const _onPress = item => {
    navigation.navigate('BulletinDetails', {_id:item._id, name:item.item_name,
        detail:item.item_detail,
        time:item.item_time, img:item.item_img,
        notf:item.item_notif,
    });

}
return (
    <View style={styles.container}>
        <View style={styles.navMenu}>
            <FlatList numColumns={1}
            data={items}
            renderItem={({item})=>
            <TouchableOpacity activeOpacity={0.3} style={styles.item}
                                        key={item._id}
                                        onPress={() => _onPress(item)}>
                          <View style={styles.artList}>
                            <Text style={styles.artListTxt}>{item.item_name}</Text>
                            <Text style={styles.artListTxt}> [{item.item_notif}]</Text>
                          </View>

                          <View style={styles.itemText}>
                          </View>
                      </TouchableOpacity>
        }/>

            <TouchableOpacity style = {styles.navButton}
            onPress={()=>navigation.navigate('Article')}>
                <Text style={styles.navButtomText}>write</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.alwaysDisplay}>
            <View style={styles.adsBox}>
                <Text>Ads Here</Text>
            </View>
            <View style={styles.recentBox}>
                <View style={styles.goRecentButton}>
                    <Text style={styles.goRecentButtonText}>Recent</Text>
                    <TouchableOpacity
                    onPress={()=>navigation.navigate('BulletinArcList')}
                    ><Text style={styles.goRecentButtonText}>+</Text></TouchableOpacity>
                </View>
                <NavTestList/>
                <NavTestList/>
                <NavTestList/>
                <NavTestList/>
            </View>
            </View>
    </View>
);
};

export const Monthly = ({navigation}) => {

    const _onPress = item => {
    navigation.navigate('BulletinDetails', {_id:item._id, name:item.item_name,
        detail:item.item_detail,
        time:item.item_time, img:item.item_img,
        notf:item.item_notif,
    });

}
return (
    <View style={styles.container}>
        <View style={styles.navMenu}>
            <FlatList numColumns={1}
            data={items}
            renderItem={({item})=>
            <TouchableOpacity activeOpacity={0.3} style={styles.item}
                                        key={item._id}
                                        onPress={() => _onPress(item)}>
                          <View style={styles.artList}>
                            <Text style={styles.artListTxt}>{item.item_name}</Text>
                            <Text style={styles.artListTxt}> [{item.item_notif}]</Text>
                          </View>

                          <View style={styles.itemText}>
                          </View>
                      </TouchableOpacity>
        }/>

            <TouchableOpacity style = {styles.navButton}
            onPress={()=>navigation.navigate('Article')}>
                <Text style={styles.navButtomText}>write</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.alwaysDisplay}>
            <View style={styles.adsBox}>
                <Text>Ads Here</Text>
            </View>
            <View style={styles.recentBox}>
                <View style={styles.goRecentButton}>
                    <Text style={styles.goRecentButtonText}>Recent</Text>
                    <TouchableOpacity
                    onPress={()=>navigation.navigate('BulletinArcList')}
                    ><Text style={styles.goRecentButtonText}>+</Text></TouchableOpacity>
                </View>
                <NavTestList/>
                <NavTestList/>
                <NavTestList/>
                <NavTestList/>
            </View>
            </View>
    </View>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    artList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft:20, marginRight:20, marginTop:5, marginBottom:5,
        borderBottomWidth: 1,
        borderColor: 'rgba(60,60,60, 0.3)',
    },
    artListTxt: {
        fontSize: 15,
    },
    listStyle: {
        borderBottomWidth:1,
        borderColor: 'rgba(60,60,60, 0.3)',
        marginLeft:20,marginRight:20, marginTop:10,
    },
    navMenu:{
        flex: 1,
        // backgroundColor: "green",
        borderColor: 'rgba(60,60,60, 0.3)',
        borderBottomWidth: 2,
    },
    navText: {
        fontSize: 15,
    },
    navButton: {
        alignItems: "center",
        backgroundColor: 'rgba(255,0,0, 0.5)',
        margin : 20,
        height: 30,
        borderRadius: 5,
    },
    navButtomText: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#fff',
    },
    alwaysDisplay:{
        flex: 1,
        // backgroundColor: "blue",
    },
    adsBox:{
        flex: 0.3,
        backgroundColor: 'rgba(60,60,60, 0.3)',
        margin: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    recentBox: {
        flex: 0.7,
    },
    goRecentButton: {
        flexDirection:'row',
        justifyContent: 'space-between',
        margin: 20,
        marginTop:5, marginBottom:5,
        backgroundColor: 'rgba(255,0,0, 0.3)',
        height: 30,
        alignItems: 'center',
        paddingLeft:10, paddingRight:10,
    },
    goRecentButtonText: {
        fontSize:20,
        fontWeight:"bold",
        color: '#fff',
    },
    menu: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",

    },
    main: {
        flex: 2,
        justifyContent: 'space-between',
        alignItems: "center",
    }


});


