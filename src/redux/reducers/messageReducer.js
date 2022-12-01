import { createSlice } from "@reduxjs/toolkit";
const messageSlice = createSlice({
    name: "message",
    initialState: {
        type: "",
        info: "",
    },
    reducers: {
        setSuccessMessage: (state, action) => {
            state.type = "success";
            state.info = action.payload;
        },
        setErrorMessage: (state, action) => {
            state.type = "error";
            state.info = action.payload;
        },
        clearMessage: (state, action) => {
            state.type = "";
            state.info = "";
        },
    },
});
const { reducer, actions } = messageSlice;
export const { setSuccessMessage, setErrorMessage, clearMessage } = actions;
export default reducer;
