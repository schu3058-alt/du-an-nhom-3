// Middleware xu ly loi tap trung, dat sau cung trong chuoi middleware cua Express
const { ghiLoi } = require('../tienIch/ghiNhatKy');

function xuLyLoi(loi, yeuCau, phanHoi, tiepTheo) { // eslint-disable-line no-unused-vars
  ghiLoi(loi);

  const maTrangThai = loi.maTrangThai || 500;
  const thongBao = loi.thongBao || 'Da xay ra loi phia may chu';

  phanHoi.status(maTrangThai).json({
    thanhCong: false,
    thongBao,
    chiTiet: process.env.NODE_ENV === 'development' ? loi.stack : undefined,
  });
}

module.exports = xuLyLoi;
