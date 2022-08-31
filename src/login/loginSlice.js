import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchLoginURL } from '../api/login';

const initialState = {
    loginURL: ""
}

export const fetchLoginURLAsync = createAsyncThunk (
    'login/fetchLoginURL',
    async () => {
        const response = await fetchLoginURL()
        return response.data
    }
)

export const loginSlice = createSlice(
    {
        name: 'login',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder
            .addCase(fetchLoginURLAsync.fulfilled, (state, action) => {
                console.log("action.payload", action.payload)
                state.loginURL = action.payload.data.url
            })
            .addCase(fetchLoginURLAsync.rejected, (state, action) => {
                state.error = action.payload.error
            })
        }
    }
)

export const selectLogin = (state) => state.login.loginURL;

export default loginSlice.reducer;