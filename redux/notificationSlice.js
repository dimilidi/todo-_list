import { createSlice } from '@reduxjs/toolkit'


const notificationSlice = createSlice({
    name: 'notificationSettings',
    initialState: [
        {text: 'sms', id: 1, selected: false}, 
        {text: 'email', id: 2, selected: false}, 
        {text: 'push', id: 3, selected: false}
    ],
    reducers: {
        toggleSelected(state, action) {
            const index = state.findIndex((notificationSetting) => notificationSetting.id === action.payload.id)
            state[index].selected = action.payload.selected
        }
    }
})

export const { addNotificationSetting, toggleSelected } = notificationSlice.actions

export default notificationSlice.reducer