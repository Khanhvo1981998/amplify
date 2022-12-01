
// import { useDispatch } from "react-redux";
// import TrailerModal from "../Modal/TrailerModal/TrailerModal";
import Login from "../Login/Login";
import Register from "../Register/Register";


// export default function HOCmodal() {

//     const dispatch = useDispatch();

//     return (
//         <div>{/* Button trigger modal */}
//             <button
//                 onClick={() => {
//                     dispatch({
//                         type: 'OPEN_FORM',
//                         Component: <Login />
//                     })
//                 }}
//                 type="button" className="self-center px-8 py-3 rounded text-white border border-warning" data-toggle="modal" data-target="#modelId">
//                 Đăng nhập
//             </button>
//             <button
//                 onClick={() => {
//                     dispatch({
//                         type: 'OPEN_FORM',
//                         Component: <Register />
//                     })
//                 }}
//                 type="button" className="self-center px-8 py-3 rounded text-white border border-warning" data-toggle="modal" data-target="#modelId">
//                 Đăng ký
//             </button>

//         </div>

//     )
// }

import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useMatch, useLocation } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { Dropdown, Menu, message, Space } from "antd";
import { logout } from "../../redux/reducers/authReducer";
import { localStoreService } from "../../services/localStoreService";
export default function HOCmodal() {
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)
    const [isLogged, setisLogged] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    let location = useLocation();
    console.log("userLogin", userLogin);

    // let handleLogout = useCallback(() => {
    //     return () => {
    //         window.location.href = "/"
    //     }
    // }, [])

    const menu = (
        <Menu className="w-100 p-0"
        // onClick={onClickUserDropdown} 
        >
            <div>
                {userLogin.accessToken ? (
                    <div className="">
                        <button
                            onClick={(e) => {
                                // localStoreService.removeUserLocal()
                                localStorage.clear();
                                window.location.reload();
                            }}
                            // onClick={handleLogout}
                            type="button" className=" w-100 self-center px-8 py-3 rounded text-white border " data-toggle="modal" data-target="#modelId">
                            <Menu.Item style={{ color: "red" }} key="logout">Đăng Xuất</Menu.Item>
                        </button>
                    </div>



                )
                    : (
                        <div>
                            <div>
                                <button
                                    onClick={() => {
                                        dispatch({
                                            type: 'OPEN_FORM',
                                            Component: <Register />
                                        })
                                    }}
                                    type="button" className="w-100 self-center px-8 py-3 rounded text-black border" data-toggle="modal" data-target="#modelId">
                                    <Menu.Item style={{ color: "" }} key="register">Đăng Ký</Menu.Item>
                                </button>
                            </div>
                            <div>
                                <button
                                    onClick={() => {
                                        dispatch({
                                            type: 'OPEN_FORM',
                                            Component: <Login />
                                        })
                                    }}
                                    type="button" className="self-center px-8 py-3 rounded text-white border " data-toggle="modal" data-target="#modelId">
                                    <Menu.Item style={{ color: "" }} key="login">Đăng Nhập</Menu.Item>
                                </button>
                            </div>
                        </div>
                    )}

            </div>
        </Menu>
    );
    return (
        <div>
            {
                userLogin.accessToken ? (
                    <Dropdown overlayStyle={{ display: "inline-block" }} overlay={menu} placement="bottomRight" arrow>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                <div className="flex gap-4 items-center">
                                    <Avatar size="large" icon={<UserOutlined />} />
                                    <span className="text-yellow-500 text-lg capitalize	">
                                        Hi, {userLogin.hoTen}
                                    </span>
                                </div>
                            </Space>
                        </a>
                    </Dropdown>
                ) : (
                    <Dropdown overlay={menu} placement="bottomRight" arrow>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                <div className="flex gap-4 items-center">
                                    <Avatar size="large" icon={<UserOutlined />} />
                                    {/* <button className="bg-yellow-500 hover:bg-yellow-400   rounded-md py-2 px-5 text-black text-lg font-semibold duration-300 ease-in-out">
                                        Đăng Nhập
                                    </button> */}
                                </div>
                            </Space>
                        </a>
                    </Dropdown>
                )
            }
        </div>
    );
}
