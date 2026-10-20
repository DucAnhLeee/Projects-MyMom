# 💌 Thư Gửi Mẹ Yêu Thương - Mừng Ngày 20/10 🌸

> Món quà công nghệ ấm áp, đong đầy yêu thương dành tặng Mẹ nhân Ngày Phụ nữ Việt Nam 20/10.  
> Trải nghiệm trên điện thoại: **Mẹ mở link → Thấy phong thư sang trọng → Chạm vào mở thư đọc lời chúc → Thưởng thức chuỗi ảnh kỷ niệm gia đình.**

---

## 🌟 Tính Năng Nổi Bật

- 📱 **Mobile-First chuẩn mực**: Thiết kế chuyên biệt cho màn hình điện thoại (360px – 430px), hỗ trợ tai thỏ iPhone (safe-area), không bị tràn ngang.
- 👵 **Thân thiện với người lớn tuổi**: Cỡ chữ to (>= 20px), độ tương phản cao sắc nét, font chữ tiếng Việt chuẩn đẹp, nút bấm to dễ chạm.
- ✉️ **Hiệu ứng mở phong thư chân thực**: Con dấu sáp trái tim, cánh nắp mở 60fps mượt mà kèm âm thanh chuông ngân nga êm dịu.
- 📸 **Tự động cập nhật ảnh thông minh**: Chỉ cần bỏ ảnh vào thư mục `images/` và đẩy lên GitHub, GitHub Actions sẽ tự động đưa ảnh vào trình chiếu mà **không cần sửa một dòng code nào**!
- 🖼️ **Trình chiếu ảnh gia đình không cắt mặt**: Ảnh luôn hiển thị trọn vẹn (`object-fit: contain`) cùng hiệu ứng nền mờ nghệ thuật từ chính bức ảnh.
- 👆 **Cử chỉ vuốt chạm tiện lợi**: Vuốt trái/phải để chuyển ảnh, chạm vào ảnh để phóng to ngắm nhìn rõ nét nụ cười của Mẹ.
- 🎵 **Nhạc nền tùy chọn**: Thêm bài hát mẹ thích dễ dàng; tự động ẩn nút nếu chưa có nhạc.

---

## 📂 Cấu Trúc Thư Mục Dự Án

```text
/
├── index.html                   ← Giao diện chính của món quà
├── css/
│   └── style.css                ← Giao diện ấm áp, tương phản cao, tối ưu di động
├── js/
│   └── app.js                   ← Hiệu ứng mở thư, cử chỉ vuốt, slideshow ảnh
├── images/                      ← THƯ MỤC CHỨA ẢNH GIA ĐÌNH CỦA BẠN
│   ├── 01-gia-dinh-hanh-phuc.svg
│   ├── 02-me-va-con.svg
│   ├── 03-ky-niem-am-ap.svg
│   ├── 04-chuc-mung-20-10.svg
│   └── README.txt               ← Hướng dẫn định dạng & kích thước ảnh
├── audio/                       ← THƯ MỤC CHỨA NHẠC NỀN (TÙY CHỌN)
│   └── README.txt               ← Hướng dẫn thêm nhạc tặng Mẹ
├── config.json                  ← Nơi chỉnh lời chúc, tên Mẹ, chú thích ảnh
├── photos.json                  ← Danh sách ảnh (tự động cập nhật bởi script)
├── scripts/
│   └── generate-photos.js       ← Tự động quét ảnh trong images/
├── .github/
│   └── workflows/
│       └── deploy.yml           ← Tự động chạy và cập nhật web mỗi lần push
└── README.md
```

---

## 🚀 Hướng Dẫn Từng Bước (Dành Cho Mọi Người)

### 1. Cách đưa dự án lên GitHub và lấy Link trang web

