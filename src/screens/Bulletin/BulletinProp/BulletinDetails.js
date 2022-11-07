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
const BulletinDetails = ({route}) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.name}>{route.params.name}</Text>
                <Text style={styles.nameSub}>company | 2099.01.01 | 0k views | 00likes</Text>
            </View>
            <View>
                <Image style={styles.itemImg} source={route.params.img} />
                <Text style={styles.detail}>{route.params.detail}</Text>
                <Text style={styles.detail}>{route.params.detail}</Text>
                <Text style={styles.detail}>{route.params.detail}</Text>
            </View>
            <View style = {styles.buttonArea}>
                <TouchableOpacity style = {styles.likeButton}>
                    <Text style={styles.likeText}>like</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.dislikeButton}>
                    <Text style={styles.dislikeText}>dislike</Text>
                </TouchableOpacity>
            </View>
            <View style= {styles.reply}>
                <View style= {styles.replyHeader}>
                    <TouchableOpacity><Text style= {styles.replynick}>nickname#001</Text></TouchableOpacity> 
                    <TouchableOpacity><Text style= {styles.replyInfo}>2099-01-01 00:00:00 | report</Text></TouchableOpacity> 
                </View >
                <View style= {styles.replyMain}>
                    <Text style= {styles.replyMainCont}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
                    <TouchableOpacity><Text style= {styles.replyMainReply}>reply</Text></TouchableOpacity> 
                </View>
            </View>
            <View style= {styles.reply}>
                <View style= {styles.replyHeader}>
                    <TouchableOpacity><Text style= {styles.replynick}>nickname#002</Text></TouchableOpacity> 
                    <TouchableOpacity><Text style= {styles.replyInfo}>2099-01-01 00:00:00 | report</Text></TouchableOpacity> 
                </View >
                <View style= {styles.replyMain}>
                    <Text style= {styles.replyMainCont}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
                    <TouchableOpacity><Text style= {styles.replyMainReply}>reply</Text></TouchableOpacity> 
                </View>
            </View>
            <View style= {styles.reply}>
                <View style= {styles.replyHeader}>
                    <TouchableOpacity><Text style= {styles.replynick}>nickname#003</Text></TouchableOpacity> 
                    <TouchableOpacity><Text style= {styles.replyInfo}>2099-01-01 00:00:00 | report</Text></TouchableOpacity> 
                </View >
                <View style= {styles.replyMain}>
                    <Text style= {styles.replyMainCont}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
                    <TouchableOpacity><Text style= {styles.replyMainReply}>reply</Text></TouchableOpacity> 
                </View>
            </View>

            <View style= {styles.comment}>
            <TextInput style={styles.textInput}          
                placeholder="sed do eiusmod tempor incididunt ut"
            />
            <TouchableOpacity style = {styles.textInputSend}>
                    <Text style={styles.textInputSendText}>comment</Text>
                </TouchableOpacity>
            </View>
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
    );
};
// 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    title: {
        borderBottomColor: 'rgba(60,60,60, 0.3)',
        borderBottomWidth:1,
        marginBottom:20,
        marginLeft: 20, marginRight:20,
    },
    itemImg: {
        width: "100%",
        height: 300,
        marginBottom:20,
        resizeMode: "contain",
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
       color: 'rgba(60,60,60, 0.7)',
    },
    nameSub : {
        fontSize: 15,
        fontWeight: "bold",
       color: 'rgba(60,60,60, 0.3)',
    },
    detail: {
        fontSize: 15,
        marginLeft: 20, marginRight:20,
        color: 'rgba(60,60,60, 0.5)',
        fontWeight: "bold",
    },
    buttonArea: {
        marginLeft:20, marginRight:20,
        marginTop: 10, paddingBottom:10, marginBottom:30,
        borderBottomWidth:2,
        borderColor: 'rgba(60,60,60, 0.3)',
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
    likeButton: {
        backgroundColor: 'rgba(255,0,0, 0.3)',
        width: "40%",
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius:5,
    },

    likeText:{
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    dislikeButton: {
        backgroundColor: 'rgba(60,60,60, 0.3)',
        width: "40%",
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius:5,
    },

    dislikeText:{
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    replynick:{
        color: 'rgba(255,0,0, 0.5)',
        fontWeight: "bold",
    },
    replyInfo:{
        color: 'rgba(60,60,60, 0.3)',
        fontSize:12,
        fontWeight: "bold",
    },
    replyMainCont:{
        color: 'rgba(60,60,60, 0.5)',
        fontWeight: "bold",
        
    },
    replyMainReply:{
        color: 'rgba(255,0,0, 0.5)',
        fontWeight: "bold",
        textAlign:"right",
    },
    reply: {
        marginLeft:20, marginRight:20,
        paddingBottom:10,
        borderBottomWidth:1,
        borderColor: 'rgba(60,60,60, 0.3)',
    },
    replyHeader: {
        justifyContent: "space-between",
        flexDirection:"row",
    },
    replyMain: {
        flexDirection:"column",
    },
    comment:{
        marginTop: 40, marginBottom:10,
        marginLeft:20, marginRight:20,

    },
    textInput:{
        width: '100%',
        height: 80,
        borderColor: 'rgba(60,60,60, 0.5)',
        borderWidth: 2,
        fontWeight: "bold",
        paddingLeft:10, paddingRight:10,
        borderRadius: 5,
        color: 'rgba(60,60,60, 0.5)',
    },
    textInputSend:{
        marginTop:10,
        width: "100%",
        height: 30,
        backgroundColor: 'rgba(255,0,0, 0.5)',
        borderRadius: 5,
    },
    textInputSendText:{
        textAlign:"center",
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    }

});
const styles02 = StyleSheet.create({
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
export default BulletinDetails;
