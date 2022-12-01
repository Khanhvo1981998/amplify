import { useNavigate } from "react-router";
import { qlNguoiDung } from "../../services/QuanLyNguoiDungService";
import { DANG_NHAP, SET_THONG_TIN_NGUOI_DUNG } from "./TYPES/QuanLyNguoiDungType";

const history = useNavigate


export const dangNhapAction = (thongTinDangNhap) => {

    return async dispatch => {
        try {
            const result = await qlNguoiDung.layThongTinDangNhap(thongTinDangNhap);
            //Lấy được dữ liệu từ api về  => reducer
            if (result.data.statusCode === 200) {
                dispatch({
                    type: DANG_NHAP,
                    thongTinDangNhap: result.data.content
                });
                history(-1)
            }
            console.log("dang nhap", result.data.content);

        }
        catch (errors) {
            console.log('errors', errors.response?.data)

        }

    }
}
export const thongTinNguoiDungAction = () => {

    return async dispatch => {
        try {
            const result = await qlNguoiDung.layThongTinNguoiDung();
            //Lấy được dữ liệu từ api về  => reducer
            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data.content
                });

            }
            console.log("thongtinnguoidung", result.data.content);

        }
        catch (errors) {
            console.log('errors', errors.response?.data)

        }

    }
}