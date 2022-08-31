import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    getOrcid,
    deleteOrcid,
    editOrcid,
    addorcid,
} from '../../api/OrcidData';


const initialState = {
    inputOrcidData: [],
};

export const OrcidSlice = createSlice({
    name: "orcidRecord",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDataFromApiOrcid.fulfilled, (state, action) => {
                console.log(action?.payload?.data, "getDataFromApiOrcid")
                state.inputOrcidData = action?.payload?.data
            })

            .addCase(deleteOrcidData.fulfilled, (state, action) => {
                console.log(action?.payload?.data, "state")
                state.inputOrcidData = action?.payload?.data
            })
            
            .addCase(editOrcidData.fulfilled, (state, action) => {
                console.log(action?.payload?.data, "editOrcidData 1111")
                state.inputOrcidData = action?.payload?.data
            })

            .addCase(addOrcidData.fulfilled, (state, action) => {
                console.log(action?.payload?.data, "addOrcidData")
                state.inputOrcidData.push = action?.payload?.data
            })
    }
})

export const getDataFromApiOrcid = createAsyncThunk(
    'post/getDataFromApiOrcid',
    async () => {
        return await getOrcid();
    }
)

export const deleteOrcidData = createAsyncThunk(
    'delete/deleteOrcidData',
    async (payload) => {
        return await deleteOrcid(payload.id);
    }
)

export const editOrcidData = createAsyncThunk (
    'edit/editOrcidData', 
    async (payload) => {
        return await editOrcid(payload);
    }
)

export const addOrcidData = createAsyncThunk (
    'add/addOrcidData',
    async (payload) => {
        return await addorcid(payload);
    }
)

export const inputOrcidData = (state) => state.orcidRecord.inputOrcidData;

export default OrcidSlice.reducer;