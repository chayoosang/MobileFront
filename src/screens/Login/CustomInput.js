import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const CustomInput = ({value, setValue, placeholder, flag}) => {
    return (
        <View style = {styles.container}>
            <TextInput 
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            secureTextEntry = {flag}
            style = {styles.input}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'white',
        width: '100%',
        borderColor : '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 5,
        

    },
    input : {},
});

export default CustomInput