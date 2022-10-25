import { SET_CAROUSEL } from "../actions/TYPES/ActionType"



const stateDefault = {
    arrImg: [
        // {
        //     "maBanner": 1,
        //     "maPhim": 1282,
        //     "hinhAnh": "https://kamywallpaper.com/wp-content/kimetsu-no-yaiba-pc/kamy-hinh-anh-kimetsu-yaiba-1920-013.jpg"

        // }
    ]
}

export const CarouselReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_CAROUSEL:
            state.arrImg = action.arrImg
            return { ...state }

        default:
            return { ...state }

    }
}