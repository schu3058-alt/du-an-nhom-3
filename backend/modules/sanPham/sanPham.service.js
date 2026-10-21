const SanPhamModel = require('./sanPham.model');
const lamSachHtml = require('../../tienIch/lamSachHtml');

function kiemTraTonTai(id) {
  const sanPham = SanPhamModel.timTheoId(id);
  if (!sanPham) {
    const loi = new Error('Khong tim thay san pham');
    loi.maTrangThai = 404;
    throw loi;
  }
  return sanPham;
}

const SanPhamService = {
  timKiem: (dieuKien) => SanPhamModel.timKiem(dieuKien),
  layTheoId: (id) => kiemTraTonTai(id),

  taoMoi(duLieu) {
    return SanPhamModel.taoMoi({ ...duLieu, moTa: lamSachHtml(duLieu.moTa) });
  },

  capNhat(id, duLieu) {
    kiemTraTonTai(id);
    return SanPhamModel.capNhat(id, { ...duLieu, moTa: lamSachHtml(duLieu.moTa) });
  },

  ngungKinhDoanh(id) {
    kiemTraTonTai(id);
    return SanPhamModel.capNhatTrangThai(id, 'ngung_kinh_doanh');
  },
};

module.exports = SanPhamService;
