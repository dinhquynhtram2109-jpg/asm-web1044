const products = [
  {
    id: 1,
    name: "Giày Sneaker Nam Bita's Hunter",
    price: 550000,
    category: "nam",
    image: "image/SP1_1.png",
    isNew: true,
    isHot: true,
  },
  {
    id: 2,
    name: "Sneaker Nam Cao Cấp Comfort",
    price: 600000,
    category: "nam",
    image: "image/SP1_2.png",
    isNew: false,
    isHot: true,
  },
  {
    id: 3,
    name: "Giày Lười Nam Thời Trang",
    price: 500000,
    category: "nam",
    image: "image/SP1_3.png",
    isNew: true,
    isHot: false,
  },
  {
    id: 4,
    name: "Giày Thể Thao Nhẹ Unisex",
    price: 470000,
    category: "nam",
    image: "image/SP1_4.png",
    isNew: false,
    isHot: false,
  },
  {
    id: 5,
    name: "Giày Chạy Bộ Nam Active Pro",
    price: 580000,
    category: "nam",
    image: "image/SP3_2.png",
    isNew: false,
    isHot: true,
  },
  {
    id: 6,
    name: "Sandal Nam Đi Biển Sport",
    price: 380000,
    category: "nam",
    image: "image/SP2_4.png",
    isNew: false,
    isHot: false,
  },
  {
    id: 7,
    name: "Giày Tây Nam Công Sở Classic",
    price: 720000,
    category: "nam",
    image: "image/SP1_1.png",
    isNew: false,
    isHot: true,
  },
  {
    id: 8,
    name: "Giày Sneaker Nam Basic White",
    price: 490000,
    category: "nam",
    image: "image/SP2_3.png",
    isNew: true,
    isHot: false,
  },
  {
    id: 9,
    name: "Dép Sapo Nam Da Thật",
    price: 350000,
    category: "nam",
    image: "image/SP1_3.png",
    isNew: false,
    isHot: false,
  },

  {
    id: 10,
    name: "Giày Thể Thao Nữ Bita's Active",
    price: 450000,
    category: "nu",
    image: "image/SP1_2.png",
    isNew: true,
    isHot: false,
  },
  {
    id: 11,
    name: "Giày Nữ Đế Cao Graceful",
    price: 420000,
    category: "nu",
    image: "image/SP2_1.png",
    isNew: false,
    isHot: true,
  },
  {
    id: 12,
    name: "Sandal Nữ Mùa Hè Trend",
    price: 610000,
    category: "nu",
    image: "image/SP2_2.png",
    isNew: true,
    isHot: true,
  },
  {
    id: 13,
    name: "Giày Sneaker Nữ Pastel",
    price: 530000,
    category: "nu",
    image: "image/SP2_3.png",
    isNew: true,
    isHot: false,
  },
  {
    id: 14,
    name: "Giày Sandal Nữ Nữ Tính",
    price: 390000,
    category: "nu",
    image: "image/SP3_1.png",
    isNew: false,
    isHot: true,
  },
  {
    id: 15,
    name: "Giày Búp Bê Nữ Công Sở",
    price: 360000,
    category: "nu",
    image: "image/SP3_3.png",
    isNew: true,
    isHot: false,
  },
  {
    id: 16,
    name: "Giày Cao Gót 5cm Thanh Lịch",
    price: 480000,
    category: "nu",
    image: "image/SP1_2.png",
    isNew: false,
    isHot: true,
  },
  {
    id: 17,
    name: "Sandal Xỏ Ngón Nữ Dạo Phố",
    price: 270000,
    category: "nu",
    image: "image/SP3_1.png",
    isNew: true,
    isHot: false,
  },
  {
    id: 18,
    name: "Giày Slip-on Nữ Tiện Lợi",
    price: 410000,
    category: "nu",
    image: "image/SP2_1.png",
    isNew: false,
    isHot: false,
  },

  {
    id: 19,
    name: "Sandal Bé Trai Năng Động",
    price: 310000,
    category: "betrai",
    image: "image/SP3_2.png",
    isNew: true,
    isHot: false,
  },
  {
    id: 20,
    name: "Giày Thể Thao Bé Trai Siêu Nhân",
    price: 380000,
    category: "betrai",
    image: "image/SP1_1.png",
    isNew: true,
    isHot: true,
  },
  {
    id: 21,
    name: "Sandal Bé Trai Đi Học",
    price: 290000,
    category: "betrai",
    image: "image/SP1_3.png",
    isNew: false,
    isHot: true,
  },
  {
    id: 22,
    name: "Giày Lười Bé Trai Phong Cách",
    price: 330000,
    category: "betrai",
    image: "image/SP1_4.png",
    isNew: true,
    isHot: false,
  },
  {
    id: 23,
    name: "Giày Sneaker Cổ Cao Bé Trai",
    price: 420000,
    category: "betrai",
    image: "image/SP1_2.png",
    isNew: false,
    isHot: true,
  },
  {
    id: 24,
    name: "Dép Quai Hậu Bé Trai Nhẹ Êm",
    price: 250000,
    category: "betrai",
    image: "image/SP1_4.png",
    isNew: true,
    isHot: false,
  },
  {
    id: 25,
    name: "Giày Tập Đi Cho Bé Trai",
    price: 220000,
    category: "betrai",
    image: "image/SP1_2.png",
    isNew: false,
    isHot: false,
  },
  {
    id: 26,
    name: "Giày Thể Thao Đèn LED Bé Trai",
    price: 450000,
    category: "betrai",
    image: "image/SP1_3.png",
    isNew: true,
    isHot: true,
  },
  {
    id: 27,
    name: "Sandal Chống Trượt Bé Trai",
    price: 280000,
    category: "betrai",
    image: "image/SP1_1.png",
    isNew: false,
    isHot: false,
  },

  {
    id: 28,
    name: "Giày Búp Bê Bé Gái Xinh Xắn",
    price: 290000,
    category: "begai",
    image: "image/SP2_3.png",
    isNew: false,
    isHot: true,
  },
  {
    id: 29,
    name: "Sandal Bé Gái Nơ Hồng Công Chúa",
    price: 320000,
    category: "begai",
    image: "image/SP3_1.png",
    isNew: true,
    isHot: true,
  },
  {
    id: 30,
    name: "Giày Thể Thao Bé Gái Họa Tiết",
    price: 370000,
    category: "begai",
    image: "image/SP1_2.png",
    isNew: true,
    isHot: false,
  },
  {
    id: 31,
    name: "Sandal Đi Học Bé Gái Đáng Yêu",
    price: 300000,
    category: "begai",
    image: "image/SP2_2.png",
    isNew: false,
    isHot: true,
  },
  {
    id: 32,
    name: "Giày Búp Bê Kim Tuyến Bé Gái",
    price: 350000,
    category: "begai",
    image: "image/SP3_3.png",
    isNew: true,
    isHot: false,
  },
  {
    id: 33,
    name: "Giày Thể Thao Cổ Thấp Bé Gái",
    price: 390000,
    category: "begai",
    image: "image/SP2_1.png",
    isNew: false,
    isHot: true,
  },
  {
    id: 34,
    name: "Dép Quai Ngang Bé Gái Dễ Thương",
    price: 210000,
    category: "begai",
    image: "image/SP3_1.png",
    isNew: true,
    isHot: false,
  },
  {
    id: 35,
    name: "Sandal Xỏ Ngón Bé Gái Đi Biển",
    price: 260000,
    category: "begai",
    image: "image/SP3_4.png",
    isNew: false,
    isHot: false,
  },
  {
    id: 36,
    name: "Giày Tập Đi Bé Gái Thêu Hoa",
    price: 230000,
    category: "begai",
    image: "image/SP2_3.png",
    isNew: true,
    isHot: false,
  },
];

