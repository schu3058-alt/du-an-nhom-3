const ThanhToanService = require('./thanhToan.service');
const { thanhCong } = require('../../tienIch/dinhDangPhanHoi');

const ThanhToanController = {
  taoThanhToan(yeuCau, phanHoi, tiepTheo) {
    try {
      return thanhCong(phanHoi, ThanhToanService.taoThanhToan(yeuCau.body), 'Da tao yeu cau thanh toan', 201);
    } catch (loi) {
      return tiepTheo(loi);
    }
  },
  xacNhanThanhCong(yeuCau, phanHoi, tiepTheo) {
    try {
      return thanhCong(phanHoi, ThanhToanService.xacNhanThanhCong(yeuCau.params.id), 'Xac nhan thanh toan thanh cong');
    } catch (loi) {
      return tiepTheo(loi);
    }
  },
  layTheoDonHang(yeuCau, phanHoi, tiepTheo) {
    try {
      return thanhCong(phanHoi, ThanhToanService.layTheoDonHang(yeuCau.params.donHangId));
    } catch (loi) {
      return tiepTheo(loi);
    }
  },
};

module.exports = ThanhToanController;
