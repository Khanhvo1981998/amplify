import { Tabs } from "antd";
import React, { Fragment, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getQuanLyRapAction, layThongTinChiTietPhim } from "../../redux/actions/QuanLyRapAction";
import { getDanhSachPhimAction } from "../../redux/actions/QuanLyPhimAction";
import { useState } from "react";
import { Tab, TabPane } from "semantic-ui-react";

export default function ShowTimeMovies({ arrRapChieu }) {

    const renderShowTime = () => {
        console.log(arrRapChieu, "showtime");
        return arrRapChieu.map((heThongRap, index) => {
            return (
                <TabPane tab={<img src={heThongRap.logo} className="rounded-full" width="50" />} key={index}>
                    <Tabs tabPosition="left">
                        {heThongRap.lstCumRap.map((cinema) => {
                            return (
                                <TabPane className="w-full"
                                    key={cinema.maCumRap}
                                    tab={
                                        <div className="flex gap-5 items-center justify-center ">
                                            <div>
                                                <img
                                                    src={cinema.hinhAnh}
                                                    alt=""
                                                    className="w-20 rounded-full"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-yellow-500 font-semibold text-left text-lg">
                                                    {cinema.tenCumRap}
                                                </h3>
                                                <p className="text-slate-200 text-left ">
                                                    {cinema.diaChi}
                                                </p>
                                            </div>
                                        </div>
                                    }
                                >
                                    <div className=" gap-2">
                                        {cinema.danhSachPhim.map(
                                            (showTime) => {
                                                return (

                                                    <div>
                                                        {showTime.lstLichChieuTheoPhim.slice(0, 8).map(
                                                            (showTimeList) => {
                                                                return (
                                                                    <div className="">
                                                                        <NavLink
                                                                            key={
                                                                                showTimeList.maLichChieu
                                                                            }
                                                                            to={`/checkout/${showTimeList.maLichChieu}`}
                                                                        >

                                                                            <div className=" grid grid-cols-3 col-span-2 py-2 px-5 bg-zinc-800  text-slate-200 text-xl hover:bg-yellow-400 hover:text-gray-900 duration-300 ease-in-out group">
                                                                                <span>
                                                                                    {moment(
                                                                                        showTimeList.ngayChieuGioChieu
                                                                                    ).format(
                                                                                        "DD/MM/YYYY"
                                                                                    )}

                                                                                </span>
                                                                                <span> - </span>
                                                                                <span className="text-yellow-500 font-bold group-hover:text-gray-900">
                                                                                    {moment(showTimeList.ngayChieuGioChieu).format('hh:mm A')}
                                                                                </span>
                                                                            </div>
                                                                        </NavLink>
                                                                    </div>
                                                                )

                                                            }
                                                        )}
                                                    </div>





                                                );
                                            }
                                        )}
                                    </div>
                                </TabPane>
                            );
                        })}
                    </Tabs>
                </TabPane>
            )
        });
    };

    return (
        <div>
            <div className="">
                <h2 className="text-slate-200 text-3xl text-center font-bold">
                    Lịch Chiếu
                </h2>
                <div className="mt-10">
                    <Tabs centered>{renderShowTime()}</Tabs>

                </div>
            </div>
        </div>
    );
}
