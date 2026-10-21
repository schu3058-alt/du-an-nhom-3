const ThongBaoModel = require('./thongBao.model');

const ThongBaoService = {
  layTheoTaiKhoan: (taiKhoanId) => ThongBaoModel.layTheoTaiKhoan(taiKhoanId),
  taoThongBaoChoDonHang(taiKhoanId, trangThaiDonHang) {
    const noiDung = `Don hang cua ban vua chuyen sang trang thai: ${trangThaiDonHang}`;
    return ThongBaoModel.taoMoi({ taiKhoanId, noiDung });
  },
  danhDauDaDoc(id, taiKhoanId) {
    return ThongBaoModel.danhDauDaDoc(id, taiKhoanId);
  },
};

module.exports = ThongBaoService;
