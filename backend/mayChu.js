// Diem khoi dong ung dung: lang nghe cong HTTP
const ungDung = require('./ungDung');
const cauHinhChung = require('./cauHinh/cauHinhChung');
const { ghiThongTin } = require('./tienIch/ghiNhatKy');

ungDung.listen(cauHinhChung.congMayChu, () => {
  ghiThongTin(`SportShop API dang chay tai cong ${cauHinhChung.congMayChu} (moi truong: ${cauHinhChung.moiTruong})`);
});
