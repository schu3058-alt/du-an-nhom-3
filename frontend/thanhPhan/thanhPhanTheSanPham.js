// Thanh phan giao dien dung chung: the hien thi 1 san pham (dung trong danh sach, trang chu...)
import { dinhDangTienTe } from '../dungChung/dinhDang.js';

export function taoTheSanPham(sanPham, khiBamThemVaoGio) {
  const the = document.createElement('div');
  the.className = 'the-san-pham';
  the.innerHTML = `
    <img src="${sanPham.hinhAnh || ''}" alt="${sanPham.ten}" />
    <h3>${sanPham.ten}</h3>
    <p>${dinhDangTienTe(sanPham.gia)}</p>
    <button class="nut" type="button">Them vao gio</button>
  `;
  the.querySelector('button').addEventListener('click', () => khiBamThemVaoGio?.(sanPham));
  return the;
}
