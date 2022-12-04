import { qlPhimService } from "../../services/QuanLyPhim";
import { SET_RSLICK } from "./TYPES/QuanLyPhimType";



export const getDanhSachPhimAction = async (dispatch) => {
    try {
        const result = await qlPhimService.layDanhSachPhim();
        dispatch({
            type: SET_RSLICK,
            arrFilm: result.data.content
        })
        // console.log("abc", result);
    } catch (error) {
        // console.log(error);
    }
}