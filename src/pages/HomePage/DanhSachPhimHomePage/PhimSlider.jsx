import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import { Rate } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Dialog, Transition } from '@headlessui/react';
import '../css/PhimSlider.css';
import { useNavigate, Link, NavLink } from 'react-router-dom';
import useWindowDimensions from '../../../hook/useWindowDimensions';


export default function PhimSlider(props) {

    const navigate = useNavigate();

    //Props nhận từ DanhSachPhimHomePage
    let { DSPhim } = props;



    //Kiểm tra kích cỡ màn hình
    let checkScreenDimension = useWindowDimensions();
    //Quy định số lượng room card xuất hiện tuỳ theo kích cỡ màn hình
    let [currentScreenDimesion, setCurrentScreenDimesion] = useState(1);
    useEffect(() => { //Set lại giá trị currentScreenDimesion mỗi khi resize kích cỡ màn hình
        if (checkScreenDimension.width > 1024) {
            setCurrentScreenDimesion(5);
        };
        if (checkScreenDimension.width > 768 && checkScreenDimension.width <= 1024) {
            setCurrentScreenDimesion(4)
        };
        if (checkScreenDimension.width > 640 && checkScreenDimension.width <= 768) {
            setCurrentScreenDimesion(2)
        };
        if (checkScreenDimension.width > 320 && checkScreenDimension.width <= 640) {
            setCurrentScreenDimesion(1)
        };
    }, [checkScreenDimension]);

    //Điều khiển chuyển slide
    const customSlider = React.createRef();
    const goToNext = () => {
        customSlider.current.slickNext();
    };
    const goToPrevious = () => {
        customSlider.current.slickPrev();
    };

    //Custom tính năng slider
    const SliderSettings = {
        dots: false,
        infinite: DSPhim?.length > currentScreenDimesion ? true : false,
        speed: 500,
        slidesToShow: currentScreenDimesion,
        slidesToScroll: 1,

    };



    //render danh sách phim
    const dateFormat = 'DD/MM/YYYY'; //Định dạng thời gian ngày khởi chiếu

    const renderDanSachPhim = () => {
        if (DSPhim.length > 1) {
            return DSPhim.map((phim, index) => {
                return (
                    <div className='px-1 mb-5' key={index}>
                        <div
                            className=' movie-card bg-gray-800 border border-gray-300 rounded-xl shadow-lg mx-2 overflow-hidden group relative'
                        >
                            <div className='absolute top-1/4 z-0 w-full flex justify-center flex-wrap group-hover:border-b-orange-400 group-hover:z-10'>

                                {/* <button
                                    className='w-full my-2 mx-14 px-3 py-2 border border-rose-500 text-white rounded hover:border-transparent hover:bg-rose-500 hover:text-white duration-500 -translate-x-56 group-hover:translate-x-0'
                                    onClick={() => { navigate(`/checkout/${phim.maLichChieu}`) }}
                                >
                                    <NavLink className="text-white">
                                        Mua vé
                                    </NavLink>
                                </button> */}

                                <button
                                    className='w-full my-2 mx-14 px-3 py-2 border border-rose-500  text-pink-800 rounded hover:border-transparent hover:bg-rose-500 hover:text-white duration-500 translate-x-56 group-hover:translate-x-0'
                                    onClick={() => { navigate(`/detail/${phim.maPhim}`) }}
                                >
                                    Xem chi tiết
                                </button>
                            </div>
                            <div
                                className='w-full flex flex-wrap relative justify-center overflow-hidden'
                            >
                                <img
                                    src={phim.hinhAnh}
                                    className='w-full h-80 group-hover:scale-105'
                                />
                                <div className='absolute w-full h-80 group-hover:bg-black/60' />
                            </div>
                            <div
                                className='w-full my-5 flex flex-wrap justify-center'
                            >
                                <Link to={`/detail/${phim.maPhim}`}>
                                    <p className='w-full text-center text-1xl  text-red-900 font-bold hover:text-rose-500 duration-500'>
                                        {phim.tenPhim}
                                    </p>
                                </Link>
                                <p className='w-full my-2 text-center'>
                                    <Rate
                                        className='text-base text-rose-500'
                                        allowHalf
                                        disabled
                                        defaultValue={phim.danhGia / 2}
                                    /> {phim.danhGia / 2}/5
                                </p>
                                <p className='w-full text-center text-sm text-gray-500'>
                                    Ngày khởi chiếu: {moment(phim.ngayKhoiChieu).format(dateFormat)}
                                </p>
                            </div>
                        </div>
                    </div>

                )
            });
        };
    };

    return (
        <div className="w-11/12 mx-auto relative">
            <Fragment>
                <Slider
                    ref={customSlider}
                    {...SliderSettings}
                    className='w-full '
                >
                    {renderDanSachPhim()}

                </Slider>
                <button
                    className='absolute rounded-xl font-bold text-base bg-white text-rose-500 border border-gray-300 duration-1000 hover:bg-rose-500 hover:text-white hover:border-transparent
                    left-12 px-3 py-2 ml-0
                    md:left-1/3 md:px-3 md:py-2 md:ml-0
                    lg:left-1/3 lg:px-3 lg:py-2 lg:ml-20'
                    onClick={() => { goToPrevious() }}
                >
                    <FontAwesomeIcon icon={faArrowLeftLong} />
                </button>
                <button
                    className='absolute rounded-xl font-bold text-base bg-white text-rose-500 border border-gray-300 duration-1000 hover:bg-rose-500 hover:text-white hover:border-transparent
                    right-12 px-3 py-2 mr-0
                    md:right-1/3 md:px-3 md:py-2 md:mr-0
                    lg:right-1/3 lg:px-3 lg:py-2 lg:mr-20'
                    onClick={() => { goToNext() }}
                >
                    <FontAwesomeIcon icon={faArrowRightLong} />
                </button>
            </Fragment>


        </div>
    )
}
