import React, { Fragment, useEffect, useState } from 'react'
// import LoadingOverlay from "react-loading-overlay";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from 'react-router';
import { datVeAction, laychiTietPhongVeAction } from '../../../redux/actions/QuanLyDatVeAction';
import { qlRapService } from '../../../services/QuanLyRapService';
import { style } from "../../Checkout/BookingSeats/Checkout.module.css";
import "../../Checkout/BookingSeats/Checkout.css"
import { Link } from 'react-router-dom';
import HOCmodal from '../../HOC/HOCmodal';
import { DAT_VE } from '../../../redux/actions/TYPES/QuanLyDatVeType';
// import SeatItem from "./SeatItem";
import Background from '../../../img/galaxy.jpg';
import _ from 'lodash';
import { ThongTinDatVe } from '../../../_core/models/ThongTinDatVe';
import { Tabs } from 'antd';
import { CloseOutlined, UserOutlined } from '@ant-design/icons';
import { USER_LOGIN } from '../../../util/Config';
import { thongTinNguoiDungAction } from '../../../redux/actions/QuanLyNguoiDungAction';
const { TabPane } = Tabs;





export default function Checkout(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    // const [loading, setLoading] = useState(false)
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)
    const { chiTietPhongVe, danhSachGheDangDat } = useSelector(state => state.QuanLyDatVeReducer)

    console.log({ chiTietPhongVe, danhSachGheDangDat });
    const { id } = useParams();
    console.log("uselogin", userLogin);


    // const getShowTimeDetail = async () => {
    //     try {
    //         setLoading(true);
    //         const res = await qlRapService.layThongTinLichChieuPhim(id);
    //         const data = res.data.content;
    //         setMovie(data.thongTinPhim);
    //         setSeats(data.danhSachGhe);
    //         setLoading(false);
    //     } catch (err) {
    //         console.log(err);
    //         setLoading(false);
    //     }
    // };

    useEffect(() => {
        const action = laychiTietPhongVeAction(id)
        dispatch(action)

    }, [])

    const { danhSachGhe, thongTinPhim } = chiTietPhongVe

    // const countTotalCost = () => {
    //     return bookingSeats
    //         .reduce((sum, seat) => {
    //             return sum + seat.giaVe;
    //         }, 0)
    //         .toLocaleString();
    // };
    // const isBooked = (seatCode) => {
    //     const seat = bookingSeats.find((seat) => seat.tenGhe === seatCode);
    //     if (!seat) return false;
    //     return true;
    // };
    // const bookSeat = (seatCode) => {
    //     const seatToBook = seats.find((seat) => seat.tenGhe === seatCode);
    //     if (seatToBook.taiKhoanNguoiDat) return false;
    //     else if (isBooked(seatCode)) {
    //         const newBookingSeat = bookingSeats.filter(
    //             (seat) => seat.tenGhe !== seatCode
    //         );
    //         setBookingSeats(newBookingSeat);
    //     } else {
    //         const seat = {
    //             giaVe: seatToBook.giaVe,
    //             tenGhe: seatToBook.tenGhe,
    //             maGhe: seatToBook.maGhe,
    //         };
    //         setBookingSeats([...bookingSeats, seat]);
    //     }
    // };
    const handleDatVe = () => {
        const thongTinDatVe = new ThongTinDatVe()
        // const { id } = useParams
        thongTinDatVe.maLichChieu = id
        thongTinDatVe.danhSachVe = danhSachGheDangDat
        console.log(thongTinDatVe, "thong tin dat ve");

        dispatch(datVeAction(thongTinDatVe)); //Gọi API đặt vé

        setTimeout(() => {

            // if (!loading) {

            //     setTimeout(() => {
            //         setLoading(true)
            //     }, 100);
            // }
            window.location.reload(false);
        }, 1000);
    };

    const renderSeat = () => {
        return danhSachGhe.map((ghe, index) => {

            let gheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
            let gheDaDat = ghe.daDat === true ? "gheDaDat" : ""
            let gheDangDat = ""
            let indexGheDangDat = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe)
            let gheDaDuocDat = '';

            if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
                gheDaDuocDat = "gheDaDuocDat"
            }


            if (indexGheDangDat != -1) {
                gheDaDat = "gheDangDat"
            }

            return (
                <Fragment key={index}>
                    <button onClick={() => {
                        dispatch({
                            type: DAT_VE,
                            gheDuocChon: ghe
                        })
                    }} disabled={ghe.daDat} className={`ghe ${gheVip} ${gheDaDat} ${gheDangDat} ${gheDaDuocDat}`} key={index}>
                        {ghe.daDat ? gheDaDuocDat != '' ? <UserOutlined style={{ marginBotton: 7.5, fontWeight: 'bold' }} /> : <CloseOutlined style={{ marginBotton: 7.5, fontWeight: 'bold' }} /> : ghe.stt}


                    </button>
                    {(index + 1) % 16 === 0 ? <br /> : ""}
                </Fragment>
            )
        })
    }


    return (


        <div className='' style={{ backgroundImage: `url(${Background})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <header className="p-4 dark:bg-gray-800 dark:text-gray-100 bg-black w-full opacity-50 z-10 ">

                <div className="container flex justify-between h-16 mx-auto">
                    <a rel="noopener noreferrer" href="/" aria-label="Back to homepage" className="icon text-decoration-none flex items-center p-2">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-8 h-8 dark:text-violet-400">
                        <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z" />
                        <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z" />
                    </svg> */}
                        <i className="fa fa-cube" />
                        I<b>Movies</b>
                    </a>
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex">
                            <Link to="/" className="nav-item nav-link active">MUA VÉ</Link>
                        </li>

                        <li className="flex">
                            <div className="nav-item dropdown">
                                <Link href="/gocdienanh" className="nav-link dropdown-toggle" data-toggle="dropdown">GÓC ĐIỆN ẢNH</Link>
                                <div className="dropdown-menu">
                                    <Link to="/theloaiphim" className="dropdown-item">THỂ LOẠI PHIM</Link>
                                    <Link to="/dienvien" className="dropdown-item">DIỄN VIÊN</Link>
                                    <Link to="/daoien" className="dropdown-item">ĐẠO DIỄN</Link>
                                    <Link to="/binhluanphim" className="dropdown-item">BÌNH LUẬN PHIM</Link>
                                    <Link to="/blogdienanh" className="dropdown-item">BLOG ĐIỆN ẢNH</Link>

                                </div>
                            </div>
                        </li>
                        <li className="flex">
                            <Link to="/contact" className="nav-item nav-link">HỖ TRỢ</Link>
                        </li>
                        <li className="flex">
                            <Link to="/myseat" className="nav-item nav-link">VÉ CỦA TÔI</Link>
                        </li>
                    </ul>
                    <div className="items-center flex-shrink-0 hidden lg:flex">
                        {/* <button className="self-center px-8 py-3 rounded text-white border border-warning">Sign in</button>
                    <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900 text-white border border-warning">Sign up</button> */}
                        {/* <HOCmodal /> */}
                    </div>
                    <button className="p-4 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </header>
            <div className=" mx-auto py-10 px-5 min-h-screen">


                <div className="flex gap-10  ">
                    <div className="w-2/3 text-slate-200 bg-dark rounded-top text-white ">

                        <div className="flex items-center justify-center mt-3 mb-5 gap-5 text-lg">
                            <div className="flex gap-2 items-center">
                                {/* <span className="bg-white w-[20px] h-[20px] rounded-full"></span> */}
                                <span style={{ backgroundColor: `rgb(243, 184, 8)` }} className=' w-7 h-7 rounded'>  </span>
                                <span>Ghế đã đặt</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                {/* <span className="bg-white w-[20px] h-[20px] rounded-full"></span> */}
                                <span style={{ backgroundColor: `rgb(244, 157, 26)` }} className=' w-7 h-7 rounded'>  </span>
                                <span>Ghế bạn đặt</span>
                            </div>
                            <div className="flex gap-2  items-center">
                                <span style={{ backgroundColor: `rgb(18, 176, 18)` }} className=" w-7 h-7 rounded"></span>
                                <span>Ghế đang đặt</span>
                            </div>
                            <div className="flex gap-2 item-cemter ">
                                <span className="bg-secondary w-7 h-7 rounded "></span>
                                <span>Ghế trống</span>
                            </div>
                            <div className="flex gap-2 item-cemter ">
                                <span style={{ backgroundColor: `rgb(228, 74, 8)` }} className=" w-7 h-7 rounded "></span>
                                <span>Ghế Vip</span>
                            </div>
                        </div>
                        <div className='border-blue-300  '>
                            <p className=" bg-zinc-800 text-slate-200 uppercase text-2xl text-center">
                                Màn Hình
                            </p>
                        </div>
                        <div className=" ml-8 d-block grid grid-cols-12  gap-5 bg-dark text-white">
                            {renderSeat()}
                        </div>
                    </div>
                    <div className="w-1/3  text-white bg-dark rounded ">
                        <div className=" rounded-lg bg-zinc-800 p-10">
                            <div className=''>
                                <img
                                    src={thongTinPhim.hinhAnh}
                                    alt=""
                                    className="block mx-auto max-w-[80%] max-h-[200px]"
                                />
                            </div>
                            <div className="mt-10 text-lg">
                                <p className="">
                                    <span>Phim: </span>
                                    <span className="font-semibold text-yellow-500 text-2xl">
                                        {thongTinPhim.tenPhim}
                                    </span>
                                </p>

                                <p className="">
                                    <span>Ngày: </span>
                                    <span className="font-semibold text-yellow-500">
                                        {thongTinPhim?.ngayChieu}
                                    </span>
                                </p>
                                <p className="">
                                    <span>Giờ Chiếu: </span>
                                    <span className="font-semibold text-yellow-500">
                                        {thongTinPhim?.gioChieu}
                                    </span>
                                </p>

                                <p className="">
                                    <span>Rạp: </span>
                                    <span className="font-semibold text-yellow-500">
                                        {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}
                                    </span>
                                </p>
                                <p className="">
                                    <span>Ghế đặt: </span>
                                    <span className="font-semibold text-yellow-500">
                                        {_.sortBy(danhSachGheDangDat, ['stt']).map((seat, index) => {
                                            return (
                                                <span className="mr-2">
                                                    {seat.tenGhe}
                                                    {(index + 1) % 10 === 0 ? <br /> : ""}
                                                </span>
                                            );
                                        })}
                                    </span>
                                </p>
                                <p className="">
                                    <span>Tổng tiền: </span>
                                    <span className="font-semibold text-yellow-500">
                                        {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                                            return tongTien += ghe.giaVe
                                        }, 0).toLocaleString()}
                                        <span className="ml-2">VND</span>
                                    </span>
                                </p>
                                <button
                                    className="block w-full bg-yellow-500 hover:bg-yellow-400   rounded-md py-2 px-5 text-black text-lg font-semibold duration-300 ease-in-out"
                                    onClick={handleDatVe}
                                >
                                    Thanh Toán
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function callback(key) {
    console.log(key);
}
// export default function Check(props) {


//     return (
//         <div className='p-5'>
//             <Tabs defaultActiveKey="1" onChange={callback}>
//                 <TabPane tab="01 GHẾ CHỌN & THANH TOÁN" key="1">
//                     <Checkout />
//                 </TabPane>
//                 <TabPane tab="02 KẾT QUẢ ĐẶT VÉ" key="2">
//                     <KetQuaDatVe />
//                 </TabPane>
//             </Tabs>
//         </div>
//     )

// }
// function KetQuaDatVe(props) {

//     const dispatch = useDispatch

//     const { thongTinNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer)

//     console.log("Thong Tin Nguoi Dung", thongTinNguoiDung);

//     // useEffect(() => {

//     //     const action = thongTinNguoiDungAction()
//     //     dispatch(action)
//     // }, [])
//     console.log("Thong Tin Nguoi Dung", thongTinNguoiDung);
//     return (

//         <div >
//             <Tabs style={{ alignItems: "center" }} defaultActiveKey="3" onChange={callback}>
//                 <TabPane style={{ fontSize: 30, fontFamily: "sans-serif" }} tab="LỊCH SỬ ĐẶT VÉ" key="1">
//                     <section className="text-gray-400 bg-gray-900 body-font">
//                         <div className="container px-5 py-24 mx-auto">
//                             <div className="flex flex-wrap -m-4">
//                                 <div className="p-4 md:w-1/3">
//                                     <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
//                                         <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
//                                         <div className="p-6">
//                                             <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
//                                             <h1 className="title-font text-lg font-medium text-white mb-3">The Catalyzer</h1>
//                                             <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
//                                             <div className="flex items-center flex-wrap ">
//                                                 <a className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">Learn More
//                                                     <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
//                                                         <path d="M5 12h14" />
//                                                         <path d="M12 5l7 7-7 7" />
//                                                     </svg>
//                                                 </a>
//                                                 <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
//                                                     <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
//                                                         <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
//                                                         <circle cx={12} cy={12} r={3} />
//                                                     </svg>1.2K
//                                                 </span>
//                                                 <span className="text-gray-500 inline-flex items-center leading-none text-sm">
//                                                     <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
//                                                         <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
//                                                     </svg>6
//                                                 </span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="p-4 md:w-1/3">
//                                     <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
//                                         <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/721x401" alt="blog" />
//                                         <div className="p-6">
//                                             <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
//                                             <h1 className="title-font text-lg font-medium text-white mb-3">The 400 Blows</h1>
//                                             <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
//                                             <div className="flex items-center flex-wrap">
//                                                 <a className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">Learn More
//                                                     <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
//                                                         <path d="M5 12h14" />
//                                                         <path d="M12 5l7 7-7 7" />
//                                                     </svg>
//                                                 </a>
//                                                 <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
//                                                     <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
//                                                         <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
//                                                         <circle cx={12} cy={12} r={3} />
//                                                     </svg>1.2K
//                                                 </span>
//                                                 <span className="text-gray-500 inline-flex items-center leading-none text-sm">
//                                                     <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
//                                                         <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
//                                                     </svg>6
//                                                 </span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="p-4 md:w-1/3">
//                                     <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
//                                         <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/722x402" alt="blog" />
//                                         <div className="p-6">
//                                             <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
//                                             <h1 className="title-font text-lg font-medium text-white mb-3">Shooting Stars</h1>
//                                             <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
//                                             <div className="flex items-center flex-wrap ">
//                                                 <a className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">Learn More
//                                                     <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
//                                                         <path d="M5 12h14" />
//                                                         <path d="M12 5l7 7-7 7" />
//                                                     </svg>
//                                                 </a>
//                                                 <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
//                                                     <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
//                                                         <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
//                                                         <circle cx={12} cy={12} r={3} />
//                                                     </svg>1.2K
//                                                 </span>
//                                                 <span className="text-gray-500 inline-flex items-center leading-none text-sm">
//                                                     <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
//                                                         <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
//                                                     </svg>6
//                                                 </span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>

//                 </TabPane>

//             </Tabs>
//         </div>
//     )

// }




