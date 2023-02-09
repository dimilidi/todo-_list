import { useState } from 'react';
import { Keyboard, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, FlatList, ScrollView } from 'react-native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import Task from '../components/Task'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../redux/taskSlice';
import TotalCompletedItems from '../components/TotalCompletedItems';
import { Ionicons } from '@expo/vector-icons'


const Todos = () => {

  const dispatch = useDispatch()
  const taskItems = useSelector(state => state.tasks)
  const [todo, setTodo] = useState('')

  
  const handleAddTask = () => {
    Keyboard.dismiss()

    if(todo.length === 0) {
      alert('Please enter a task')
      setTodo('')
      return
    }

    dispatch(
      addTask({
        name: todo
      })
    )

    setTodo('')
  }
  


  return (
    <View style={styles.container}>
      <ScrollView style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>
          My To Do List
        </Text>

        {/* If todos, show count of done todos */}
        { taskItems.length > 0 && <TotalCompletedItems/> }
        
        {/*  Tasks */}
        <View style={styles.items}>
          {
            taskItems?.map((item, index) => {
              return (
                <TouchableOpacity key = {index} >
                  <Task {...item}  />
                </TouchableOpacity>
              ) 
            })
          }
        </View>
      </ScrollView>

      {/* Write a Task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}
      >
        <TextInput 
          style={styles.input} 
          placeholder={'Add a task...'} 
          value = {todo} 
          onChangeText={setTodo}
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Ionicons  name='add' size={40} color='#fff' />
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </View>

  )
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',  
  },
  tasksWrapper: {
    paddingTop: 30,
    paddingHorizontal: 20,

  },
  sectionTitle: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#444',
  },
  items: {
    marginTop: 30,
    paddingBottom: 150
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#E8EAED',
    opacity: 0.8,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15, 
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 2,
    width: 250,
  },
  addWrapper: {
    height: 60,
    width: 60,
    backgroundColor: '#C0C0C0',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 2,
  }
});


export default Todos