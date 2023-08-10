import { NavLink, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import '../Login/Login.css'
import { useDispatch, useSelector } from "react-redux";
import { dangNhapAction } from "../../redux/actions/QuanLyNguoiDungAction";
import { useFormik } from "formik";
import { message } from "antd";
import { localStoreService } from "../../services/localStoreService";

export default function Login(props) {

    const dispatch = useDispatch()
    const history = useNavigate()

    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)
    // console.log(userLogin, "userlogin");

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },
        onSubmit: values => {

            const action = dangNhapAction(values);
            dispatch(action)
            if (userLogin) {
                message.success("Đăng nhập thành công")
            }
            message.success("Đăng nhập thất bại")

            // console.log("value", values);
            setTimeout(() => {
                history()
            }, 1000);
        },


    },);

    useEffect(() => {
        if (userLogin.accessToken) {
            history("/")
        }
    }, [])


    // const [userLogin, setUserLogin] = useState({ userName: '', passWord: '' })
    // console.log(userLogin);

    // const handleChange = (event) => {
    //     const { name, value } = event.target
    //     setUserLogin({
    //         ...userLogin,
    //         [name]: value
    //     })
    // }

    // const handleLogin = (event) => {
    //     event.preventDefault()
    //     if (userLogin.userName === 'khanhdev' && userLogin.passWord === 'khanhdev') {
    //         // goBack : login thanh cong thi chuyen ve trang truoc do
    //         history(-1)
    //         // Tro ve 1 trang chi chinh (Home)
    //         // history('/home')
    //         localStorage.setItem('userLogin', JSON.stringify(userLogin))
    //         alert('Login success');
    //         console.log("asdad", userLogin);
    //     } else {
    //         alert("Login Fail")
    //         return
    //     }
    // }



    return (

        <form onSubmit={formik.handleSubmit} className="vh-100" style={{ backgroundColor: '#9A616D' }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: '1rem' }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp" alt="login form" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="p-4 text-black card-body p-lg-5">

                                        <div >
                                            <div className="pb-1 mb-3 d-flex align-items-center">
                                                <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }} />
                                                <span className="mb-0 h1 fw-bold">Login</span>
                                            </div>
                                            <h5 className="pb-3 mb-3 fw-normal" style={{ letterSpacing: 1 }}>Sign into your account</h5>
                                            <div className="mb-4 form-outline form-group">
                                                <input name='taiKhoan' type="username" id="form2Example17" placeholder="Nhập tài khoản"
                                                    onChange={formik.handleChange}
                                                    className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form2Example17">Username</label>
                                            </div>
                                            <div className="mb-4 form-outline form-group">
                                                <input name='matKhau' type="password" id="form2Example27" placeholder="Nhập mật khẩu"
                                                    onChange={formik.handleChange}
                                                    className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form2Example27">Password</label>
                                            </div>
                                            <div className="pt-1 mb-4 form-group">
                                                <button
                                                    // onClick={formik ? history(-1) : ""}
                                                    className="btn btn-dark btn-lg btn-block" >Login</button>
                                            </div>
                                            <a className="small text-muted" href="#!">Forgot password?</a>
                                            <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <NavLink to="/register" style={{ color: '#393f81' }}>Register here</NavLink></p>
                                            <a href="#!" className="small text-muted">Terms of use.</a>
                                            <a href="#!" className="small text-muted">Privacy policy</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form >


    )
}