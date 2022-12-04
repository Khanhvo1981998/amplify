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
import "./Detail.css"
import HOCTrailerModal from '../../HOC/HOCTrailerModal';
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
    // console.log({ filmDetail });
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
        <div className=" ">
            {filmDetail ? (
                <div className=" bg-zinc-900 relative">


                    <section
                        className="nmtitle-section section-hero"
                        id="section-hero"
                        data-uia="section-hero"
                    >
                        <div className="hero-container" data-uia="hero-container">
                            <div className="info-container">

                                <div className="details-container">
                                    <div className="title-info text-white" data-uia="title-info">
                                        <h1 className="title-title text-white" data-uia="title-info-title">
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
                                        <div
                                            className="title-info-metadata-wrapper"
                                            data-uia="title-info-metadata-wrapper"
                                        >
                                            <span
                                                className="title-info-metadata-item item-year"
                                                data-uia="item-year"
                                            >
                                                2022
                                            </span>
                                            <span role="presentation" className="info-spacer">
                                                {" "}
                                                |{" "}
                                            </span>
                                            <span
                                                className="title-info-metadata-item item-maturity"
                                                data-uia="item-maturity"
                                            >
                                                <span className="maturity-rating">
                                                    <span className="screen-reader-text">
                                                        Xếp hạng độ tuổi:
                                                    </span>
                                                    <span className="maturity-number">13+ </span>
                                                </span>
                                            </span>
                                            <span role="presentation" className="info-spacer">
                                                {" "}
                                                |{" "}
                                            </span>
                                            <span
                                                className="title-info-metadata-item item-runtime"
                                                data-uia="item-runtime"
                                            >
                                                <span className="duration">1g 43ph</span>
                                            </span>
                                            <span role="presentation" className="info-spacer">
                                                {" "}
                                                |{" "}
                                            </span>
                                            <a
                                                className="title-info-metadata-item item-genre"
                                                href="https://www.netflix.com/vn/browse/genre/1365"
                                                data-uia="item-genre"
                                            >
                                                Hành động &amp; phiêu lưu
                                            </a>
                                        </div>
                                        <div
                                            className="title-info-synopsis-talent"
                                            data-uia="title-info-synopsis-talent"
                                        >
                                            <div
                                                className="title-info-synopsis"
                                                data-uia="title-info-synopsis"
                                            >
                                                {filmDetail?.moTa}
                                            </div>
                                            <div className="title-info-talent">
                                                <div className="title-data-info-item item-starring">
                                                    <span className="title-data-info-item-label">
                                                        Diễn viên chính:
                                                    </span>
                                                    <span
                                                        className="title-data-info-item-list"
                                                        data-uia="info-starring"
                                                    >
                                                        Nikolaj Coster-Waldau,Joe Cole,Heida Reed
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex gap-2 items-center text-slate-300 text-xl font-semibold">
                                                <span className="">Đánh giá:</span>
                                                <div>
                                                    <RatingExampleStar />
                                                </div>
                                            </div>
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
                                </div>
                            </div>
                            <div className="hero-image-container">
                                <div
                                    className="hero-image hero-image-desktop"
                                    style={{
                                        display: "none",
                                        backgroundImage: `url(${filmDetail.hinhAnh})`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover"
                                    }}
                                />
                            </div>
                        </div>

                    </section>

                    <div name="showTimeContainer" className=' bg-white mt-10'>
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


    )
}










