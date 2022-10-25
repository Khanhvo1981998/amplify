import { useNavigate } from "react-router";
import { qlDatVe } from "../../services/QuanLyDatVeService";
import { SET_CHI_TIET_PHONG_VE } from "./TYPES/QuanLyDatVeType";


const history = useNavigate


export const laychiTietPhongVeAction = (maLichChieu) => {

    return async dispatch => {
        try {
            const result = await qlDatVe.layChiTietPhongVe(maLichChieu);
            console.log(result, "result");
            //Lấy được dữ liệu từ api về  => reducer
            if (result.status === 200) {
                dispatch({
                    type: SET_CHI_TIET_PHONG_VE,
                    chiTietPhongVe: result.data.content
                });
            }
            console.log("phong ve", result.data.content);

        }
        catch (errors) {
            console.log("errorss", errors);
            console.log('errors', errors.response?.data)

        }

    }
}