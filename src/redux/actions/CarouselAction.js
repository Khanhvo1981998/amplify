import { qlPhimService } from "../../services/QuanLyPhim";
import { SET_CAROUSEL } from "./TYPES/ActionType";


export const getCarouselAction = async (dispatch) => {
    try {
        const result = await qlPhimService.layDanhSachBanner()
        dispatch({
            type: SET_CAROUSEL,
            arrImg: result.data.content
        })
        // // console.log("abc", result);
    } catch (error) {
        // console.log(error);
    }
}