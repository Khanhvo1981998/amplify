import { Carousel } from "antd";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { getCarouselAction } from "../../../redux/actions/CarouselAction";
import "../Carousel/HomeCarousel.css"


const contentStyle = {
    height: '650px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: "center",
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center",
    dotsClass: "button__bar",

}
export default function HomeCarousel() {

    const dispatch = useDispatch()
    const { arrImg } = useSelector(state => state.CarouselReducer)
    // useEffect se tu kich hoat khi component load ra
    useEffect(() => {
        // const action = getCarouselAction

        dispatch(getCarouselAction)
    }, []);

    const renderImg = () => {
        return arrImg.map((item, index) => {
            return (
                <div key={index}>
                    <div className="" style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}>
                        <img src={item.hinhAnh} alt={item.hinhAnh} className="w-full opacity-0" />
                    </div>
                </div >
            )
        })
    }

    return (
        <Carousel style={{ position: "relative", zIndex: 0 }} >
            {renderImg()}

        </Carousel>
    )
}

