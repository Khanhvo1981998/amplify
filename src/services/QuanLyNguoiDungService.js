
import { GROUP_ID } from '../util/Config';
import { baseService } from './baseServices'
import { localStoreService } from "./localStoreService";

export class QuanLyNguoiDungService extends baseService {
    constructor() {
        super();
    };

    layThongTinDangNhap = (thongTinDangNhap) => { //{taiKhoan:'' , matKhau:''}
        return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap)
    };
    layThongTinDangKy = (thongTinDangKy) => { //{taiKhoan:'' , matKhau:''}
        return this.post(`/api/QuanLyNguoiDung/DangKy`, thongTinDangKy)
    };

    layThongTinNguoiDung = () => {
        return this.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`)
    };
    logout = () => {
        localStoreService.removeUserLocal();
    };
}

export const qlNguoiDung = new QuanLyNguoiDungService();   
