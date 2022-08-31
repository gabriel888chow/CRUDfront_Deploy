import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    getData,
    deleteVcard,
    editVcard,
    addVcard,
} from '../../api/Data';

const initialState = {
    inputData: [],
    inputDataInChinese: [],
};

export const HomeSlice = createSlice({
    name: "HomePageRecord",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDataFromApi.fulfilled, (state, action) => {
                state.inputData = action?.payload?.data?.filter((rec) => rec.language === "English")
            })
            .addCase(getDataFromApiInChinese.fulfilled, (state, action) => {
                state.inputDataInChinese = action?.payload?.data?.filter((rec) => rec.language === "Chinese")
            })

            .addCase(deleteVcardData.fulfilled, (state, action) => {
                state.inputData = action?.payload?.data.filter((rec) => rec.language === "English")
                // console.log("In deleteVcardData, payload:", action.payload)
            })
            .addCase(deleteVcardDataInChinese.fulfilled, (state, action) => {
                state.inputDataInChinese = action?.payload?.data.filter((rec) => rec.language === "Chinese")
                // console.log("In deleteVcardData, payload:", action.payload)
            })

            .addCase(editVcardData.fulfilled, (state, action) => {
                state.inputData = action?.payload?.data.filter((rec) => rec.language === "English")
            })
            .addCase(editVcardDataInChinese.fulfilled, (state, action) => {
                state.inputDataInChinese = action?.payload?.data.filter((rec) => rec.language === "Chinese")
            })

            .addCase(addVcardData.fulfilled, (state, action) => {
                state.inputData = action?.payload?.data.filter((rec) => rec.language === "English")
            })
            .addCase(addVcardDataInChinese.fulfilled, (state, action) => {
                state.inputDataInChinese = action?.payload?.data.filter((rec) => rec.language === "Chinese")
            })

    }
})

export const getDataFromApi = createAsyncThunk(
    'posts/getDataFromApi',
    async () => {
        return await getData();
    }
)

export const getDataFromApiInChinese = createAsyncThunk(
    'posts/getDataFromApiInChinese',
    async () => {
        return await getData();
    }
)

export const deleteVcardData = createAsyncThunk(
    'delete/deleteVcardData',
    async (payload) => {
        return await deleteVcard(payload.id);
    }
)

export const deleteVcardDataInChinese = createAsyncThunk(
    'delete/deleteVcardDataInChinese',
    async (payload) => {
        return await deleteVcard(payload.id);
    }
)

export const editVcardData = createAsyncThunk(
    'edit/editVcardData',
    async (payload) => {
        // console.log("slice", payload)
        return await editVcard(payload);
    }
)

export const editVcardDataInChinese = createAsyncThunk(
    'edit/editVcardDataInChinese',
    async (payload) => {
        // console.log("slice", payload)
        return await editVcard(payload);
    }
)

export const addVcardData = createAsyncThunk(
    'add/addVcardData',
    async (payload) => {
        console.log("addVcardData", payload)
        return await addVcard(payload);
    }
)

export const addVcardDataInChinese = createAsyncThunk(
    'add/addVcardDataInChinese',
    async (payload) => {
        return await addVcard(payload);
    }
)

export const inputDataList = (state) => state.HomePageRecord.inputData;

export const inputDataInChineseList = (state) => state.HomePageRecord.inputDataInChinese;

export default HomeSlice.reducer;


