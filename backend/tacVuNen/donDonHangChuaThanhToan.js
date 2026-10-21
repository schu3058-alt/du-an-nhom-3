// Tac vu nen: tu dong huy cac don hang cho xac nhan qua lau (vi du qua 48 gio) chua duoc thanh toan
const coSoDuLieu = require('../cauHinh/ketNoiCoSoDuLieu');
const { ghiThongTin } = require('../tienIch/ghiNhatKy');

function donDonHangQuaHan(soGioToiDa = 48) {
  const ketQua = coSoDuLieu
    .prepare(
      `UPDATE don_hang
       SET trangThai = 'da_huy'
       WHERE trangThai = 'cho_xac_nhan'
         AND datetime(ngayTao, '+' || ? || ' hours') < datetime('now')`
    )
    .run(soGioToiDa);

  ghiThongTin(`Da tu dong huy ${ketQua.changes} don hang qua han chua xac nhan`);
  return ketQua.changes;
}

module.exports = donDonHangQuaHan;
