import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";


const MoFa = [
    {
        _id: 1,
        title: "MoFA1 Lorem ipsum dolor sit amet, consectetur adip...",
        content: "Lorem ipsum dolor sit amet, consectetur adip...Lorem ipsum dolor sit amet, consectetur adip...",
        count: 2
    },
    {
        _id: 2,
        title: "MoFA2 Lorem ipsum dolor sit amet, consectetur adip...",
        content: "Lorem ipsum dolor sit amet, consectetur adip...Lorem ipsum dolor sit amet, consectetur adip...",
        count: 10
    },
    {
        _id: 3,
        title: "MoFA3 Lorem ipsum dolor sit amet, consectetur adip...",
        content: "Lorem ipsum dolor sit amet, consectetur adip...Lorem ipsum dolor sit amet, consectetur adip...",
        count: 22
    },
    {
        _id: 4,
        title: "MoFA4 Lorem ipsum dolor sit amet, consectetur adip...",
        content: "Lorem ipsum dolor sit amet, consectetur adip...Lorem ipsum dolor sit amet, consectetur adip...",
        count: 3
    },
    {
        _id: 5,
        title: "MoFA5 Lorem ipsum dolor sit amet, consectetur adip...",
        content: "Lorem ipsum dolor sit amet, consectetur adip...Lorem ipsum dolor sit amet, consectetur adip...",
        count: 10
    },
    {
        _id: 6,
        title: "MoFA6 Lorem ipsum dolor sit amet, consectetur adip...",
        content: "Lorem ipsum dolor sit amet, consectetur adip...Lorem ipsum dolor sit amet, consectetur adip...",
        count: 5
    },

];

const Association = [
    {
        _id: 1,
        title: "A1 Lorem ipsum dolor sit amet, consectetur adip...",
        content: "Lorem ipsum dolor sit amet, consectetur adip...Lorem ipsum dolor sit amet, consectetur adip...",
        count: 2
    },
    {
        _id: 2,
        title: "A2 Lorem ipsum dolor sit amet, consectetur adip...",
        content: "Lorem ipsum dolor sit amet, consectetur adip...Lorem ipsum dolor sit amet, consectetur adip...",
        count: 10
    },
    {
        _id: 3,
        title: "A3 Lorem ipsum dolor sit amet, consectetur adip...",
        content: "Lorem ipsum dolor sit amet, consectetur adip...Lorem ipsum dolor sit amet, consectetur adip...",
        count: 22
    },
    {
        _id: 4,
        title: "A4 Lorem ipsum dolor sit amet, consectetur adip...",
        content: "Lorem ipsum dolor sit amet, consectetur adip...Lorem ipsum dolor sit amet, consectetur adip...",
        count: 3
    },
    {
        _id: 5,
        title: "A5 Lorem ipsum dolor sit amet, consectetur adip...",
        content: "Lorem ipsum dolor sit amet, consectetur adip...Lorem ipsum dolor sit amet, consectetur adip...",
        count: 10
    },
    {
        _id: 6,
        title: "A6 Lorem ipsum dolor sit amet, consectetur adip...",
        content: "Lorem ipsum dolor sit amet, consectetur adip...Lorem ipsum dolor sit amet, consectetur adip...",
        count: 5
    },

];




const Hiring = [
    {
        _id: 1,
        title: "H1 Lorem ipsum dolor sit amet, consectetur adip...",
        content: "Lorem ipsum dolor sit amet, consectetur adip...Lorem ipsum dolor sit amet, consectetur adip...",
        count: 2
    },
    {
        _id: 2,
        title: "H2 Lorem ipsum dolor sit amet, consectetur adip...",
        content: "Lorem ipsum dolor sit amet, consectetur adip...Lorem ipsum dolor sit amet, consectetur adip...",
        count: 10
    },
    {
        _id: 3,
        title: "H3 Lorem ipsum dolor sit amet, consectetur adip...",
        content: "Lorem ipsum dolor sit amet, consectetur adip...Lorem ipsum dolor sit amet, consectetur adip...",
        count: 22
    },
    {
        _id: 4,
        title: "H4 Lorem ipsum dolor sit amet, consectetur adip...",
        content: "Lorem ipsum dolor sit amet, consectetur adip...Lorem ipsum dolor sit amet, consectetur adip...",
        count: 3
    },
    {
        _id: 5,
        title: "H5 Lorem ipsum dolor sit amet, consectetur adip...",
        content: "Lorem ipsum dolor sit amet, consectetur adip...Lorem ipsum dolor sit amet, consectetur adip...",
        count: 10
    },
    {
        _id: 6,
        title: "H6 Lorem ipsum dolor sit amet, consectetur adip...",
        content: "Lorem ipsum dolor sit amet, consectetur adip...Lorem ipsum dolor sit amet, consectetur adip...",
        count: 5
    },

];




