import React, {useState} from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity, FlatList} from "react-native";


const items = [
    {_id: 1, item_name: "piano", item_price: "$1,200",
        item_exp: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", item_location: "canada",
        item_time: new Date().getHours(),
        item_img: require('../../../assets/item1.jpeg')},
    {_id: 2, item_name: "computer", item_price: "$700",
        item_exp: "cpu: 10700k, vga: gtx2060,, ram: 16g", item_location: "canada",
        item_time: new Date().getHours(),
        item_img: require('../../../assets/item2.jpeg')},
    {_id: 3, item_name: "piano", item_price: "$1,200",
        item_exp: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", item_location: "canada",
        item_time: new Date().getHours(),
        item_img: require('../../../assets/item3.jpeg')},
    {_id: 4, item_name: "piano", item_price: "$1,200",
        item_exp: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", item_location: "canada",
        item_time: new Date().getHours(),
        item_img: require('../../../assets/item.jpeg')},
    {_id: 5, item_name: "piano", item_price: "$1,200",
        item_exp: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", item_location: "canada",
        item_time: new Date().getHours(),
        item_img: require('../../../assets/item1.jpeg')},
    {_id: 6, item_name: "piano", item_price: "$1,200",
        item_exp: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", item_location: "canada",
        item_time: new Date().getHours(),
        item_img: require('../../../assets/item2.jpeg')},

];


const SalesHome = ({navigation}) => {

    const _onPress = item => {
        navigation.navigate('SalesDetails', {_id: item._id, name: item.item_name, price: item.item_price,
            exp: item.item_exp, location: item.item_location,
            time: item.item_time,
            img: item.item_img});
    }

    return (
        <View style={styles.menu}>
            <FlatList style={styles.itemRow}
                      numColumns={2}
                      data={items}
                      renderItem={({item}) =>
                          <TouchableOpacity activeOpacity={0.3} style={styles.item}
                                            key={item._id}
                                            onPress={() => _onPress(item)}>
                              <Image style={styles.itemImg} source={item.item_img}/>
                              <Text style={styles.itemPrice}>{item.item_price}</Text>
                              <Text style={styles.itemName}>{item.item_price}</Text>
                              <Text style={styles.itemExp}>{item.item_exp.slice(0, 20)}</Text>
                              <View style={styles.itemText}>
                                  <Text style={styles.itemExp}>{items.item_location}</Text>
                                  <Text style={styles.itemExp}>{item.item_time}</Text>
                              </View>
                          </TouchableOpacity>
                          }
            />
        </View>


    );
};

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",

    },
    itemRow: {
        flex: 1,
        width: "100%",
    },
    item: {
        flex: 1,
        margin: 10,
        flexDirection: 'column',
        width : "50%"

    },
    itemImg: {
        width: '100%',
        height: 200,
        borderRadius: 5,
        resizeMode: "contain",
    },
    itemPrice: {
        fontSize: 30,
        fontWeight: "bold",
    },
    itemName: {
        fontSize: 17,
        fontWeight: "bold",
    },
    itemExp: {
        color: "darkgray"
    },
    itemText: {
        flex: 1,
        marginTop:3,
        flexDirection: 'row',
        justifyContent: "space-between"
    },


});

export default SalesHome;
