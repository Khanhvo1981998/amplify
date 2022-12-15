import React, { Fragment, useState } from 'react';
import { Tabs, Radio, Space } from 'antd';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import "../../HomePage/HomeMenu/HomeMenu.css"
import moment from 'moment';
const { TabPane } = Tabs;





export default function HomeMenu(props) {


    const [tabPosition, changeTabPosition] = useState("left")


    const renderHeThongRap = () => {
        return props.arrRapChieu?.map((heThongRap, index) => {

            return (
                <TabPane className='tabpane-scroll'
                    tab={
                        <img src={heThongRap.logo} className="rounded-full d-flex justify-center align-items-center" width="50" />} key={index}>
                    <Tabs tabPosition={tabPosition}>
                        {heThongRap.lstCumRap?.map((cumRap, index) => {
                            return (
                                <TabPane scroll={{ x: 1500, y: 300 }}
                                    tab={
                                        <div style={{ width: '300px', display: 'flex' }} >
                                            <img src="https://s3img.vcdn.vn/123phim/2018/09/ddc-dong-da-15379624326697.jpg" width="50" /> <br />
                                            <div >
                                                <div className="text-left ml-2  ">
                                                    {cumRap.tenCumRap}
                                                    <p className="text-red-200">Chi tiết</p>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    key={index}>
                                    {/* Load phim tương ứng */}
                                    {cumRap.danhSachPhim.slice(0, 4).map((phim, index) => {
                                        return <Fragment key={index}>
                                            <div className="my-5" >
                                                <div style={{ display: 'flex' }}>
                                                    <img style={{ height: 75, width: 75 }} src={phim.hinhAnh} alt={phim.tenPhim} onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/75/75" }} />

                                                    <div className="ml-2">
                                                        <h1 className="text-2xl text-green-700" >{phim.tenPhim}</h1>
                                                        <p className='text-black'>{cumRap.diaChi}</p>
                                                        <div className="grid grid-cols-4 gap-6">
                                                            {phim.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {
                                                                return <NavLink className=" text-2xl text-green-400" to={`/checkout/${lichChieu.maLichChieu}`} key={index}>
                                                                    <button style={{ height: 50 }} className=' rounded bg-gray-100 text-rose-500 font-bold duration-300 hover:bg-red-500 hover:text-black hover:shadow-lg
                                                                                                        m-1 px-0.5 md:text-xs md:w-fit md:h-10 md:m-2 md:py-0 lg:text-sm lg:w-40 lg:h-8 lg:m-2 lg:py-1'>


                                                                        {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                                    </button>
                                                                </NavLink>
                                                            })}
                                                        </div>
                                                    </div>


                                                </div>

                                            </div>
                                            <hr />
                                        </Fragment>
                                    })}


                                </TabPane>
                            )

                        })}
                    </Tabs>


                </TabPane>
            )
        })
    }
    return (
        <div className=' w-full '>
            <Tabs tabPosition={tabPosition}>
                {renderHeThongRap()}
            </Tabs>
        </div>
    )
}
