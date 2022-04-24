import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
    list: [],
    status: "idle",
    error: null
}

//createAsyncThunk is a helper function that creates an action creator that returns a promise

//createAsyncThunk accepts two arguments: the name of the action and an async function
//by default fetch performs a GET request
export const registerAccount = createAsyncThunk('register/enter', async (credentials) => {
    const response = await fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },//data for API
        body: JSON.stringify(credentials) //Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
    })
    return response.json()
})

// const handleRegister = () => {
//     dispatch(registerAccount({email, password}));
//     setEmail("");
//     setPassword("");
//   }
//Add this next to handleLogin in LoginForm      !!!!!!!!!!!!!!!!!!

{/* <button
      disabled={email.length === 0 || password.length === 0}
      onClick={() => handleRegister()}
    >
      Register
    </button> */}
//Also add this button next to the login button in LoginForm      !!!!!!!!!!!!!!!!!!

export const registerSlice = createSlice({
    name: 'register',
    initialState, //initialState: initialState,
    reducers: {
    },
    //Builder object provies methods that let us define additional case reducers that will run in response to actions defined outside the slice
    //Reminder: Promise can have three states: pending, fulfilled, or rejected
    extraReducers(builder) {
        builder.addCase(registerAccount.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(registerAccount.fulfilled, (state, action) => {
            // in our case payload is {token: "token"}
            state.token = action.payload.token
            state.status = 'succeeded'
        })
        builder.addCase(registerAccount.rejected, (state, action) => {
            state.error = action.error.message
            state.status = 'failed'
        })
    }
})

export default registerSlice.reducer //Remember to add "register: registerReducer" to the resucer in configureStore() (in store) !!!!!!!!!!!!!!!!!!!!!!!!!!!!