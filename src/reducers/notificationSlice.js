import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    show: false,
    style: "primary",
    message: "Mensaje",
}

const notificationSlice = createSlice({
    name: "notification",
    initialState: initialState,
    reducers: {
        showAlert: (state, action) => {
            state.show = true
            state.style = action.payload.style
            state.message = action.payload.message
        },
        hideAlert: (state) => {
            state.show = false
            state.style = "primary"
            state.message = ""
        }
    }
})

export const { showAlert, hideAlert } = notificationSlice.actions
export default notificationSlice.reducer