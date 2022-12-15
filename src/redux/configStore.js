import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import MovieReducer from "./reducers/MovieReducer";
import { ModalReducer } from "./reducers/ModalReducer";
import { CarouselReducer } from "./reducers/CarouselReducer";
import { QuanLyPhimReducer } from "../redux/reducers/QuanLyPhimReducer";
import { QuanLyRapReducer } from "../redux/reducers/QuanLyRapReducer";
import { QuanLyNguoiDungReducer } from "../redux/reducers/QuanLyNguoiDungReducer";
import { QuanLyDatVeReducer } from "../redux/reducers/QuanLyDatVeReducer";
import { LoadingReducer } from "../redux/reducers/LoadingReducer";
import thunk from "redux-thunk";




const rootReducer = combineReducers({
    //reducer con khai báo tại đây
    CarouselReducer,
    MovieReducer,
    ModalReducer,
    applyMiddleware,
    QuanLyPhimReducer,
    QuanLyRapReducer,
    QuanLyNguoiDungReducer,
    QuanLyDatVeReducer,
    LoadingReducer,

})

const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__?.()));

export default store;