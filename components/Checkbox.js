import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch } from 'react-redux'
import { toggleSelected } from "../redux/notificationSlice";
import Checkbox from 'expo-checkbox'


const CheckBox = ({id, selected, text}) => {

    const dispatch = useDispatch()

    const handleSelectClick = () => {
        dispatch(
            toggleSelected({id: id, selected: !selected})
        )
    }


    return (
         <View style={styles.container}>
            <View style={styles.optionContainer}>
               <Checkbox  
                    style= {styles.square} 
                    value={selected} 
                    checked={selected}  
                    onValueChange={handleSelectClick} 
                />
               <Text style={styles.itemText} >{text}</Text>
            </View>
        </View>
    )
}


const styles= StyleSheet.create({
    container: {
        marginLeft: 12,
        padding: 10
    },
    optionContainer: {
        flexDirection:'row',
        alignItems: 'center',
        marginTop: 7,
    },  
    square: {
        width: 22,
        height: 22,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
        fontSize: 15,
        color: '#444',
        textTransform:'uppercase'
    },
})

export default CheckBox