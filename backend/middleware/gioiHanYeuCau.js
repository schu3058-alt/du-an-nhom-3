// Middleware gioi han so luong yeu cau (chong spam / brute-force)
const rateLimit = require('express-rate-limit');
const { gioiHanSoYeuCau, gioiHanThoiGianMs } = require('../cauHinh/cauHinhBaoMat');

const gioiHanYeuCau = rateLimit({
  windowMs: gioiHanThoiGianMs,
  max: gioiHanSoYeuCau,
  standardHeaders: true,
  legacyHeaders: false,
  message: { thanhCong: false, thongBao: 'Qua nhieu yeu cau, vui long thu lai sau' },
});

module.exports = gioiHanYeuCau;
