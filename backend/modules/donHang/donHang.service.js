// Nghiep vu dat hang: chuyen gio hang hop le thanh don hang, tru ton kho, xoa gio hang
const coSoDuLieu = require('../../cauHinh/ketNoiCoSoDuLieu');
const DonHangModel = require('./donHang.model');
const GioHangModel = require('../gioHang/gioHang.model');
const SanPhamModel = require('../sanPham/sanPham.model');

const DonHangService = {
  xacNhanDatHang(taiKhoanId, thongTinGiaoHang) {
    const gioHang = GioHangModel.layGioHangTheoTaiKhoan(taiKhoanId);
    if (!gioHang.length) {
      const loi = new Error('Gio hang dang trong, khong the dat hang');
      loi.maTrangThai = 400;
      throw loi;
    }

    const tongTien = gioHang.reduce((tong, dong) => tong + dong.gia * dong.soLuong, 0);

    const taoDonHangGiaoDich = coSoDuLieu.transaction(() => {
      const donHangId = DonHangModel.taoDonHang({ taiKhoanId, ...thongTinGiaoHang, tongTien });
      gioHang.forEach((dong) => {
        DonHangModel.themChiTiet(donHangId, {
          sanPhamId: dong.sanPhamId,
          soLuong: dong.soLuong,
          donGia: dong.gia,
        });
        SanPhamModel.giamSoLuongTon(dong.sanPhamId, dong.soLuong);
      });
      GioHangModel.xoaToanBo(taiKhoanId);
      return donHangId;
    });

    const donHangId = taoDonHangGiaoDich();
    return DonHangModel.timTheoId(donHangId);
  },

  layDonHangCuaToi(taiKhoanId) {
    return DonHangModel.layTheoTaiKhoan(taiKhoanId);
  },

  layChiTiet(id) {
    const donHang = DonHangModel.timTheoId(id);
    if (!donHang) {
      const loi = new Error('Khong tim thay don hang');
      loi.maTrangThai = 404;
      throw loi;
    }
    return donHang;
  },

  layTatCa(boLoc) {
    return DonHangModel.layTatCa(boLoc);
  },

  capNhatTrangThai(id, trangThai) {
    this.layChiTiet(id);
    return DonHangModel.capNhatTrangThai(id, trangThai);
  },
};

module.exports = DonHangService;
