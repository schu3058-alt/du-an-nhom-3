-- Du lieu mau de phat trien va demo (khong dung cho moi truong production)

INSERT INTO tai_khoan (hoTen, email, matKhauMaHoa, soDienThoai, vaiTro) VALUES
  ('Quan Tri Vien', 'admin@sportshop.vn', '$2a$10$8K1p/a0dURXAm7QiTRqguOQ5xoQ5XZ7ZBu5F4y6bN.Xm2y9bN8m6a', '0900000000', 'quan_tri'),
  ('Nguyen Van A', 'khachhang1@sportshop.vn', '$2a$10$8K1p/a0dURXAm7QiTRqguOQ5xoQ5XZ7ZBu5F4y6bN.Xm2y9bN8m6a', '0901111111', 'khach_hang');

INSERT INTO danh_muc (ten, moTa, slug) VALUES
  ('Giay the thao', 'Giay chay bo, giay bong da, giay bong ro', 'giay-the-thao'),
  ('Quan ao the thao', 'Ao quan tap luyen, thi dau', 'quan-ao-the-thao'),
  ('Dung cu tap luyen', 'Ta, day nhay, tham tap yoga', 'dung-cu-tap-luyen'),
  ('Bong the thao', 'Bong da, bong ro, bong chuyen', 'bong-the-thao');

INSERT INTO san_pham (ten, moTa, gia, soLuongTon, danhMucId, hinhAnh) VALUES
  ('Giay chay bo Pro X', 'Giay chay bo nhe, dem khi tot', 1290000, 50, 1, NULL),
  ('Ao thun the thao thoang khi', 'Chat lieu polyester thoat mo hoi', 250000, 100, 2, NULL),
  ('Ta tay 2kg (cap doi)', 'Ta tay boc cao su, chong truot', 180000, 60, 3, NULL),
  ('Bong da size 5', 'Bong da thi dau tieu chuan FIFA', 350000, 80, 4, NULL);

INSERT INTO khuyen_mai (ma, phanTramGiam, ngayBatDau, ngayKetThuc) VALUES
  ('CHAOMUNG10', 10, date('now'), date('now', '+30 days'));
