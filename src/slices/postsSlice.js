import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
    list: [],
    status: "idle",
    error: null
}

//createAsyncThunk is a helper function that creates an action creator that returns a promise

//createAsyncThunk accepts two arguments: the name of the action and an async function

export const fetchPosts = createAsyncThunk('posts/fetch', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return response.json()
})

export const postsSlice = createSlice({
    name: 'posts',
    initialState, //initialState: initialState,
    reducers: {
    },
    //Builder object provies methods that let us define additional case reducers that will run in response to actions defined outside the slice
    //Reminder: Promise can have three states: pending, fulfilled, or rejected
    extraReducers(builder) {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.list = state.list.concat(action.payload)
            state.status = 'succeeded'
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.error = action.error.message
            state.status = 'failed'
        })
    }
})

export default postsSlice.reducer