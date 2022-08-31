import { createSlice } from "@reduxjs/toolkit";
// import { useSelector } from 'react-redux';


 const initialState = {
     vCardQrcodes: [],
     vCardQrcodesInChinese: [],
};

const vCardSlice = createSlice({
    name: "vCardQrcodes",
    initialState,
    reducers: {
        createVcardQrCode (state, action) {
            console.log(action.payload, "createVcardQrCode")
            state.vCardQrcodes.push(action.payload);
        }, 
        createVcardQrCodeInChinese (state, action) {
            state.vCardQrcodesInChinese.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(createVcardQrCode, (state, action) => {
            // console.log(action.payload, "createVcardQrCode")
            state.vCardQrcodes.push(action.payload);
        })
        .addCase(createVcardQrCodeInChinese, (state, action) => {
            state.vCardQrcodesInChinese.push(action.payload);
        });
    }
})

// console.log(vCardSlice, "vCardSlice");

export const { createVcardQrCode, createVcardQrCodeInChinese } = vCardSlice.actions;

export const vCardQrcodeList = (state) => state.vCardQrcodes.vCardQrcodes;

export const vCardQrcodeListInChinese = (state) => state.vCardQrcodes.vCardQrcodesInChinese;

export default vCardSlice.reducer;