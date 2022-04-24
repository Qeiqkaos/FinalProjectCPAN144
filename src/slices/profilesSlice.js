import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
    list: [],
    status: "idle",
    error: null
}

//createAsyncThunk is a helper function that creates an action creator that returns a promise

//createAsyncThunk accepts two arguments: the name of the action and an async function
//by default fetch performs a GET request
export const fetchProfiles = createAsyncThunk('profiles/fetch', async () => {
    const response = await fetch("https://reqres.in/api/users/");
    return response.json();
})

export const profileSlice = createSlice({
    name: 'profiles',
    initialState, //initialState: initialState,
    reducers: {
    },
    //Builder object provies methods that let us define additional case reducers that will run in response to actions defined outside the slice
    //Reminder: Promise can have three states: pending, fulfilled, or rejected
    extraReducers(builder) {
        builder.addCase(fetchProfiles.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(fetchProfiles.fulfilled, (state, action) => {
            state.list = state.list.concat(action.payload.data)
            state.status = 'succeeded'
        })
        builder.addCase(fetchProfiles.rejected, (state, action) => {
            state.error = action.error.message
            state.status = 'failed'
        })
    }
})

export default profileSlice.reducer //Remember to add "profiles: profileReducer" to the resucer in configureStore() (in store) !!!!!!!!!!!!!!!!!!!!!!!!!!!!