
import { ThongTinDatVe } from '../_core/models/ThongTinDatVe';
import { baseService } from './baseServices'


export class QuanLyDatVeService extends baseService {
    constructor() {
        super();
    };

    layChiTietPhongVe = (maLichChieu) => { // ma lich chieu lay tu url
        return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    };

    datVe = (thongTinDatVe = new ThongTinDatVe()) => {
        return this.post(`/api/QuanLyDatVe/DatVe`, thongTinDatVe)
    }
}

export const qlDatVe = new QuanLyDatVeService();   
