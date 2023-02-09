import {configureStore} from '@reduxjs/toolkit'

import notificationReducer from './notificationSlice'
import taskReducer from './taskSlice'

export default configureStore({
    reducer: {
        tasks: taskReducer,
        notificationSettings: notificationReducer,
    }
})