import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import { localStoreService } from "../../services/localStoreService";
import { qlNguoiDung } from "../../services/QuanLyNguoiDungService";

import { setSuccessMessage, setErrorMessage } from "./messageReducer";
export const login = createAsyncThunk(
    "auth/login",
    async (thongTinDangNhap, thunkAPI) => {
        try {
            const res = await qlNguoiDung.layThongTinDangNhap(thongTinDangNhap);
            const data = res.data.content;
            localStoreService.setUserLocal(data);
            thunkAPI.dispatch(setSuccessMessage("Login successfully!"));
            return { user: data };
        } catch (err) {
            const message = err.response.data.content;
            thunkAPI.dispatch(setErrorMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);
export const register = createAsyncThunk(
    "auth/register",
    async (registerData, thunkAPI) => {
        try {
            const data = await qlNguoiDung.register(registerData);
            thunkAPI.dispatch(setSuccessMessage("Sign up successfully!"));
        } catch (err) {
            const message = err.response.data.content;
            thunkAPI.dispatch(setErrorMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);
export const logout = createAction("auth/logout", () => {
    qlNguoiDung.logout();
    return {
        payload: {},
    };
});
// export const getUserInfo = createAsyncThunk(
//     "auth/getUserInfo",
//     async (thunkAPI) => {
//         try {
//             const userLocal = localStoreService.getUserLocal();
//             if (userLocal) {
//                 const res = await qlNguoiDung.getUserInfo(
//                     userLocal.accessToken
//                 );
//                 const userInforamtion = res.data.content;
//                 return {
//                     userInfo: {
//                         taiKhoan: userInforamtion.taiKhoan,
//                         taiKhoan: userInforamtion.taiKhoan,
//                         taiKhoan: userInforamtion.taiKhoan,
//                     },
//                     accessToken: userLocal.accessToken,

//                 };
//             } else {
//                 return null;
//             }
//         } catch (err) {
//             const message = err.response.data.content;
//             thunkAPI.dispatch(setErrorMessage(message));
//             thunkAPI.dispatch(logout());
//             return thunkAPI.rejectWithValue();
//         }
//     }
// );
// because the api is not have a function that check validatious of accessToken
// so if accessToken is exist, the login state of user is setted to true
let initialState = {};
const setupInitialState = () => {
    const localUser = localStoreService.getUserLocal();
    let isLoggedIn = false;
    if (localUser) {
        isLoggedIn = true;
    }
    initialState = {
        ...localStoreService.getUserLocal(),
        isLoggedIn: isLoggedIn,
        isRegisterred: false,
        loading: false,
    };
};
setupInitialState();
const authSlice = createSlice({
    name: "auth",
    initialState: initialState,

    reducers: {
        logout: (state, action) => {
            state.accessToken = null;
            state.userInfo = {};
            state.isLoggedIn = false;
            state.isRegisterred = false;
            state.loading = false;
        },
    },
    extraReducers: {
        [register.pending]: (state, action) => {
            state.loading = true;
            state.isLoggedIn = false;
        },
        [register.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
            state.isRegisterred = true;

            state.loading = false;
        },
        [register.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.isRegisterred = false;
            state.loading = false;
        },
        [login.pending]: (state, action) => {
            state.loading = true;
        },
        [login.fulfilled]: (state, action) => {
            const { accessToken, ...info } = action.payload.user;

            state.accessToken = accessToken;
            state.userInfo = info;
            state.isLoggedIn = true;
            state.loading = false;
        },
        [login.rejected]: (state, action) => {
            state.accessToken = null;
            state.userInfo = {};
            state.isLoggedIn = false;
            state.loading = false;
        },
        // [getUserInfo.pending]: (state, action) => {
        //     state.loading = true;
        // },
        // [getUserInfo.fulfilled]: (state, action) => {
        //     const { accessToken, ...info } = action.payload.user;

        //     state.accessToken = accessToken;
        //     state.userInfo = info;
        //     state.isLoggedIn = true;
        //     state.loading = false;
        // },
        // [getUserInfo.rejected]: (state, action) => {
        //     state.accessToken = null;
        //     state.userInfo = {};
        //     state.isLoggedIn = false;
        //     state.loading = false;
        // },
    },
});
const { reducer } = authSlice;
export default reducer;
