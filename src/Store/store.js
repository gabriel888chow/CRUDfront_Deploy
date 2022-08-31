import { configureStore } from "@reduxjs/toolkit";
import vCardReducer from './Slices/vCardSlice';
import HomePageReducer from '../Components/Home/HomeSlice';
import OrcidReducer from '../Components/ORCID/OrcidSlice';
import loginReducer from '../login/loginSlice';
import OrcidSvgReducer from "../Components/ORCID/OrcidSvgSlice";
import CreateVcardSvgReducer from "../Components/Create/CreateSvgSlice";

const store = configureStore({
    reducer: {
        vCardQrcodes: vCardReducer,
        HomePageRecord: HomePageReducer,
        orcidRecord: OrcidReducer,
        login: loginReducer,
        orcidSvgQrcode: OrcidSvgReducer,
        createVcardSvg: CreateVcardSvgReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({

            serializableCheck: false,
        }),
});

export default store;