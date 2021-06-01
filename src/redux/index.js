import {combineReducers, configureStore} from "@reduxjs/toolkit";
import sliceReducer from "./sliceReducer";

const rootReducer = combineReducers({
    slice : sliceReducer
});

export const store = configureStore({
    reducer: rootReducer
});