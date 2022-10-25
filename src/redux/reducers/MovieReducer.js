import { GET_MOVIE_API } from "../constants/MovieConst";

let initialState = {
    movieList: [],
};

const MovieReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_MOVIE_API:
            state.movieList = action.payload
            return { ...state }

        default:
            return state;
    }

};

export default MovieReducer;