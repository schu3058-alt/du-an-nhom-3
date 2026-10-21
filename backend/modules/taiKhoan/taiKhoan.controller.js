// Xu ly request/response cho cac route tai khoan
const TaiKhoanService = require('./taiKhoan.service');
const { thanhCong, thatBai } = require('../../tienIch/dinhDangPhanHoi');

const TaiKhoanController = {
  async dangKy(yeuCau, phanHoi, tiepTheo) {
    try {
      const ketQua = await TaiKhoanService.dangKy(yeuCau.body);
      return thanhCong(phanHoi, ketQua, 'Dang ky thanh cong', 201);
    } catch (loi) {
      return tiepTheo(loi);
    }
  },

  async dangNhap(yeuCau, phanHoi, tiepTheo) {
    try {
      const ketQua = await TaiKhoanService.dangNhap(yeuCau.body);
      return thanhCong(phanHoi, ketQua, 'Dang nhap thanh cong');
    } catch (loi) {
      return tiepTheo(loi);
    }
  },

  layHoSoHienTai(yeuCau, phanHoi, tiepTheo) {
    try {
      const hoSo = TaiKhoanService.layHoSo(yeuCau.nguoiDung.id);
      return thanhCong(phanHoi, hoSo);
    } catch (loi) {
      return tiepTheo(loi);
    }
  },

  capNhatHoSoHienTai(yeuCau, phanHoi, tiepTheo) {
    try {
      const hoSo = TaiKhoanService.capNhatHoSo(yeuCau.nguoiDung.id, yeuCau.body);
      return thanhCong(phanHoi, hoSo, 'Cap nhat ho so thanh cong');
    } catch (loi) {
      return tiepTheo(loi);
    }
  },
};

module.exports = TaiKhoanController;
