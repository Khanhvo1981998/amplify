
import { useDispatch } from "react-redux";
import TrailerModal from "../Modal/TrailerModal/TrailerModal";
import Login from "../Login/Login";
import Register from "../Register/Register";


export default function HOCmodal() {

    const dispatch = useDispatch();

    return (
        <div>{/* Button trigger modal */}
            <button
                onClick={() => {
                    dispatch({
                        type: 'OPEN_FORM',
                        Component: <Login />
                    })
                }}
                type="button" className="self-center px-8 py-3 rounded text-white border border-warning" data-toggle="modal" data-target="#modelId">
                Đăng nhập
            </button>
            <button
                onClick={() => {
                    dispatch({
                        type: 'OPEN_FORM',
                        Component: <Register />
                    })
                }}
                type="button" className="self-center px-8 py-3 rounded text-white border border-warning" data-toggle="modal" data-target="#modelId">
                Đăng ký
            </button>

        </div>

    )
}