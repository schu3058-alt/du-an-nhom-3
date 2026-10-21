const ThanhToanModel = require('./thanhToan.model');
const DonHangModel = require('../donHang/donHang.model');

const ThanhToanService = {
  taoThanhToan({ donHangId, phuongThuc }) {
    const donHang = DonHangModel.timTheoId(donHangId);
    if (!donHang) {
      const loi = new Error('Khong tim thay don hang');
      loi.maTrangThai = 404;
      throw loi;
    }
    return ThanhToanModel.taoBanGhi({ donHangId, phuongThuc, soTien: donHang.tongTien });
  },

  xacNhanThanhCong(id) {
    const banGhi = ThanhToanModel.capNhatTrangThai(id, 'da_thanh_toan');
    DonHangModel.capNhatTrangThai(banGhi.donHangId, 'dang_giao');
    return banGhi;
  },

  layTheoDonHang(donHangId) {
    return ThanhToanModel.timTheoDonHang(donHangId);
  },
};

module.exports = ThanhToanService;
