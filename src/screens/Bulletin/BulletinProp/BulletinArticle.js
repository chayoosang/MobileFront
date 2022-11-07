import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput} from "react-native"

const Article = ({navigation}) => {
    return (
        <View style={styles.content}>
            <View style={styles.innerContent}> 
                <Text style={styles.WriteDgn}>Write</Text>
                <TextInput style={styles.Title}
                    placeholder="Title"
                />
                <TextInput style={styles.ContentHere}
                    placeholder="Content"
                />
                <TouchableOpacity style={styles.UploadBtn}>
                    <Text style={styles.UploadBtnTxt}>Image Upload</Text>
                </TouchableOpacity>
                <View style={styles.BtnBox}>
                    <TouchableOpacity style={styles.WBtn}><Text style={styles.WBtnTxt}>Write</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.CBtn}
                    onPress={()=>navigation.navigate('BulletinsHome')}
                    ><Text style={styles.CBtnTxt}>Cancel</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.EBtn}><Text style={styles.EBtnTxt}></Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    content:{
        flex: 1,
        backgroundColor: "#fff",
    },
    innerContent:{
        margin: 10,
    },
    WriteDgn:{
        color: 'rgba(255,0,0, 0.7)',
        fontSize: 30,
        fontWeight: "bold"
    },
    Title:{
        marginTop:5,
        borderWidth:2,
        borderColor: 'rgba(60,60,60, 0.5)',
        borderRadius:5,
        paddingLeft:10,
        height: 50,
        fontSize: 20,
        color: 'rgba(60,60,60, 0.5)',
        fontWeight: "bold",
    },
    ContentHere:{
        marginTop:5,
        borderWidth:2,
        borderColor: 'rgba(60,60,60, 0.5)',
        borderRadius:5,
        paddingLeft:10,
        height: 200,
        fontSize: 15,
        color: 'rgba(60,60,60, 0.5)',
        fontWeight: "bold",
    },
    UploadBtn:{
        width: '33%',
        marginTop:5,
        borderWidth:2,
        borderColor: 'rgba(60,60,60, 0.5)',
        borderRadius:5,
        paddingLeft:10, paddingRight:10,
        height: 30,
        backgroundColor: 'rgba(60,60,60, 0.3)',
        justifyContent: "center",
    },
    UploadBtnTxt:{
        fontSize:15,
        fontWeight:"bold",
        color: "#fff",
    },
    BtnBox:{
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    WBtn:{
        width: '33%',
        marginTop:5,
        // borderWidth:2,
        // borderColor: 'rgba(60,60,60, 0.5)',
        borderRadius:5,
        paddingLeft:10, paddingRight:10,
        height: 40,
        backgroundColor: 'rgba(255,0,0, 0.5)',
        justifyContent: "center",
    },
    WBtnTxt:{
        textAlign: "center",
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
    },
    CBtn:{
        width: '33%',
        marginTop:5,
        borderWidth:2,
        borderColor: 'rgba(255,0,0, 0.5)',
        borderRadius:5,
        paddingLeft:10, paddingRight:10,
        height: 40,
        backgroundColor: '#fff',
        justifyContent: "center",
    },
    CBtnTxt:{
        textAlign: "center",
        fontSize: 20,
        color: 'rgba(255,0,0, 0.5)',
        fontWeight: "bold",
    },
    EBtn:{
        width: '33%',
        marginTop:5,
        // borderWidth:2,
        // borderColor: 'rgba(255,0,0, 0.5)',
        borderRadius:5,
        paddingLeft:10, paddingRight:10,
        height: 40,
        backgroundColor: '#fff',
        justifyContent: "center",
    },
    EBtnTxt:{

    },


});

export default Article;