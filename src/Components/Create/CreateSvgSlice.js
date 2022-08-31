import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    addVcard,
} from '../../api/DataSvg';

const initialState = {
    vCardSvg: "",
    vCardSvgChinese: "", // initialState 要比個false value
};

export const CreateSvgSlice = createSlice ({
    name: "createVcardSvg",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addVcardSvg.fulfilled, (state, action) => {
                state.vCardSvg = {
                    firstname: action?.payload?.data?.firstname,
                    lastname: action?.payload?.data?.lastname,
                    department: action?.payload?.data?.department,
                    jobtitle: action?.payload?.data?.jobtitle,
                    email: action?.payload?.data?.email,
                    officephonenumber: action?.payload?.data?.officephonenumber,
                    mobilephonenumber: action?.payload?.data?.mobilephonenumber,
                    address: action?.payload?.data?.address,
                    language: "English",
                }
            })
            .addCase(addVcardSvgChinese.fulfilled, (state, action) => {
                // console.log(action.payload, "addVcardSvgChinese")
                state.vCardSvgChinese = {
                    firstname: action?.payload?.data?.firstname,
                    lastname: action?.payload?.data?.lastname,
                    department: action?.payload?.data?.department,
                    jobtitle: action?.payload?.data?.jobtitle,
                    email: action?.payload?.data?.email,
                    officephonenumber: action?.payload?.data?.officephonenumber,
                    mobilephonenumber: action?.payload?.data?.mobilephonenumber,
                    // organization: action?.payload?.data?.lastname,
                    // urladdress: action?.payload?.data?.lastname,
                    address: action?.payload?.data?.address,
                    language: "Chinese",
                }
            })
    }
})

export const addVcardSvg = createAsyncThunk (
    'add/addVcardSvg',
    async (payload) => {
        return await addVcard(payload);
    }
)

export const addVcardSvgChinese = createAsyncThunk (
    'add/addVcardSvgChinese',
    async (payload) => {
        console.log(payload, "payload")
        return await addVcard(payload);
    }
)

export const vCardSvg = (state) => state.createVcardSvg.vCardSvg;

export const vCardSvgChinese = (state) => state.createVcardSvg.vCardSvgChinese;

export default CreateSvgSlice.reducer;
