import React, { Fragment, useState } from 'react';
import { Tabs, Radio, Space } from 'antd';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import "../../HomePage/HomeMenu/HomeMenu.css"
import moment from 'moment';
const { TabPane } = Tabs;

// export default class HomeMenu extends React.PureComponent {


//     state = {
//         tabPosition: 'left',
//     };

//     changeTabPosition = e => {
//         this.setState({ tabPosition: e.target.value });
//     };
//     componentDidMount() {

//     }

//     renderHeThongRap = () => {
//         return this.props.arrRapChieu?.map((heThongRap, index) => {
//             let { tabPosition } = this.state;
//             return <TabPane tab={<img src={heThongRap.logo} className="rounded-full" width="50" />} key={index}>
//                 <Tabs tabPosition={tabPosition}>
//                     {heThongRap.lstCumRap?.map((cumRap, index) => {
//                         return <TabPane tab={
//                             <div style={{ width: '300px', display: 'flex' }} >
//                                 <img src="https://s3img.vcdn.vn/123phim/2018/09/ddc-dong-da-15379624326697.jpg" width="50" /> <br />
//                                 <div className="text-left ml-2 ">
//                                     {cumRap.tenCumRap}
//                                     <p className="text-red-200">Chi tiết</p>
//                                 </div>
//                             </div>
//                         }
//                             key={index}>
//                             {/* Load phim tương ứng */}
//                             {cumRap.danhSachPhim.slice(0, 4).map((phim, index) => {
//                                 return <Fragment key={index}>
//                                     <div className="my-5" >
//                                         <div style={{ display: 'flex' }}>
//                                             <img style={{ height: 75, width: 75 }} src={phim.hinhAnh} alt={phim.tenPhim} onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/75/75" }} />

//                                             <div className="ml-2">
//                                                 <h1 className="text-2xl text-green-700" >{phim.tenPhim}</h1>
//                                                 <p className='text-black'>{cumRap.diaChi}</p>
//                                                 <div className="grid grid-cols-6 gap-6">
//                                                     {phim.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {
//                                                         return <NavLink className="text-2xl text-green-400" to={`/checkout/${lichChieu.maLichChieu}`} key={index}>
//                                                             {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
//                                                         </NavLink>
//                                                     })}
//                                                 </div>
//                                             </div>


//                                         </div>

//                                     </div>
//                                     <hr />
//                                 </Fragment>
//                             })}


//                         </TabPane>

//                     })}
//                 </Tabs>


//             </TabPane>
//         })
//     }

//     render() {
//         // console.log(this.props, "props123");
//         const { tabPosition } = this.state;
//         return (

//             <Tabs tabPosition={tabPosition}>
//                 {this.renderHeThongRap()}
//             </Tabs>

//         );
//     }
// }



export default function HomeMenu(props) {


    const [tabPosition, changeTabPosition] = useState("left")


    const renderHeThongRap = () => {
        return props.arrRapChieu?.map((heThongRap, index) => {

            return (
                <TabPane tab={<img src={heThongRap.logo} className="rounded-full d-flex justify-center align-items-center" width="50" />} key={index}>
                    <Tabs tabPosition={tabPosition}>
                        {heThongRap.lstCumRap?.map((cumRap, index) => {
                            return <TabPane tab={
                                <div style={{ width: '300px', display: 'flex' }} >
                                    <img src="https://s3img.vcdn.vn/123phim/2018/09/ddc-dong-da-15379624326697.jpg" width="50" /> <br />
                                    <div className="text-left ml-2 ">
                                        {cumRap.tenCumRap}
                                        <p className="text-red-200">Chi tiết</p>
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

                        })}
                    </Tabs>


                </TabPane>
            )
        })
    }
    return (
        <div className=' w-full '>
            <Tabs>
                {renderHeThongRap()}
            </Tabs>
        </div>
    )
}



// export default function HomeMenu(props) {

//     //Nhận props từ CumRap_DanhSachPhimContainer


//     let { arrRapChieu } = props

//     console.log(arrRapChieu, "arrRapChieu");

//     //Render lịch chiếu phim theo từng phim
//     let dateFormat = 'hh:mm - DD/MM/YYYY'
//     const renderLichChieuPhim = () => {
//         return arrRapChieu?.map((heThongRap, index) => {
//             return <div key={index}>
//                 {heThongRap.lstCumRap?.map((cumRap, index) => {
//                     return <div key={index}>
//                         {cumRap.danhSachPhim?.map((phim, index) => {
//                             return <div key={index}>
//                                 {phim.lstLichChieuTheoPhim?.map((suat, index) => {
//                                     return <div
//                                         key={index}
//                                     >
//                                         <Link to={`/dat-ve/${suat.maLichChieu}`}>
//                                             <button
//                                                 className='rounded bg-gray-100 text-rose-500 font-bold duration-300 hover:bg-rose-500 hover:text-white hover:shadow-lg
//     m-1 px-0.5
//     md:text-xs md:w-fit md:h-10 md:m-2 md:py-0 
//     lg:text-sm lg:w-40 lg:h-8 lg:m-2 lg:py-1'
//                                             >
//                                                 {moment(suat.ngayChieuGioChieu).format(dateFormat)}
//                                             </button>
//                                         </Link>
//                                     </div>
//                                 })}
//                             </div>
//                         })}
//                     </div>
//                 })}
//             </div>
//         })
//     }

//     //Render danh sách phim theo cụm rạp đang chọn
//     const renderDanhSachPhim = () => {
//         return arrRapChieu.map((phim, index) => {
//             return <div
//                 key={index}
//                 className='
//           w-full my-5
//           md:w-full md:h-fit md:my-5 md:grid md:grid-cols-12 md:border-b md:border-b-gray-200
//           lg:w-full lg:h-64 lg:my-5 lg:grid lg:grid-cols-12 lg:border-b lg:border-b-gray-200'
//             >
//                 <div className='
//           w-full h-40 overflow-hidden
//           md:col-span-3 md:h-fit md:flex md:items-center md:justify-center
//           lg:col-span-3 lg:h-fit lg:flex lg:items-center lg:justify-center'>
//                     <img className='
//             w-11/12 mx-auto
//             md:w-48 md:h-full
//             lg:w-48 lg:h-full'
//                         src={phim.hinhAnh} />
//                 </div>
//                 <div className='
//           w-full
//           md:col-span-9
//           lg:col-span-9'>
//                     <Link to={`/phim/${phim.maPhim}`}>
//                         <p className='font-bold text-rose-500 hover:underline
//               w-full text-xl text-center
//               md:w-11/12 md:mx-auto md:mb-2 md:text-left
//               lg:w-11/12 lg:mx-auto lg:mb-2 lg:text-left'>
//                             {phim.tenPhim}
//                         </p>
//                     </Link>
//                     <div className='
//             w-full h-fit grid grid-flow-col grid-rows-3 justify-items-center overflow-y-none overflow-x-scroll
//             md:w-11/12 md:mx-auto md:justify-items-start
//             lg:w-full lg:h-52 lg:grid lg:grid-flow-row lg:grid-cols-3 lg:overflow-y-scroll lg:overflow-x-none lg:justify-items-start'>
//                         {renderLichChieuPhim(phim.lstLichChieuTheoPhim)}
//                     </div>
//                 </div>
//             </div>
//         })
//     }


//     return (
//         <div className='danh-sach-phim-container-main-div w-full'>
//             {renderDanhSachPhim()}
//         </div>
//     )
// }

