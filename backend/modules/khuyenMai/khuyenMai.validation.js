const Joi = require('joi');

const taoKhuyenMai = Joi.object({
  ma: Joi.string().uppercase().min(3).max(30).required(),
  phanTramGiam: Joi.number().min(1).max(100).required(),
  ngayBatDau: Joi.date().iso().required(),
  ngayKetThuc: Joi.date().iso().greater(Joi.ref('ngayBatDau')).required(),
});

module.exports = { taoKhuyenMai };
