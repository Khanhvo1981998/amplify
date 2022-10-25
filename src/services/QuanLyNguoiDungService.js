
import { GROUP_ID } from '../util/Config';
import { baseService } from './baseServices'


export class QuanLyNguoiDungService extends baseService {
    constructor() {
        super();
    };

    layThongTinDangNhap = (thongTinDangNhap) => { //{taiKhoan:'' , matKhau:''}
        return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap)
    };
}

export const qlNguoiDung = new QuanLyNguoiDungService();   
