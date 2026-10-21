// Kiem thu nghiep vu: quy trinh tu gio hang den don hang
const DonHangService = require('../../backend/modules/donHang/donHang.service');

describe('Nghiep vu - dat hang', () => {
  it('tu choi dat hang khi gio hang dang trong', () => {
    expect(() => DonHangService.xacNhanDatHang(999999, {
      diaChiNhan: '123 Duong ABC',
      soDienThoaiNhan: '0900000000',
    })).toThrow('Gio hang dang trong');
  });
});
