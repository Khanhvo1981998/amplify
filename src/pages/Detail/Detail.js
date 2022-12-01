import React, { useEffect } from 'react'
import "../Detail/Detail.css"
import { Tabs, Radio, Space } from 'antd';
import { connect, useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import moment from 'moment';
import { SET_CHI_TIET_PHIM } from '../../redux/actions/TYPES/ActionType';
import { getQuanLyRapAction, layThongTinChiTietPhim } from '../../redux/actions/QuanLyRapAction';
import { useState } from "react";
import { FaYoutube } from "react-icons/fa";
import RatingExampleStar from '../HomePage/Film/Rating/Ratings';
import { lowerCaselizeString } from ".././../util/stringFormatUtils";
import HomeMenu from '../HomePage/HomeMenu/HomeMenu';
import { getDanhSachPhimAction } from '../../redux/actions/QuanLyPhimAction';
import TrailerModal from '../Modal/TrailerModal/TrailerModal';

import HOCTrailerModal from '../HOC/HOCTrailerModal';
import ShowTimeMovies from './ShowTimeMovies';
import {
    animateScroll as scroll,
    scroller,
    Element,
    Button,
} from "react-scroll";


const { TabPane } = Tabs;
export default function Detail() {


    const filmDetail = useSelector(state => state.QuanLyPhimReducer.filmDetail)
    const { arrRapChieu } = useSelector(state => state.QuanLyRapReducer)
    // console.log("arrRapChieu", arrRapChieu);
    console.log({ filmDetail });
    const dispatch = useDispatch()
    const { id } = useParams();

    const scrollTo = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    };
    useEffect(() => {
        // lay thong tin param tu url tai useRoute Detail   
        dispatch(layThongTinChiTietPhim(id))
        dispatch(getDanhSachPhimAction)

        dispatch(getQuanLyRapAction)
    }, [])

    return (
        // <div className="form-container  " style={{ backgroundImage: `url(${filmDetail.hinhAnh})` }}>
        //     <div className="form">
        //         <div className='box'>
        //             <div className="grid grid-col-12 card-detail ">
        //                 <div className="col-span-3 ml-5 col-start-4 d-flex w-300">
        //                     <img className='col-span-1' src={filmDetail.hinhAnh} style={{ width: 250, height: 260, borderRadius: 10 }} />

        //                     <div className=' col-span-2 mt-2 p-10 w-70 '>
        //                         <p className='text-3xl'> Ngày chiếu: {filmDetail.ngayKhoiChieu} </p>
        //                         <p className='text-3xl'>Tên Phim: {filmDetail.tenPhim}</p>
        //                         <p className='text-2xl'> {filmDetail.moTa} </p>
        //                     </div>


        //                     <div>
        //                         <div className="clearfix ">
        //                             <div className="c100 p50 big green">
        //                                 <span>50%</span>
        //                                 <div className="slice">
        //                                     <div className="bar" />
        //                                     <div className="fill" />
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>

        //                 </div>
        //                 <div>

        //                 </div>
        //             </div>

        //             <div className="mt-10 ml-72 w-2/3 container bg-white px-5 py-5" >
        //                 <Tabs defaultActiveKey="1" centered >
        //                     <TabPane tab="Lịch chiếu" key="1" style={{ minHeight: 300 }}>
        //                         logo Rạp
        //                         <div >
        //                             <Tabs tabPosition={'left'} >

        //                                 <div> ádjf</div>

        //                             </Tabs>
        //                         </div>
        //                     </TabPane>
        //                     <TabPane tab="Thông tin" key="2" style={{ minHeight: 300 }}>
        //                         Thông tin
        //                     </TabPane>
        //                     <TabPane tab="Đánh giá" key="3" style={{ minHeight: 300 }}>
        //                         Đánh giá
        //                     </TabPane>
        //                 </Tabs>
        //             </div>
        //         </div>


        //     </div>
        // </div>


        <div className="form-container  " style={{ backgroundImage: `url(${filmDetail.hinhAnh})` }}>
            <div className="form d-flex align-items-center">
                <div className="container mx-auto py-10 px-5 min-h-screen">
                    {/* {loading && <Spinner size="large" />} */}
                    {filmDetail ? (
                        <div className=" bg-zinc-900 relative pt-20">

                            <div className="flex gap-10 ">
                                <div className="w-1/3">
                                    <img
                                        src={filmDetail?.hinhAnh}
                                        alt=""
                                        className="block w-full rounded-lg h-[500px]"
                                    />
                                </div>
                                <div className="w-2/3 flex flex-col">
                                    <div className="flex-1">
                                        <h1 className="text-4xl text-black-500 font-bold capitalize">
                                            {(filmDetail?.tenPhim)}
                                        </h1>
                                        <p className="text-slate-200 text-xl font-semibold">
                                            <span className="text-slate-300 ">
                                                Khởi chiếu:
                                            </span>
                                            <span className="text-black-500 ml-5 text-2xl font-bold">
                                                {moment(
                                                    filmDetail?.ngayKhoiChieu
                                                ).format("DD/MM/YYYY")}
                                            </span>
                                        </p>
                                        <p className="text-slate-300 text-lg italic">
                                            {filmDetail?.moTa}
                                        </p>
                                        <div className="flex gap-2 items-center text-slate-300 text-xl font-semibold">
                                            <span className="">Đánh giá:</span>
                                            <div>
                                                <RatingExampleStar />
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className="my-10 flex gap-5">
                                        <button
                                            className=" py-2 px-5   text-slate-200 bg-red-600     hover:bg-red-700  rounded-md font-semibold text-xl duration-300 ease-linear flex gap-2 justify-center items-center"
                                        >
                                            <FaYoutube></FaYoutube>
                                            <span>Xem trailer</span>
                                        </button>

                                        <button
                                            to="showTimeContainer"
                                            className=" py-2 px-5   text-gray-900 bg-yellow-500     hover:bg-yellow-400  rounded-md font-semibold text-xl duration-300 ease-linear flex gap-2 justify-center items-center"
                                        // onClick={() => {
                                        //     scrollTo("showTimeContainer");
                                        // }}
                                        >
                                            <span>Mua vé</span>
                                        </button>


                                    </div> */}

                                    <div className='my-10 flex gap-5'>
                                        <HOCTrailerModal />
                                        <button
                                            to="showTimeContainer"
                                            className=" py-2 px-5   text-gray-900 bg-yellow-500     hover:bg-yellow-400  rounded-md font-semibold text-xl duration-300 ease-linear flex gap-2 justify-center items-center"
                                            onClick={() => {
                                                scrollTo("showTimeContainer");
                                            }}
                                        >
                                            <span>Mua vé</span>
                                        </button>
                                    </div>

                                </div>

                            </div>
                            <div name="showTimeContainer" className=' bg-white'>
                                <ShowTimeMovies arrRapChieu={arrRapChieu} />
                            </div>

                        </div>
                    ) : (
                        <div className="w-full">
                            <p className="text-4xl text-slate-200 text-center">
                                Không tìm thấy phim này, vui lòng quay trở lại
                                <NavLink to="/">
                                    <span className="text-yellow-500 block text-center">
                                        Trang chủ
                                    </span>
                                </NavLink>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}










