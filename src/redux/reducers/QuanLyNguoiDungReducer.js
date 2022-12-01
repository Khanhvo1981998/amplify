
import { TOKEN, USER_LOGIN } from "../../util/Config";
import { DANG_NHAP, SET_THONG_TIN_NGUOI_DUNG } from "../actions/TYPES/QuanLyNguoiDungType";


let user = {}
if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}

let stateDefault = {
    userLogin: user,
    thongTinNguoiDung: {},

};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case DANG_NHAP: {
            const { thongTinDangNhap } = action;
            localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap))
            localStorage.setItem(TOKEN, thongTinDangNhap.accessToken)

            return { ...state, userLogin: thongTinDangNhap }
        }

        case SET_THONG_TIN_NGUOI_DUNG: {
            state.thongTinNguoiDung = action.thongTinNguoiDung

            return { ...state }
        }
        default: return { ...state }
    }

};
