import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Slice/user'

const store = configureStore({
  reducer: {
    userState: userReducer,
  },
})

export default store