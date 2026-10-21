// Truy van CSDL cho bang danh_gia (danh gia san pham cua khach hang)
const coSoDuLieu = require('../../cauHinh/ketNoiCoSoDuLieu');

const DanhGiaModel = {
  layTheoSanPham(sanPhamId) {
    return coSoDuLieu
      .prepare(
        `SELECT dg.*, tk.hoTen
         FROM danh_gia dg
         JOIN tai_khoan tk ON tk.id = dg.taiKhoanId
         WHERE dg.sanPhamId = ?
         ORDER BY dg.ngayTao DESC`
      )
      .all(sanPhamId);
  },

  taoMoi({ sanPhamId, taiKhoanId, soSao, noiDung }) {
    const ketQua = coSoDuLieu
      .prepare(
        `INSERT INTO danh_gia (sanPhamId, taiKhoanId, soSao, noiDung, ngayTao)
         VALUES (?, ?, ?, ?, datetime('now'))`
      )
      .run(sanPhamId, taiKhoanId, soSao, noiDung);
    return coSoDuLieu.prepare('SELECT * FROM danh_gia WHERE id = ?').get(ketQua.lastInsertRowid);
  },

  xoa(id, taiKhoanId) {
    return coSoDuLieu.prepare('DELETE FROM danh_gia WHERE id = ? AND taiKhoanId = ?').run(id, taiKhoanId);
  },
};

module.exports = DanhGiaModel;
