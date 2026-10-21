// Middleware kiem tra vai tro nguoi dung truoc khi cho truy cap route
function phanQuyen(...vaiTroChoPhep) {
  return (yeuCau, phanHoi, tiepTheo) => {
    if (!yeuCau.nguoiDung) {
      return phanHoi.status(401).json({ thanhCong: false, thongBao: 'Chua xac thuc' });
    }
    if (!vaiTroChoPhep.includes(yeuCau.nguoiDung.vaiTro)) {
      return phanHoi.status(403).json({ thanhCong: false, thongBao: 'Khong co quyen truy cap chuc nang nay' });
    }
    return tiepTheo();
  };
}

module.exports = phanQuyen;
