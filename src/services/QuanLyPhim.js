
import { GROUP_ID } from '../util/Config';
import { baseService } from './baseServices'


export class QuanLyPhim extends baseService {
  constructor() {
    super();
  };

  layDanhSachBanner = () => {
    return this.get(`/api/QuanLyPhim/LayDanhSachBanner`)
  };

  layDanhSachPhim = () => {
    return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`)
  }
}

export const qlPhimService = new QuanLyPhim();


