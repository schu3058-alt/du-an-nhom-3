const express = require('express');
const BaoCaoController = require('./baoCao.controller');
const xacThuc = require('../../middleware/xacThuc');
const phanQuyen = require('../../middleware/phanQuyen');

const router = express.Router();
router.use(xacThuc, phanQuyen('quan_tri'));

router.get('/doanh-thu', BaoCaoController.doanhThuTheoNgay);
router.get('/tong-quan', BaoCaoController.tongQuan);

module.exports = router;
