
import Axios from 'axios';
import { connect, useSelector, useDispatch } from "react-redux";
import RSlick from './RSlick/RSlick';
import HomeCarousel from './Carousel/HomeCarousel';
import { getDanhSachPhimAction } from '../../redux/actions/QuanLyPhimAction';
import React, { useEffect } from 'react'
import HomeMenu from './HomeMenu/HomeMenu';
import { getQuanLyRapAction } from '../../redux/actions/QuanLyRapAction';
import Background from '../../img/galaxy.jpg'
import DanhSachPhimHomePage from './DanhSachPhimHomePage/DanhSachPhimHomePage';



export default function HomePage(props) {

    const { arrFilm } = useSelector(state => state.QuanLyPhimReducer)


    const { arrRapChieu } = useSelector(state => state.QuanLyRapReducer)



    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getDanhSachPhimAction)

        dispatch(getQuanLyRapAction)

    }, [])

    return (
        <div className='page'
        // style={{ backgroundImage: `url(${Background})`, backgroundSize: "cover", backgroundRepeat: `no-repeat`, backgroundPosition: `center` }}
        >
            <div>
                <HomeCarousel />
            </div>
            <section className=''>
                <div className="">
                    <DanhSachPhimHomePage danhSachPhim={arrFilm} />
                    {/* <RSlick arrFilm={arrFilm} /> */}

                </div>
            </section>
            <div className='mx-36 bg-white shadow p-3 mb-5 bg-white rounded'>
                <HomeMenu arrRapChieu={arrRapChieu} />
            </div>
        </div>
    )
}


