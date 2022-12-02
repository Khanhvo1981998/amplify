
import { useDispatch } from "react-redux";
import Login from "../pages/Login/Login";
import TrailerModal from "../component/Modal/TrailerModal/TrailerModal";
import Register from "../pages/Register/Register";


export default function HOCTrailerModal() {

    const dispatch = useDispatch();

    return (
        <div>{/* Button trigger modal */}
            <button
                onClick={() => {
                    dispatch({
                        type: 'OPEN_TRAILER',
                        Component: <TrailerModal />
                    })
                }}
                type="button" className="self-center px-8 py-3 rounded text-white border border-warning" data-toggle="modal" data-target="#modelId">
                Xem Trailer
            </button>


        </div>

    )
}