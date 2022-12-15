import React from 'react';
import { Tabs } from 'antd';
import PhimSlider from './PhimSlider';
import { useNavigate } from 'react-router-dom';
import '../css/DanhSachPhimHomePage.css';
import _ from 'lodash';
const { TabPane } = Tabs;

export default function DanhSachPhimHomePage(props) {

    const navigate = useNavigate();

    //Props nhận từ HomePage
    let { danhSachPhim } = props;


    //Truyền thêm key number & tab name vào danh sách phim
    let phanLoaiPhim = [ //Tạo danh sách phân loại hạng mục phim
        {
            id: 'dangChieu',
            name: 'Phim đang chiếu',
            biDanh: 'phim-chieu-rap',
        },
        {
            id: 'sapChieu',
            name: 'Phim sắp chiếu',
            biDanh: 'phim-sap-chieu',
        },
    ];

    let tabValue = phanLoaiPhim.map((hangMuc, index) => { //Thêm key number vào danh sách phân loại phim
        let renderKey = () => { // Tạo key number tuỳ theo số lượng danh sách phân loại hạng mục phim
            for (let i = 0; i < phanLoaiPhim.length; i++) {
                let a = 1;
                return a = a + index;
            };
        };
        return {
            id: hangMuc.id,
            name: hangMuc.name,
            biDanh: hangMuc.biDanh,
            key: renderKey(),
        };
    });

    let danhSachPhimTab = tabValue.map((item, index) => {// Phân loại danh sách phim theo hạng mục
        return {
            id: item.id,
            name: item.name,
            key: item.key,
            biDanh: item.biDanh,
            DSPhim: _.size(danhSachPhim) > 1 ? danhSachPhim.filter(phim => {
                let theLoai = '';
                if (phim.dangChieu) {
                    theLoai = 'dangChieu';
                } else {
                    theLoai = 'sapChieu';
                }
                return theLoai === item.id;
            }) : [],
        };
    });

    //Render danh sách phim theo phân loại hạng mục
    const renderDanhSachPhim = () => {
        return danhSachPhimTab.map((item, index) => {
            return <TabPane tab={item.name} key={item.key} className='flex flex-wrap justify-center'>
                <PhimSlider
                    DSPhim={item.DSPhim}
                />
                <button
                    className='px-5 py-2 mx-1 rounded-xl font-bold text-base bg-rose-500 text-white duration-1000 border border-transparent hover:border-gray-300 hover:bg-white hover:text-rose-500'
                    onClick={() => { navigate(`/${item.biDanh}`) }}
                >
                    XEM TẤT CẢ
                </button>
            </TabPane>
        })
    };

    return (
        <div className='danh-sach-phim-main-div my-5'>
            <Tabs defaultActiveKey="1" centered>
                {renderDanhSachPhim()}
            </Tabs>
        </div>
    )
};