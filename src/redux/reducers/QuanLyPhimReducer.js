import { SET_CHI_TIET_PHIM, SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU } from "../actions/TYPES/ActionType";
import { SET_RSLICK } from "../actions/TYPES/QuanLyPhimType"

const stateDefault = {
    arrFilm: [
        // {
        //     "maPhim": 1407,
        //     "tenPhim": "Jurassic World",
        //     "biDanh": "jurassic-world",
        //     "trailer": "https://www.youtube.com/embed/RFinNxS5KN4",
        //     "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/jurassicworld.jpg",
        //     "moTa": "A new theme park is built on the original site of Jurassic Park. Everything is going well until the park's newest attraction--a genetically modified giant stealth killing machine--escapes containment and goes on a killing spree.",
        //     "maNhom": "GP04",
        //     "ngayKhoiChieu": "2019-07-29T00:00:00",
        //     "danhGia": 5,
        //     "hot": false,
        //     "dangChieu": true,
        //     "sapChieu": false
        // }
    ],
    dangChieu: true,
    sapChieu: true,
    arrFilmDefault: [],
    filmDetail: {},
}


export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_RSLICK:
            state.arrFilm = action.arrFilm
            state.arrFilmDefault = state.arrFilm
            return { ...state }
        case SET_FILM_DANG_CHIEU:
            state.dangChieu = !state.dangChieu
            state.arrFilm = state.arrFilmDefault.filter(film => film.dangChieu === state.dangChieu)
            return { ...state }

        case SET_FILM_SAP_CHIEU:
            state.sapChieu = !state.sapChieu
            state.arrFilm = state.arrFilmDefault.filter(film => film.sapChieu === state.sapChieu)
            return { ...state }

        case SET_CHI_TIET_PHIM:
            state.filmDetail = action.filmDetail
            return { ...state }

        default:
            return { ...state }

    }
};