#### Bước 1: Tạo kho lưu trữ (Repository) trên GitHub
1. Đăng nhập vào tài khoản [GitHub.com](https://github.com/).
2. Bấm vào dấu **`+`** ở góc trên cùng bên phải → Chọn **New repository**.
3. Đặt tên kho lưu trữ, ví dụ: `thu-gui-me-20-10`.
4. Chọn chế độ **Public** (để dùng được tính năng GitHub Pages miễn phí).
5. **Không** tích chọn "Add a README file" (vì dự án đã có sẵn file README).
6. Bấm nút xanh **Create repository**.

#### Bước 2: Đẩy mã nguồn từ máy tính lên GitHub
Mở terminal (PowerShell hoặc Command Prompt) tại thư mục dự án và chạy các lệnh sau (thay `YOUR-USERNAME` bằng tên GitHub của bạn):

```bash
# Khởi tạo git và commit
git init
git add .
git commit -m "Khoi tao mon qua 20/10 tang Me"

# Đổi tên nhánh chính thành main
git branch -M main

# Kết nối đến repo vừa tạo trên GitHub
git remote add origin https://github.com/YOUR-USERNAME/thu-gui-me-20-10.git

# Đẩy code lên GitHub
git push -u origin main
```

#### Bước 3: Kích hoạt GitHub Pages (Rất quan trọng!)
1. Trên trang repo GitHub của bạn, bấm vào tab **Settings** (Cài đặt).
2. Ở thanh bên trái, tìm mục **Pages** (dưới nhóm *Code and automation*).
3. Tại phần **Build and deployment** → mục **Source**, bạn chọn:  
   👉 **`GitHub Actions`** (thay vì Deploy from a branch).
4. Hệ thống sẽ tự động kích hoạt workflow `deploy.yml`. Đợi khoảng 1-2 phút, bạn sẽ thấy đường link trang web xuất hiện ngay trên đầu trang Pages, có dạng:  
   👉 **`https://YOUR-USERNAME.github.io/thu-gui-me-20-10/`**

---

### 2. Cách thêm ảnh gia đình vào slideshow (Cực kỳ dễ)

#### Cách làm trực tiếp trên web GitHub (không cần cài phần mềm):
1. Mở repo của bạn trên GitHub.
2. Bấm vào thư mục `images`.
3. Bấm nút **Add file** (ở góc phải) → Chọn **Upload files**.
4. Kéo thả các bức ảnh kỷ niệm gia đình từ máy tính/điện thoại vào.
5. Cuộn xuống dưới cùng và bấm nút xanh **Commit changes**.
6. **Xong!** GitHub Actions sẽ tự động phát hiện ảnh mới, cập nhật danh sách và đưa lên trang web trong vòng 1-2 phút.

#### Đặt tên file ảnh để sắp xếp thứ tự:
- Hãy đặt tên file có số thứ tự ở đầu, ví dụ:
  - `01-gia-dinh-di-choi.jpg`
  - `02-me-nau-an.jpg`
  - `03-ca-nha-sum-vay.jpg`
- **Định dạng hỗ trợ**: `.jpg`, `.jpeg`, `.png`, `.webp`.  
  *(Lưu ý: Nếu chụp bằng iPhone có đuôi `.heic`, hãy đổi sang `.jpg` trước khi tải lên).*
- **Xóa ảnh mẫu minh họa**: Trong thư mục `images/` có 4 file mẫu đuôi `.svg`. Khi đã có ảnh thật của gia đình, bạn có thể bấm vào từng file đó trên GitHub và chọn biểu tượng thùng rác để xóa đi.

---

### 3. Cách sửa lời chúc, tên Mẹ và người gửi

Mở file **`config.json`** (có thể bấm biểu tượng cây bút ✏️ để sửa trực tiếp trên GitHub):

```json
{
  "recipientName": "Mẹ yêu",
  "senderName": "Con trai của Mẹ",
  "occasion": "Mừng Ngày Phụ Nữ Việt Nam 20/10",
  "date": "Ngày 20 tháng 10 năm 2024",
  "letter": {
    "greeting": "Gửi Mẹ kính yêu của con,",
    "paragraphs": [
      "Nhân ngày Phụ nữ Việt Nam 20/10, con xin gửi đến Mẹ những lời chúc ấm áp...",
      "Cảm ơn Mẹ vì bao năm tháng qua đã luôn tần tảo, chở che cho chúng con...",
      "Con chúc Mẹ luôn dồi dào sức khỏe và mỗi ngày đều ngập tràn niềm vui!"
    ],
    "closing": "Con yêu Mẹ rất nhiều ❤️",
    "signature": "Con của Mẹ"
  }
}
```

- Bạn có thể viết thêm bao nhiêu đoạn văn tùy thích vào mảng `paragraphs`.

---

### 4. Cách thêm chú thích dưới từng bức ảnh (Tùy chọn)

Trong file `config.json`, bạn tìm mục `"captions"` và điền tên file ảnh kèm câu nói bạn muốn:

```json
"captions": {
  "01-gia-dinh-di-choi.jpg": "Cả nhà mình cùng đi Đà Lạt ngắm hoa 🌸",
  "02-me-nau-an.jpg": "Những món ăn ngon nhất trên đời chỉ có bàn tay Mẹ nấu ❤️"
}
```
*Nếu ảnh nào bạn không ghi chú thích thì trang web sẽ chỉ hiện ảnh trọn vẹn, không hiện thanh chữ.*

---

### 5. Cách thêm nhạc nền tặng Mẹ (Tùy chọn)

1. Tải một bài hát ý nghĩa (ví dụ: *Nhật Ký Của Mẹ*, *Ước Mơ Của Mẹ* hoặc một bản hòa tấu piano nhẹ nhàng) dưới định dạng `.mp3`.
2. Bỏ file nhạc vào thư mục `audio/` và đặt tên là: **`nhac-tang-me.mp3`**.
3. Đẩy lên GitHub. Trang web sẽ tự động xuất hiện nút **"Bật nhạc 🎵"** trang nhã ở góc trên màn hình để Mẹ bấm nghe.

---

### 6. Cách gửi quà cho Mẹ & Tạo mã QR ý nghĩa

1. **Gửi qua Zalo / Messenger / Tin nhắn SMS**:  
   Gửi đường link trang web của bạn cho Mẹ kèm lời nhắn:  
   *"Mẹ ơi, hôm nay 20/10 con có một bức thư đặc biệt gửi tặng Mẹ, Mẹ chạm vào đường link này để mở thư nhé: [Link của bạn]"*  
   *(Khi gửi qua Zalo/Messenger, link sẽ tự hiện tiêu đề "Thư Gửi Mẹ Yêu Thương" và ảnh bìa trái tim rất đẹp).*

2. **In mã QR lên thiệp hoa thực tế**:  
   Bạn có thể vào trang [me-qr.com](https://me-qr.com/) hoặc [qr-code-generator.com](https://www.qr-code-generator.com/), dán link trang web vào để tạo mã QR. Sau đó in ra dán vào bó hoa tươi tặng Mẹ. Mẹ chỉ cần dùng camera điện thoại quét mã là mở ra ngay!

---

## ❓ Câu Hỏi Thường Gặp & Xử Lý Sự Cố

- **Hỏi: Tôi vừa tải ảnh lên nhưng mở link trang web vẫn chưa thấy ảnh mới?**  
  *Đáp*: Trình duyệt thường lưu bộ nhớ đệm (cache). Bạn hãy:  
  1. Vào tab **Actions** trên GitHub xem quy trình deploy đã hiện dấu tích xanh ✅ chưa (khoảng 1 phút).  
  2. Mở link trên điện thoại bằng tab ẩn danh (Private/Incognito) hoặc vuốt xuống để tải lại trang.

- **Hỏi: Ảnh tải qua 4G có bị chậm không?**  
  *Đáp*: Bạn nên nén ảnh trước khi tải lên (giữ dung lượng mỗi bức ảnh dưới 1MB). Trang web đã tích hợp sẵn tính năng tự động tải trước ảnh kế tiếp (preload) nên khi Mẹ vuốt xem ảnh sẽ rất mượt mà.

- **Hỏi: Tính riêng tư của ảnh gia đình thế nào?**  
  *Đáp*: Vì GitHub Pages miễn phí yêu cầu kho lưu trữ Public, bất kỳ ai có đường link đều có thể xem được nội dung. Do đó, bạn hãy chọn lọc những bức ảnh kỷ niệm vui vẻ, phù hợp để chia sẻ với gia đình nhé.

---

Chúc Mẹ của bạn có một ngày 20/10 thật hạnh phúc, ấm áp và xúc động khi nhận được món quà này! 💐💖
