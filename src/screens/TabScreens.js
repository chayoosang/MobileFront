import React from "react";
import {StyleSheet, View, Text, FlatList, TouchableOpacity, Image} from "react-native"
import { SliderBox } from 'react-native-image-slider-box';
import SalesStackNavigation from "../navigations/SalesStack";
import InformStackNavigation from "../navigations/InformStack";
import BulletinStackNavigation from "../navigations/BulletinStack";



const items = [
    {_id:1, item_name: "Lorem ipsum dolor sit amet, consectetur adipis"
        , item_detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        item_notif:"21",
        item_img: require('../../assets/image.png')},
    {_id:2, item_name: "consectetur adipiscing elit, sed do eiusmod te"
        , item_detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        item_notif:"21",
        item_img: require('../../assets/icon.png')},
    {_id:3, item_name: "Lorem ipsum dolor sit amet, consectetur adipis"
        , item_detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        item_notif:"21",
        item_img: require('../../assets/icon.png')},
    {_id:4, item_name: "consectetur adipiscing elit, sed do eiusmod te"
        , item_detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        item_notif:"21",
        item_img: require('../../assets/icon.png')},]


const salesData = [
    {
        id: "1",
        name: "게임기",
        text: "게임기",
        src:
            require('../../assets/item.jpeg'),
    },
    {
        id: "2",
        name: "게임기",
        text: "게임기",
        src:
            require('../../assets/item1.jpeg'),
    },
    {
        id: "3",
        name: "게임기",
        text: "게임기",
        src:
            require('../../assets/item2.jpeg'),
    },
];


export const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <SliderBox images={[
                    require('../../assets/ad1.jpeg'),
                    require('../../assets/ad2.jpeg'),
                    require('../../assets/ad3.png')]}
                           autoplay
                           circleLoop
                           style={styles.ad}
                />
            </View>
                <View style={styles.main}>
                    <View style={styles.homeBoard}>
                        <View style={styles.board}>
                        <Text style={styles.bulletin}>BULLETIN BOARD</Text>
                        </View>
                        <FlatList numColumns={1}
                                  data={items}
                                  renderItem={({item}) =>
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
                    </View>

                    <View style={styles.homeBoard}>
                        <View style={styles.board}>
                            <Text style={styles.bulletin}>SALES</Text>
                        </View>
                        <FlatList numColumns={1}
                                  data={salesData}
                                  horizontal={true}
                                  renderItem={({item}) =>
                                      <TouchableOpacity activeOpacity={0.3} style={styles.item}
                                                        key={item._id}
                                                        >
                                          <Image style={styles.img} source={item.src}/>
                                      </TouchableOpacity>
                                  }/>
                    </View>
                    <View>

                    </View>
                </View>
        </View>
    );
};

export const Sales = () => {
    return (
        <View style={styles.container}>
            <SalesStackNavigation />
        </View>
    );
};

export const Bulletin = () => {
    return (
        <View style={styles.container}>
            <BulletinStackNavigation/>
        </View>
    );
};

export const Inform = () => {
    return (
        <View style={styles.container}>
           <InformStackNavigation/>
        </View>
    );
};

export const My = () => {
    return (
        <View style={styles.container}>
           {/*<View>*/}

           {/*</View>*/}
           {/* <View style={styles.buttonHead}>*/}
           {/*     <View>*/}
           {/*         <Text style={buttonText}>General</Text>*/}
           {/*         <Text>Sales</Text>*/}
           {/*     </View>*/}
           {/*     <View>*/}

           {/*     </View>*/}
           {/*     <View>*/}
           {/*         <Text>General</Text>*/}
           {/*         <Text>Sales</Text>*/}
           {/*     </View>*/}
           {/*     <View>*/}

           {/*     </View>*/}
           {/* </View>*/}
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    menu: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        backgroundColor: "yellow"
    },
    main: {
        flex: 2,
        justifyContent: 'space-between',
        alignItems: "center",
    },
    homeBoard: {
        margin: 20,
        flex: 1,
    },
    bulletin: {
        color: '#FF4D4D',
        fontSize: 20,
    },
    ad: {
        width: '100%',
        height: 300,
    },
    board: {
        borderBottomWidth: 2,
        borderColor: '#FF4D4D',
    },
    img: {
        width: 200,
        height: 100,
        margin: 10,
        resizeMode: "contain"
    },
    buttonHead: {
        flex: 1,
        borderWidth: 1,
    },
    buttonText: {
        color:'#FF4D4D',
        fontSize:20
    },






});


