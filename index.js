// ----------BÀI TÍNH TIỀN LƯƠNG------------
const diemUuTienKhuVuc = (khuvuc) => {
  if (khuvuc == "A") return 2;
  else if (khuvuc == "B") return 1;
  else if (khuvuc == "C") return 0.5;
  return 0;
};

const diemUuTienDoiTuong = (doituong) => {
  if (doituong == 1) return 2.5;
  else if (doituong == 2) return 1.5;
  else if (doituong == 3) return 1;
  return 0;
};
const isgreater0 = (m1, m2, m3) => {
  if (m1 == 0 || m2 == 0 || m3 == 0) return 0;
  return 1;
};

function handlechange(event) {
  let datfrom_select = event.target.value;
  let ketnoi_tag = document.getElementById("ketNoi");
  if (datfrom_select == "nhadan") {
    ketnoi_tag.classList.add("text-bg-secondary");
    ketnoi_tag.disabled = true;
  } else {
    ketnoi_tag.classList.remove("text-bg-secondary");
    ketnoi_tag.disabled = false;
  }
}
document.getElementById("btn-qlts").onclick = () => {
  let diemchuan = document.getElementById("diemChuan").value * 1;

  let mon_1 = document.getElementById("diem_1").value * 1;
  let mon_2 = document.getElementById("diem_2").value * 1;
  let mon_3 = document.getElementById("diem_3").value * 1;
  let khuvuc = document.getElementById("khuVuc").value;
  let doituong = document.getElementById("doiTuong").value * 1;
  let tongdiem =
    mon_1 +
    mon_2 +
    mon_3 +
    diemUuTienKhuVuc(khuvuc) +
    diemUuTienDoiTuong(doituong);
  if (tongdiem >= diemchuan && isgreater0(mon_1, mon_2, mon_3))
    document.getElementById("result").innerHTML =
      "Chúc mừng bạn đã đậu với tổng số điểm là: " + tongdiem;
  else {
    let p_tag = document.getElementById("result");
    p_tag.classList.remove("text-bg-success");
    p_tag.classList.add("text-bg-secondary");
    p_tag.innerHTML =
      "Rất tiếc khi thông báo với bạn rằng: bạn chưa đậu với số điểm là: " +
      tongdiem;
  }
};

document.getElementById("btn-tienDien").onclick = () => {
  let ten = document.getElementById("Ten").value;
  let sokw = document.getElementById("soKw").value * 1;
  const first_50 = 500,
    f50_99 = 650,
    f100_199 = 850,
    f200_349 = 1100,
    rest = 1300;

  let tongtien = 0;
  if (0 <= sokw && sokw <= 49) tongtien = first_50 * sokw;
  else if (50 <= sokw && sokw <= 99)
    tongtien = first_50 * 50 + (sokw - 49) * f50_99;
  else if (100 <= sokw && sokw <= 199)
    tongtien = first_50 * 50 + 50 * f50_99 + (sokw - 99) * f100_199;
  else if (200 <= sokw && sokw <= 349)
    tongtien =
      first_50 * 50 + 50 * f50_99 + 100 * f100_199 + (sokw - 199) * f200_349;
  else
    tongtien =
      first_50 * 50 +
      50 * f50_99 +
      100 * f100_199 +
      150 * f200_349 +
      (sokw - 349) * rest;
  tongtien = tongtien.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  });
  document.querySelector(
    ".xuatketqua"
  ).innerHTML = ` Tổng tiền điện tháng này của ${ten} là: ${tongtien}`;
};

// ------------BÀI TÍNH GIÁ TRI TRUNG BÌNH-------------
document.getElementById("btn-tinhThue").onclick = () => {
  let user = document.getElementById("hoTen").value;
  let thunhap = document.getElementById("thuNhap").value * 1;
  let songuoiphuthuoc = document.getElementById("soNguoiPhuThuoc").value * 1;

  let taxed_base_profit = thunhap - 4 - songuoiphuthuoc * 1.6;
  let thue;

  if (taxed_base_profit <= 60) {
    thue = 5;
  } else if (60 < taxed_base_profit && taxed_base_profit <= 120) {
    thue = 10;
  } else if (120 < taxed_base_profit && taxed_base_profit <= 210) {
    thue = 15;
  } else if (210 < taxed_base_profit && taxed_base_profit <= 384) {
    thue = 20;
  } else if (384 < taxed_base_profit && taxed_base_profit <= 624) {
    thue = 25;
  } else if (624 < taxed_base_profit && taxed_base_profit <= 960) {
    thue = 30;
  } else thue = 35;

  document.getElementById(
    "xuatThue"
  ).innerHTML = ` Tiền thuế năm nay của ${user} là ${thue}%.`;
};

// ------------BÀI TÍNH TỔNG 2 KÝ SỐ ----------------
document.getElementById("btn-tienCap").onclick = () => {
  let typeOfuser = document.getElementById("loaiKhachHang").value;
  let sokenh = document.getElementById("Kenh").value * 1;
  let tong = 0.0;
  if (typeOfuser == "nhadan") {
    tong += 4.5 + 20.5 + parseFloat(sokenh * 7.5);
  } else {
    let soketnoi = document.getElementById("ketNoi").value * 1;
    if (soketnoi <= 10) tong += 15 + 75 + 50 * sokenh;
    else tong += 15 + 75 + (soketnoi - 10) * 80 + 50 * sokenh;
  }

  document.getElementById(
    "noiXuatTong"
  ).innerHTML = ` Tiền cáp của bạn tháng này là: ${tong}$.`;
};

// ----------- HÀM XỬ LÝ HÀNH VI CLICK CHỌN BÀI TẬP CỦA NGƯỜI DÙNG ------------
function openTab(evt, tabName) {
  let tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  let tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}
