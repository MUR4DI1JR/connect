import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'slice',
    initialState:{
        active : true
    },
    reducers:{
        openHandle(state){
            if(state.active){
                state.active = state.active = false
            }else {
                state.active = state.active = true
            }
        },
    }
});
export default slice.reducer;
export const {openHandle} = slice.actions;