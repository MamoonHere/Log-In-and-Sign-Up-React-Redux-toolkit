import { createSlice, current } from "@reduxjs/toolkit";

export const SignUpSlice =createSlice({
    name: "Sign Up",
    initialState: {
        users: JSON.parse(localStorage.getItem('StateDB')) || []
    },
    reducers: {
        Registration: (state, action) => {
            state.users = state.users.concat({userName: action.payload.users[0].userName,password: action.payload.users[0].password})
        }
    }
})

export const { Registration } = SignUpSlice.actions

export default SignUpSlice.reducer