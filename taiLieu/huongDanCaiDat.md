# Huong dan cai dat — SportShop

## Yeu cau he thong
- Node.js >= 18
- npm >= 9

## Cac buoc cai dat
1. Cai dat thu vien:
   ```bash
   npm install
   ```
2. Sao chep file cau hinh mau:
   ```bash
   cp .env.example .env
   ```
   Chinh sua `.env` neu can (vi du doi `JWT_SECRET` truoc khi trien khai that).
3. Khoi tao co so du lieu (chay lan luot cac script trong `database/`):
   ```bash
   sqlite3 database/quan_ly_sportshop.sqlite < database/taoBang.sql
   sqlite3 database/quan_ly_sportshop.sqlite < database/chiMuc.sql
   sqlite3 database/quan_ly_sportshop.sqlite < database/duLieuMau.sql
   ```
4. Chay ung dung o che do phat trien:
   ```bash
   npm run dev
   ```
   May chu mac dinh chay tai `http://localhost:3000`.
5. Mo frontend: mo truc tiep file `frontend/trang/trangChu/index.html` bang trinh duyet,
   hoac dung mot may chu tinh don gian (vi du extension Live Server) de tranh loi CORS/module.

## Tai khoan mau (tu database/duLieuMau.sql)
- Quan tri vien: `admin@sportshop.vn`
- Khach hang: `khachhang1@sportshop.vn`

> Mat khau mau trong file duLieuMau.sql chi mang tinh minh hoa cau truc du lieu —
> hay tao lai tai khoan qua API `/api/tai-khoan/dang-ky` de co mat khau ma hoa dung.