let cart = JSON.parse(localStorage.getItem("bitas_cart")) || [
  {
    id: 1,
    name: "Giày Sneaker Nam Bita's Hunter",
    price: 550000,
    image: "image/SP1_1.png",
    quantity: 1,
  },
  {
    id: 10,
    name: "Giày Thể Thao Nữ Bita's Active",
    price: 450000,
    image: "image/SP1_2.png",
    quantity: 2,
  },
];

function formatCurrency(amount) {
  return amount.toLocaleString("vi-VN") + "đ";
}

function saveCart() {
  localStorage.setItem("bitas_cart", JSON.stringify(cart));
}

function addToCart(id) {
  const item = products.find((p) => p.id === id);
  if (!item) return;

  const existIndex = cart.findIndex((c) => c.id === id);
  if (existIndex > -1) {
    cart[existIndex].quantity += 1;
  } else {
    cart.push({ id: item.id, name: item.name, price: item.price, image: item.image, quantity: 1 });
  }

  saveCart();
  alert("Đã thêm: " + item.name + " vào giỏ hàng!");
}

function renderProductCard(p) {
  return `
    <div class="card">
        <img src="${p.image}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/200'">
        <h4>${p.name}</h4>
        <p class="price">${formatCurrency(p.price)}</p>
        <div style="display:flex; gap:6px; justify-content:center; margin-top:8px;">
            <a href="detail.html?id=${p.id}" class="btn-detail">Chi tiết</a>
            <button onclick="addToCart(${p.id})" class="btn-detail" style="background:#222; border:none; cursor:pointer;">+ Giỏ</button>
        </div>
    </div>
  `;
}
