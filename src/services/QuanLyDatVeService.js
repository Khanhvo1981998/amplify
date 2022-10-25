
import { baseService } from './baseServices'


export class QuanLyDatVeService extends baseService {
    constructor() {
        super();
    };

    layChiTietPhongVe = (maLichChieu) => { // ma lich chieu lay tu url
        return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    };
}

export const qlDatVe = new QuanLyDatVeService();   
