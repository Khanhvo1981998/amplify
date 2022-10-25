
import { qlRapService } from "../../services/QuanLyRapService";
import { SET_CHI_TIET_PHIM, SET_CUM_RAP, SET_RAP_CHIEU } from "./TYPES/ActionType";



export const getQuanLyRapAction = async (dispatch) => {
    try {
        const result = await qlRapService.layDanhSachRap();
        if (result.status === 200) {
            dispatch({
                type: SET_RAP_CHIEU,
                arrRapChieu: result.data.content
            })
        }
        console.log("quan ly rap", result);
    } catch (error) {
        console.log(error);
    }
}

export const layThongTinChiTietPhim = (id) => {
    return async dispatch => {
        try {
            const result = await qlRapService.layThongTinLichChieuPhim(id);
            //Lấy được dữ liệu từ api về  => reducer
            if (result.status === 200) {
                dispatch({
                    type: SET_CHI_TIET_PHIM,
                    filmDetail: result.data.content
                })
            }
            console.log("cum rap", result);

        }
        catch (errors) {
            console.log('errors', errors.response?.data)

        }
    }


}