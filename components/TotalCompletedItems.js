import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'


const TotalCompletedItems = () => {

    const completedTasks = useSelector((state) => 
        state.tasks.filter((tasks) => tasks.completed === true)
    )

    const totalTasks = useSelector((state) => 
        state.tasks.length
    )

  return (
    <View style={styles.container}>
      <Text style={styles.textDone}>DONE: </Text>
      <Text style={styles.textSpecial}>{completedTasks?.length}/ {totalTasks}</Text>
    </View>
  )
}

export default TotalCompletedItems

const styles = StyleSheet.create({
    container: {
        width:'90%', 
        flexDirection: 'row', 
        justifyContent: 'center'
    },
    textDone: {
        color: 'gray', 
        marginRight: 15
    },
    textSpecial: {
        color: 'green' 
    }
})