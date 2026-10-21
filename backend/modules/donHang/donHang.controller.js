const DonHangService = require('./donHang.service');
const { thanhCong } = require('../../tienIch/dinhDangPhanHoi');

const DonHangController = {
  xacNhanDatHang(yeuCau, phanHoi, tiepTheo) {
    try {
      const donHang = DonHangService.xacNhanDatHang(yeuCau.nguoiDung.id, yeuCau.body);
      return thanhCong(phanHoi, donHang, 'Dat hang thanh cong', 201);
    } catch (loi) {
      return tiepTheo(loi);
    }
  },

  layDonHangCuaToi(yeuCau, phanHoi, tiepTheo) {
    try {
      return thanhCong(phanHoi, DonHangService.layDonHangCuaToi(yeuCau.nguoiDung.id));
    } catch (loi) {
      return tiepTheo(loi);
    }
  },

  layChiTiet(yeuCau, phanHoi, tiepTheo) {
    try {
      return thanhCong(phanHoi, DonHangService.layChiTiet(yeuCau.params.id));
    } catch (loi) {
      return tiepTheo(loi);
    }
  },

  layTatCa(yeuCau, phanHoi, tiepTheo) {
    try {
      return thanhCong(phanHoi, DonHangService.layTatCa(yeuCau.query));
    } catch (loi) {
      return tiepTheo(loi);
    }
  },

  capNhatTrangThai(yeuCau, phanHoi, tiepTheo) {
    try {
      const donHang = DonHangService.capNhatTrangThai(yeuCau.params.id, yeuCau.body.trangThai);
      return thanhCong(phanHoi, donHang, 'Cap nhat trang thai don hang thanh cong');
    } catch (loi) {
      return tiepTheo(loi);
    }
  },
};

module.exports = DonHangController;
