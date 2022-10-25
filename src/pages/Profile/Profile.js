import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Profile() {

    if (localStorage.getItem('userLogin')) {
        return (
            <div>

            </div>
        )
    } else {
        alert('Vui lòng đăng nhập')
        return <Navigate to='/login' />
    }

}
