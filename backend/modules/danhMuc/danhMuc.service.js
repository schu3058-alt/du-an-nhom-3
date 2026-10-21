const DanhMucModel = require('./danhMuc.model');

function kiemTraTonTai(id) {
  const danhMuc = DanhMucModel.timTheoId(id);
  if (!danhMuc) {
    const loi = new Error('Khong tim thay danh muc');
    loi.maTrangThai = 404;
    throw loi;
  }
  return danhMuc;
}

const DanhMucService = {
  layTatCa: () => DanhMucModel.layTatCa(),
  layTheoId: (id) => kiemTraTonTai(id),
  taoMoi: (duLieu) => DanhMucModel.taoMoi(duLieu),
  capNhat(id, duLieu) {
    kiemTraTonTai(id);
    return DanhMucModel.capNhat(id, duLieu);
  },
  xoa(id) {
    kiemTraTonTai(id);
    return DanhMucModel.xoa(id);
  },
};

module.exports = DanhMucService;
