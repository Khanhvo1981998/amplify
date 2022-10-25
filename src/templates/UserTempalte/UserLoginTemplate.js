
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Modal from '../../pages/Modal/Modal'
import Header from '../../templates/HomeTemplate/Header/Header'
import Footer from "../../templates/HomeTemplate/Footer/Footer";

export default function UserLoginTemplate({ Component }) {
    const history = useNavigate()
    if (localStorage.getItem("userLogin")) {
        return (
            // history(-1)
            // <Navigate to='/checkout/' />
            <div>
                {/* <Header /> */}
                {/* <Modal /> */}
                <div>
                    <Component />
                </div>
                {/* <Footer /> */}
            </div>
        )
    } else {
        alert('Vui lòng đăng nhập')
        return <Navigate to='/login' />
    }
}
