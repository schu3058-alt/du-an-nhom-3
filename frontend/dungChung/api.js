// Ham goi API dung chung, tu dong gan token dang nhap (neu co) va bao loi ro rang
import { DIA_CHI_API_GOC, KHOA_LUU_TRU } from './hangSo.js';

async function goiApi(duongDan, tuyChon = {}) {
  const token = localStorage.getItem(KHOA_LUU_TRU.TOKEN);

  const phanHoi = await fetch(`${DIA_CHI_API_GOC}${duongDan}`, {
    ...tuyChon,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(tuyChon.headers || {}),
    },
    body: tuyChon.body ? JSON.stringify(tuyChon.body) : undefined,
  });

  const ketQua = await phanHoi.json().catch(() => ({}));

  if (!phanHoi.ok || ketQua.thanhCong === false) {
    throw new Error(ketQua.thongBao || 'Co loi xay ra khi goi API');
  }

  return ketQua.duLieu;
}

export const api = {
  get: (duongDan) => goiApi(duongDan, { method: 'GET' }),
  post: (duongDan, body) => goiApi(duongDan, { method: 'POST', body }),
  put: (duongDan, body) => goiApi(duongDan, { method: 'PUT', body }),
  del: (duongDan) => goiApi(duongDan, { method: 'DELETE' }),
};
