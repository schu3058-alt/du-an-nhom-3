const GioHangModel = require('./gioHang.model');

function tinhTongTien(danhSach) {
  return danhSach.reduce((tong, dong) => tong + dong.gia * dong.soLuong, 0);
}

const GioHangService = {
  xemGioHang(taiKhoanId) {
    const danhSach = GioHangModel.layGioHangTheoTaiKhoan(taiKhoanId);
    return { danhSach, tongTien: tinhTongTien(danhSach) };
  },

  themSanPham(taiKhoanId, { sanPhamId, soLuong }) {
    const danhSach = GioHangModel.themSanPham(taiKhoanId, sanPhamId, soLuong);
    return { danhSach, tongTien: tinhTongTien(danhSach) };
  },

  capNhatSoLuong(taiKhoanId, chiTietId, soLuong) {
    const danhSach = GioHangModel.capNhatSoLuong(taiKhoanId, chiTietId, soLuong);
    return { danhSach, tongTien: tinhTongTien(danhSach) };
  },

  xoaDong(taiKhoanId, chiTietId) {
    const danhSach = GioHangModel.xoaDong(taiKhoanId, chiTietId);
    return { danhSach, tongTien: tinhTongTien(danhSach) };
  },
};

module.exports = GioHangService;
