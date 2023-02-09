import { createSlice } from '@reduxjs/toolkit'


export const taskSlice = createSlice({
    name: 'tasks', 
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: Date.now(),
                name: action.payload.name,
                completed: false
            }

            state.push(newTask)
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex((task) => task.id === action.payload.id)
            state[index].completed = action.payload.completed

        },
        deleteTask: (state, action) => {
            return state.filter((item) => item.id != action.payload.id)
        }
    }
}) 

export const { addTask, toggleComplete, deleteTask } = taskSlice.actions

export default taskSlice.reducer