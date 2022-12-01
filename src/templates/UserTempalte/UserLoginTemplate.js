
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Modal from '../../pages/Modal/Modal'
import Header from '../../templates/HomeTemplate/Header/Header'
import Footer from "../../templates/HomeTemplate/Footer/Footer";
// import { useSelector } from 'react-redux';
import { USER_LOGIN } from '../../util/Config';
import { message } from 'antd';

export default function UserLoginTemplate({ Component }) {
    const history = useNavigate()
    // const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)
    if (localStorage.getItem(USER_LOGIN)) {
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
        message.success('Vui lòng đăng nhập')
        return <Navigate to='/login' />
    }
}
