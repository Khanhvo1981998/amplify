
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { USER_LOGIN } from '../../util/Config';
import { message } from 'antd';

export default function UserLoginTemplate({ Component }) {
    const history = useNavigate()

    if (localStorage.getItem(USER_LOGIN)) {
        return (

            <div>

                <div>
                    <Component />
                </div>

            </div>
        )
    } else {
        message.success('Vui lòng đăng nhập')
        return <Navigate to='/login' />
    }
}
