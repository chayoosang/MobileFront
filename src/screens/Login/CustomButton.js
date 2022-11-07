import React from 'react'
import { View, Text, TextInput, StyleSheet, Pressable} from 'react-native'

const CustomButton = ({onPress, text}) => {
    return (
        <Pressable onPress={onPress} style = {styles.container}>
            <Text style = {styles.text}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container : {
      backgroundColor : '#FF0000',
      width : '100%',
      padding: 15,
      marginVertical: 5,
      alignItems: 'center',
    },
    text : {
        fontWeight : 'bold',
        color : 'white',
    },
  });

export default CustomButton