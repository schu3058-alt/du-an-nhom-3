// Thanh phan giao dien dung chung: thanh dieu huong tren cung
import { KHOA_LUU_TRU } from '../dungChung/hangSo.js';

export function taoThanhDieuHuong() {
  const daDangNhap = Boolean(localStorage.getItem(KHOA_LUU_TRU.TOKEN));

  const thanhDieuHuong = document.createElement('nav');
  thanhDieuHuong.className = 'thanh-dieu-huong';
  thanhDieuHuong.innerHTML = `
    <a href="/">SportShop</a>
    <a href="/san-pham">San pham</a>
    <a href="/gio-hang">Gio hang</a>
    ${daDangNhap ? '<a href="/tai-khoan">Tai khoan</a>' : '<a href="/dang-nhap">Dang nhap</a>'}
  `;
  return thanhDieuHuong;
}
