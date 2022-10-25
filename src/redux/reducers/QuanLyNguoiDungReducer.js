
import { TOKEN, USER_LOGIN } from "../../util/Config";
import { DANG_NHAP } from "../actions/TYPES/QuanLyNguoiDungType";


let user = {}
if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}

let stateDefault = {
    userLogin: user,

};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case DANG_NHAP: {
            const { thongTinDangNhap } = action;
            localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap))
            localStorage.setItem(TOKEN, thongTinDangNhap.accessToken)

            return { ...state, userLogin: thongTinDangNhap }
        }
        default: return { ...state }
    }

};
