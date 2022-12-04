import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieService } from "../service/movieService";
export const getBannerList = createAsyncThunk(
    "movie/bannerList",
    async (thunkAPI) => {
        try {
            const res = await movieService.getBannerList();

            const data = res.data.content;
            return data;
        } catch (err) {
            // const message = err.response.data.content;
            // thunkAPI.dispatch(setErrorMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);
export const getMovieList = createAsyncThunk(
    "movie/movieList",
    async (thunkAPI) => {
        try {
            const res = await movieService.getMovieList();
            const data = res.data.content;
            return data;
        } catch (err) {
            // const message = err.response.data.content;
            // thunkAPI.dispatch(setErrorMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        bannerList: [],
        movieList: [],
        loading: false,
    },
    extraReducers: {
        [getBannerList.pending]: (state, action) => {
            state.loading = true;
        },
        [getBannerList.fulfilled]: (state, action) => {
            state.loading = false;
            state.bannerList = action.payload;
        },
        [getMovieList.pending]: (state, action) => {
            state.loading = true;
        },
        [getMovieList.fulfilled]: (state, action) => {
            state.loading = false;
            state.movieList = action.payload;
        },
    },
});
const { reducer } = movieSlice;
export default reducer;
