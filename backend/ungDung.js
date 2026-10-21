// Khoi tao Express app: cau hinh middleware chung va gan cac module route
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const gioiHanYeuCau = require('./middleware/gioiHanYeuCau');
const xuLyLoi = require('./middleware/xuLyLoi');

const taiKhoanRoutes = require('./modules/taiKhoan');
const danhMucRoutes = require('./modules/danhMuc');
const sanPhamRoutes = require('./modules/sanPham');
const gioHangRoutes = require('./modules/gioHang');
const donHangRoutes = require('./modules/donHang');
const thanhToanRoutes = require('./modules/thanhToan');
const danhGiaRoutes = require('./modules/danhGia');
const khuyenMaiRoutes = require('./modules/khuyenMai');
const thongBaoRoutes = require('./modules/thongBao');
const baoCaoRoutes = require('./modules/baoCao');

const ungDung = express();

ungDung.use(cors());
ungDung.use(express.json());
ungDung.use(morgan('dev'));
ungDung.use(gioiHanYeuCau);

ungDung.get('/', (yeuCau, phanHoi) => {
  phanHoi.json({ thanhCong: true, thongBao: 'SportShop API dang hoat dong' });
});

ungDung.use('/api/tai-khoan', taiKhoanRoutes);
ungDung.use('/api/danh-muc', danhMucRoutes);
ungDung.use('/api/san-pham', sanPhamRoutes);
ungDung.use('/api/gio-hang', gioHangRoutes);
ungDung.use('/api/don-hang', donHangRoutes);
ungDung.use('/api/thanh-toan', thanhToanRoutes);
ungDung.use('/api/danh-gia', danhGiaRoutes);
ungDung.use('/api/khuyen-mai', khuyenMaiRoutes);
ungDung.use('/api/thong-bao', thongBaoRoutes);
ungDung.use('/api/bao-cao', baoCaoRoutes);

// Middleware xu ly loi phai dat sau cung
ungDung.use(xuLyLoi);

module.exports = ungDung;