export const InformHome = ({navigation}) => {
    const [isMoFA, setMoFA] = useState(true);
    const [isAssociation, setAssociation] = useState(false);
    const [isHiring, setHiring] = useState(false);

    const onMoFA = () => {
        setMoFA(true);
        setAssociation(false);
        setHiring(false);
    }

    const onAssociation = () => {
        setMoFA(false);
        setAssociation(true);
        setHiring(false);
    }

    const onHiring = () => {
        setMoFA(false);
        setAssociation(false);
        setHiring(true);
    }

    const navigate = item => {
        navigation.navigate('InformDetails', {_id: item._id, title: item.title, content: item.content});
    };



    return (
        <View style={styles.container}>
            <View style={styles.selectButton}>
                <TouchableOpacity style={isMoFA?({backgroundColor: "rgba(255,0,0, 0.5)", height: 40, justifyContent: 'center', borderWidth: '0.5px'}):({backgroundColor: "white", height: 40, justifyContent: 'center',borderWidth: '0.5px'})} onPress={() => onMoFA()}>
                    <Text style={isMoFA?({color: "white", fontSize:20}):({color: "rgba(255,0,0, 0.5)", fontSize:20})}>MoFA</Text>
                </TouchableOpacity>
                <TouchableOpacity style={isAssociation?({backgroundColor: "rgba(255,0,0, 0.5)", height: 40, justifyContent: 'center',borderWidth: '0.5px'}):({backgroundColor: "white", height: 40, justifyContent: 'center',borderWidth: '0.5px'})} onPress={() => onAssociation()}>
                    <Text style={isAssociation?({color: "white", fontSize:20}):({color: "rgba(255,0,0, 0.5)", fontSize:20})}>Association</Text>
                </TouchableOpacity>
                <TouchableOpacity style={isHiring?({backgroundColor: "rgba(255,0,0, 0.5)", height: 40, justifyContent: 'center',borderWidth: '0.5px'}):({backgroundColor: "white", height: 40, justifyContent: 'center',borderWidth: '0.5px'})} onPress={() => onHiring()}>
                    <Text style={isHiring?({color: "white", fontSize:20}):({color: "rgba(255,0,0, 0.5)", fontSize:20})}>Hiring</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.navMenu}>
                <View style={styles.listStyle}>
                    {isMoFA?(MoFa.map((mofa) =>
                        <TouchableOpacity onPress={()=> navigate(mofa)}>
                        <Text style={styles.navText}>{mofa.title} [{mofa.count}]</Text>
                        </TouchableOpacity>))
                        :(isAssociation?(Association.map((association) => <TouchableOpacity onPress={()=> navigate(association)}>
                        <Text style={styles.navText}>{association.title} [{association.count}]</Text>
                    </TouchableOpacity>))
                            :(Hiring.map((hiring) => <TouchableOpacity onPress={()=> navigate(hiring)}>
                                <Text style={styles.navText}>{hiring.title} [{hiring.count}]</Text>
                            </TouchableOpacity>)) ) }

                </View>
                <TouchableOpacity style = {styles.navButton}>
                    <Text style={styles.navButtomText}>more</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.alwaysDisplay}>
                <View style={styles.adsBox}>
                    <Text>Ads Here</Text>
                </View>
                <View style={styles.recentBox}>
                    <View style={styles.goRecentButton}>
                        <Text style={styles.goRecentButtonText}>Recent</Text>
                        <TouchableOpacity><Text style={styles.goRecentButtonText}>+</Text></TouchableOpacity>
                    </View>
                    <View style={styles.listStyle}>
                        <TouchableOpacity
                            onPress={()=>this.props.navigation.navigate('article01')}
                        >
                            <Text style={styles.navText}>Lorem ipsum dolor sit amet, consectetur adip... [21] </Text>
                        </TouchableOpacity>
                    </View>
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
    selectButton: {
        flexDirection: "row",
        borderBottomWidth:2
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

export default InformHome;
