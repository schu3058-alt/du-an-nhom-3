const KhuyenMaiModel = require('./khuyenMai.model');

const KhuyenMaiService = {
  layTatCa: () => KhuyenMaiModel.layTatCa(),

  taoMoi(duLieu) {
    const daTonTai = KhuyenMaiModel.timTheoMa(duLieu.ma);
    if (daTonTai) {
      const loi = new Error('Ma khuyen mai da ton tai');
      loi.maTrangThai = 409;
      throw loi;
    }
    return KhuyenMaiModel.taoMoi(duLieu);
  },

  apDung(ma, tongTienGoc) {
    const khuyenMai = KhuyenMaiModel.timTheoMa(ma);
    const hienTai = new Date();
    if (!khuyenMai || hienTai < new Date(khuyenMai.ngayBatDau) || hienTai > new Date(khuyenMai.ngayKetThuc)) {
      const loi = new Error('Ma khuyen mai khong hop le hoac da het han');
      loi.maTrangThai = 400;
      throw loi;
    }
    const soTienGiam = (tongTienGoc * khuyenMai.phanTramGiam) / 100;
    return { tongTienGoc, soTienGiam, tongTienSauGiam: tongTienGoc - soTienGiam };
  },

  xoa(id) {
    return KhuyenMaiModel.xoa(id);
  },
};

module.exports = KhuyenMaiService;
