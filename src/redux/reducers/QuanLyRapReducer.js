import { SET_CUM_RAP, SET_RAP_CHIEU } from "../actions/TYPES/ActionType";


const stateDefault = {
    arrRapChieu: [],
    arrListCumRap: [],
}


export const QuanLyRapReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_RAP_CHIEU:
            state.arrRapChieu = action.arrRapChieu
            return { ...state }
        case SET_CUM_RAP:
            state.arrListCumRap = action.arrListCumRap
            return { ...state }

        default:
            return { ...state }

    }
};

