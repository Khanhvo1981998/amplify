import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuanLyRapAction } from "../../../redux/actions/QuanLyRapAction";
import Modal from "../Modal";

export default function TrailerModal() {
    const filmDetail = useSelector(state => state.QuanLyPhimReducer.filmDetail)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getQuanLyRapAction)
    }, [])

    return (
        <div class="modal-body">
            <iframe id="Geeks3" width="1000" height="350"
                src={filmDetail.trailer}

                frameborder="0" allowfullscreen>
            </iframe>
        </div>


    );
}