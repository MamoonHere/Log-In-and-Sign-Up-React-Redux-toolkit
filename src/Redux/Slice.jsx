import { createSlice, current } from "@reduxjs/toolkit";

export const SignUpSlice =createSlice({
    name: "Sign Up",
    initialState: {
        users: JSON.parse(localStorage.getItem('StateDB')) || [],
        loggedIn: 0,
        loggedUser: ''
    },
    reducers: {
        Registration: (state, action) => {
            state.users = state.users.concat({userName: action.payload.users[0].userName,password: action.payload.users[0].password})
        },
        LoggedIn: (state,action) => {
            state.loggedIn = action.payload.loggedIn
            state.loggedUser = action.payload.loggedUser
        }
    }
})

export const { Registration, LoggedIn } = SignUpSlice.actions

export default SignUpSlice.reducer