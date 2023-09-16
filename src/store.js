import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authSlice";
import notificationSlice from "./reducers/notificationSlice"

const store = configureStore({
    reducer: {
        auth: authSlice,
        notification: notificationSlice,
    }
})

export default store