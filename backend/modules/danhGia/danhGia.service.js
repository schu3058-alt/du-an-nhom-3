const DanhGiaModel = require('./danhGia.model');
const lamSachHtml = require('../../tienIch/lamSachHtml');

const DanhGiaService = {
  layTheoSanPham: (sanPhamId) => DanhGiaModel.layTheoSanPham(sanPhamId),

  taoMoi(taiKhoanId, { sanPhamId, soSao, noiDung }) {
    return DanhGiaModel.taoMoi({ sanPhamId, taiKhoanId, soSao, noiDung: lamSachHtml(noiDung) });
  },

  xoa(id, taiKhoanId) {
    return DanhGiaModel.xoa(id, taiKhoanId);
  },
};

module.exports = DanhGiaService;
