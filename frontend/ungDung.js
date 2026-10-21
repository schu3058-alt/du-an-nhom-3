// Diem khoi dong phia frontend: dieu huong don gian theo duong dan trang
import { KHOA_LUU_TRU } from './dungChung/hangSo.js';

function laDaDangNhap() {
  return Boolean(localStorage.getItem(KHOA_LUU_TRU.TOKEN));
}

function capNhatThanhDieuHuong() {
  const vungDieuHuong = document.querySelector('[data-vung-dieu-huong]');
  if (!vungDieuHuong) return;
  vungDieuHuong.dataset.daDangNhap = String(laDaDangNhap());
}

document.addEventListener('DOMContentLoaded', () => {
  capNhatThanhDieuHuong();
  console.log('SportShop frontend da san sang.');
});
