// Chuan hoa hinh dang JSON tra ve cho moi API trong he thong
function thanhCong(phanHoi, duLieu = null, thongBao = 'Thanh cong', maTrangThai = 200) {
  return phanHoi.status(maTrangThai).json({ thanhCong: true, thongBao, duLieu });
}

function thatBai(phanHoi, thongBao = 'Co loi xay ra', maTrangThai = 400, chiTiet = undefined) {
  return phanHoi.status(maTrangThai).json({ thanhCong: false, thongBao, chiTiet });
}

module.exports = { thanhCong, thatBai };
