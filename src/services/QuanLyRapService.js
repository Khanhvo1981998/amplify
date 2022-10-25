
import { GROUP_ID_RAP_PHIM } from '../util/Config';
import { baseService } from './baseServices'


export class QuanLyRapService extends baseService {
    constructor() {
        super();
    };

    layDanhSachRap = () => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID_RAP_PHIM}`)
    };

    layThongTinLichChieuPhim = (maPhim) => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
    }


}

export const qlRapService = new QuanLyRapService();   
