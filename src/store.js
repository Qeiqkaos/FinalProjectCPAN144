import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './slices/studentSlice';
import postsReducer from './slices/postsSlice';
import loginReducer from './slices/loginSlice';
import registerReducer from './slices/registerSlice';
import profileReducer from './slices/profilesSlice';
//Redux store contains all the reducers
//Redux state can be represented as slices of state

//Configure store adds thunk middleware to the store automatically
//Without thunkmidleware we can't dispatch async actions
export const store = configureStore({
    reducer: {
        students: studentReducer,
        posts: postsReducer,
        login: loginReducer,
        register: registerReducer,
        profiles: profileReducer
    },
})