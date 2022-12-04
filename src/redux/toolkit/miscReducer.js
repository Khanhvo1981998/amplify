import { createSlice } from "@reduxjs/toolkit";
const miscSlice = createSlice({
    name: "misc",
    initialState: {
        welcomeScreen: true,
    },
    reducers: {
        setWelcomeScreen: (state, action) => {
            state.welcomeScreen = action.payload;
        },
    },
});
const { reducer, actions } = miscSlice;
export const { setWelcomeScreen } = actions;
export default reducer;
