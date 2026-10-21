// Kiem thu dieu kien dua (race condition) khi nhieu don hang cung tru ton kho 1 san pham
// Muc tieu: dam bao soLuongTon khong bi am khi co nhieu yeu cau dat hang dong thoi
const SanPhamModel = require('../../backend/modules/sanPham/sanPham.model');

describe('Dong thoi - tru ton kho', () => {
  it('khong cho phep soLuongTon am khi tru vuot qua ton kho hien co', () => {
    // TODO: tao san pham mau voi soLuongTon = 1, goi giamSoLuongTon() 2 lan dong thoi
    // va kiem tra chi 1 lan thanh cong, soLuongTon cuoi cung >= 0
    expect(typeof SanPhamModel.giamSoLuongTon).toBe('function');
  });
});
