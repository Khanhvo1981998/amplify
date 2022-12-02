import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
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
import { NavLink, useNavigate, useMatch, useLocation, Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Select } from "antd";
import { Dropdown, Menu, message, Space } from "antd";
import { logout } from "../redux/reducers/authReducer";
import { localStoreService } from "../services/localStoreService";
import { useTranslation } from 'react-i18next';



export default function HOCmodal() {
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)


    const navigate = useNavigate();
    const dispatch = useDispatch();
    let location = useLocation();

    // Hook đa ngôn ngữ
    const { t, i18n } = useTranslation();
    const { Option } = Select;
    function handleChange(value) {
        return i18n.changeLanguage(value)
    }



    const menu = (
        <Menu className="w-100 p-0">
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
                            <Menu.Item style={{ color: "red" }} >{t('logout')}</Menu.Item>
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
                                    <Menu.Item style={{ color: "" }} >{t('register')}</Menu.Item>
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
                                    <Menu.Item style={{ color: "" }}>{t('login')}</Menu.Item>
                                </button>
                            </div>
                        </div>
                    )}

            </div>
        </Menu>
    );
    return (
        <div>
            <Select className="mr-2" defaultValue="vi" style={{ width: 100 }} onChange={handleChange}>
                <Option value="en">English</Option>
                <Option value="vi">Vietnam</Option>
                <Option value="chi">China</Option>
            </Select>
            {
                userLogin.accessToken ? (
                    <Dropdown overlayStyle={{ display: "" }} overlay={menu} placement="bottomRight" arrow>
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

                                </div>
                            </Space>
                        </a>
                    </Dropdown>
                )
            }
        </div>
    );
}
