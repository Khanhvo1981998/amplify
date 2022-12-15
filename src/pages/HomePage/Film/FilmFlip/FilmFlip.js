import React, { Fragment, useEffect, useState } from 'react'
import { PlayCircleOutlined } from '@ant-design/icons'
import '../FilmFlip/FilmFlip.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';


export default function Film_Flip(props) {
    const history = useNavigate
    const { item } = props;
    return (
        <div className="flip-card mt-3 ">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={item.hinhAnh} alt="Avatar" style={{ width: 300, height: 300 }} />
                </div>
                <div className="flip-card-back">
                    <div style={{ position: 'absolute', top: 0, left: 0 }} >
                        <img src={item.hinhAnh} alt="Avatar" style={{ width: 300, height: 300 }} onError={e => { e.target.onerror = null; e.target.src = 'https://picsum.photos/300/300'; }} />
                    </div>
                    <div className="w-full h-full" style={{ position: 'absolute', backgroundColor: 'rgba(0,0,0,.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div>
                            <div className="rounded-full cursor-pointer"><PlayCircleOutlined style={{ fontSize: '50px' }} /></div>
                            <div className="text-2xl mt-2 font-bold">{item.tenPhim}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-red-600'>
                <NavLink to={`/detail/${item.maPhim}`} >
                    <button className=" bg-red-600 text-white w-full h-10 rounded transition hover:shadow-xl ">
                        Đặt vé
                    </button>
                </NavLink>
            </div>

        </div>


    )
}




