import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity,  } from 'react-native'
import { useDispatch } from 'react-redux'
import  { toggleComplete, deleteTask } from '../redux/taskSlice'
import Checkbox from 'expo-checkbox'
import { Ionicons } from '@expo/vector-icons'


const Task = ({id, name, completed}) => {

    const dispatch = useDispatch()

    const handleCompleteClick = () => {
        dispatch(
            toggleComplete({id: id, completed: !completed})
        )
    }


    const handleDeleteTask = () => {
        dispatch(
            deleteTask({id: id})
        )
    }

    return (
        <View style = {styles.item}>
            <View style={styles.itemLeft}>
                <Checkbox  
                    style= {styles.square}  
                    value={completed} 
                    checked={completed} 
                    onValueChange={handleCompleteClick} 
                />
                 <Text style={styles.itemText} >{name}</Text>
            </View>
            <TouchableOpacity onPress={handleDeleteTask} >
                <Ionicons  name='trash-outline' size={24} color='gray' />
            </TouchableOpacity>
        </View>
    )

}


const styles = StyleSheet.create({
    item: { 
        backgroundColor:'#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    itemLeft: {
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap'
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
        color: '#444'
    },
})


export default Task