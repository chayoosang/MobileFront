import React from "react";
import {View,ScrollView, StyleSheet, Text, Image, Button, TouchableOpacity, TextInput, TextPropTypes } from "react-native";
function ContentList(){
    return(
        <View style={styles02.tailContentBox}>
            <TouchableOpacity>
            <Text style={styles02.tailContentTitle}>
                Lorem ipsum dolor sit amet, consectetur adipibd... [21] </Text> 
            </TouchableOpacity>
            <Text style={styles02.tailContentSub}>
                nickname | 2099.00.00 | 0k views | 00 likes</Text>   
        </View>  
    );
}
const BulletinArcList= ()=> {
    return(
        <ScrollView style={styles02.entire}>
            <View style={styles02.tailContent}>
                <View style={styles02.tailHeadLine}>
                    <Text style={styles02.BestOf}>Best of</Text>
                    <View style={styles02.tailNav}>
                        <TouchableOpacity style={styles02.tailNav01}>
                            <Text style={styles02.tailNav01Txt}>Today</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles02.tailNav02}>
                            <Text style={styles02.tailNav02Txt}>Weekly</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles02.tailNav02}>
                            <Text style={styles02.tailNav02Txt}>Monthly</Text>
                    </TouchableOpacity>
                    </View>
                </View>    
                <ContentList/><ContentList/><ContentList/><ContentList/><ContentList/>
                <ContentList/><ContentList/><ContentList/><ContentList/><ContentList/>
                <View style={styles02.lastNav}>
                    <TouchableOpacity style={styles02.nextBtn}>
                        <Text style={styles02.nextBtnTxt}>next</Text>
                    </TouchableOpacity>
                    <View style={styles02.idxBtnArea}>
                        <TouchableOpacity style={styles02.idxBtn}>
                            <Text style={styles02.idxBtnTxt}>‹</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles02.idxBtnSelected}>
                            <Text style={styles02.idxBtnSelectedTxt}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles02.idxBtn}>
                            <Text style={styles02.idxBtnTxt}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles02.idxBtn}>
                            <Text style={styles02.idxBtnTxt}>3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles02.idxBtn}>
                            <Text style={styles02.idxBtnTxt}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles02.idxBtn}>
                            <Text style={styles02.idxBtnTxt}>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles02.idxBtn}>
                            <Text style={styles02.idxBtnTxt}>6</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles02.idxBtn}>
                            <Text style={styles02.idxBtnTxt}>7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles02.idxBtn}>
                            <Text style={styles02.idxBtnTxt}>8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles02.idxBtn}>
                            <Text style={styles02.idxBtnTxt}>›</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
};
const styles02 = StyleSheet.create({
    entire:{
        flex: 1,
        backgroundColor:"#fff",
    },
    tailContent:{
        marginTop:10,
        paddingLeft:20, paddingRight:20,
    },
    tailHeadLine:{
        flexDirection: "row",
        justifyContent:"space-between",
        borderBottomWidth:2,
        borderColor:'rgba(60,60,60, 0.3)',
        marginBottom:20,
    },
    BestOf:{
        fontSize:30,
        color: 'rgba(255,0,0, 0.7)',
        fontWeight:"bold",
    },
    tailNav:{
        flexDirection: "row",
    },
    tailNav01:{
        backgroundColor : 'rgba(255,0,0, 0.7)',
        width: 80,
    },
    tailNav02:{
        backgroundColor : '#fff',
        borderWidth:2, borderColor:'rgba(255,0,0, 0.3)',
        width: 80
    },
    tailNav01Txt: {
        fontSize:20,
        fontWeight:"bold",
        color: "#fff",
        textAlign:"center",
    },
    tailNav02Txt:{
        fontSize:20,
        fontWeight:"bold",
        color: 'rgba(255,0,0, 0.3)',
        textAlign:"center",
    },
    tailContentBox:{
        borderBottomWidth:1,
        borderColor: 'rgba(60,60,60, 0.3)',
        marginBottom:5,
    },
    tailContentTitle:{
        color: 'rgba(60,60,60, 0.5)',
        fontWeight:"bold",
    },
    tailContentSub: {
        color: 'rgba(60,60,60, 0.3)',
        fontWeight:"bold",
        marginBottom:5,
    },
    lastNav:{
        marginTop:10,
        marginBottom:20,
    },
    nextBtn: {
        backgroundColor : 'rgba(255,0,0, 0.5)',
        width: "100%",
        height: 30,
        borderRadius:5,
        marginBottom:10,
    },
    nextBtnTxt:{
        fontWeight:"bold",
        color: '#fff',
        fontSize: 20,
        textAlign:'center',
    },
    idxBtnArea:{
        height: 30,
        flexDirection: "row",
        justifyContent:"space-evenly"
    },
    idxBtnSelected:{
        height: "100%",
        width: "10%",
        backgroundColor: 'rgba(255,0,0, 0.3)',
        borderRadius: 5,
    },
    idxBtn:{
        height: "100%",
        width: "10%",
        borderWidth:2,
        borderColor: 'rgba(255,0,0, 0.3)',
        borderRadius: 5,
    },
    idxBtnTxt:{
        textAlign:"center",
        fontSize:20,
        color: 'rgba(255,0,0, 0.5)',
        fontWeight:"bold",
    },
    idxBtnSelectedTxt:{
        textAlign:"center",
        fontSize:20,
        color: "#fff",
        fontWeight:"bold",
    }
});

export default BulletinArcList;