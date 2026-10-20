# ⏳ Thư Gửi Mẹ - Dòng Thời Gian "Ngày Ấy & Bây Giờ" (2016 – 2026) 🌸

> Món quà 20/10 đong đầy xúc cảm của người con sinh năm 2006 dành tặng Mẹ kính yêu.  
> Trải nghiệm trên điện thoại: **Mẹ mở link → Thấy phong thư sang trọng → Chạm mở thư đọc lời chúc ấm áp → Bấm sang dòng thời gian 10 năm "Ngày ấy – Bây giờ" ghi dấu từng chặng đường con lớn khôn bên Mẹ (2016 – 2026).**

---

## 🌟 Điểm Nổi Bật Của Món Quà

- 📱 **Mobile-First chuẩn mực**: Thiết kế tối ưu cho điện thoại (360px – 430px), hỗ trợ tai thỏ iPhone (safe-area), không bị tràn ngang.
- 👵 **Thân thiện với người lớn tuổi**: Chữ to rõ ràng (>= 20px), độ tương phản cao sắc nét (chuẩn WCAG AAA), font chữ tiếng Việt có dấu chuẩn đẹp, nút bấm to dễ chạm.
- ✉️ **Hiệu ứng mở phong thư chân thực**: Con dấu sáp trái tim, cánh nắp mở 60fps mượt mà kèm tiếng chuông ngân nga êm ái.
- ⏳ **Dòng thời gian 10 năm theo đúng câu chuyện của bạn**:
  - **Mốc 1 (2016 - Con 10 tuổi)**: 2 bức ảnh dịu hiền của Mẹ.
  - **Mốc 2 (2018 - Con 12 tuổi)**: Khoảnh khắc tôi và Mẹ.
  - **Mốc 3 (2020 - Con 14 tuổi)**: Điểm tựa bình yên của hai mẹ con.
  - **Mốc 4 (2021 - Con 15 tuổi)**: Con dần cao lớn hơn Mẹ.
  - **Mốc 5 (2025 - Con 19 tuổi)**: Ngưỡng cửa bước vào đời.
  - **Mốc 6 (2026 - BÂY GIỜ - Con 20 tuổi)**: Nhãn viền vàng gold sang trọng – *"Con 20 tuổi đã lớn khôn, để con là điểm tựa của Mẹ! ❤️"*
- ⚖️ **Chế độ so sánh "Ngày ấy ⇄ Bây giờ" (Interactive Slider)**: Thanh trượt cảm ứng bằng một ngón tay giúp Mẹ so sánh bức ảnh năm 2016 và bức ảnh hiện tại năm 2026.
- 🔍 **Xem ảnh phóng to toàn màn hình**: Chạm vào bất kỳ ảnh nào để ngắm rõ nét, có nút "✕ Đóng" to rõ.
- 🎵 **Nhạc nền tùy chọn**: Đã tích hợp sẵn bài hát mẫu trong thư mục `audio/`, có nút bật/tắt nhạc trang nhã.

---

## 📂 Danh Sách Ảnh Trong Thư Mục `images/`

| Tên file | Mốc thời gian | Ý nghĩa |
| :--- | :--- | :--- |
| `01a.jpg` | **Năm 2016** | Tấm thứ 1 của Mẹ (Con 10 tuổi) |
| `01b.jpg` | **Năm 2016** | Tấm thứ 2 của Mẹ (Con 10 tuổi) |
| `02.jpg` | **Năm 2018** | 1 tấm tôi và Mẹ tôi (Con 12 tuổi) |
| `03.jpg` | **Năm 2020** | 1 tấm tôi và Mẹ tôi (Con 14 tuổi) |
| `04.jpg` | **Năm 2021** | 1 tấm tôi và Mẹ tôi (Con 15 tuổi) |
| `05.jpg` | **Năm 2025** | 1 tấm tôi và Mẹ tôi (Con 19 tuổi) |
| `06.jpg` | **Năm 2026** | 1 tấm tôi với Mẹ tôi (**BÂY GIỜ** - Con 20 tuổi) |

---

## 🚀 Hướng Dẫn Từng Bước (Cho Người Không Rành Code)

### 1. Cách đưa dự án lên GitHub & Lấy link cho Mẹ

#### Bước 1: Tạo kho lưu trữ (Repository) mới trên GitHub
1. Đăng nhập [GitHub.com](https://github.com/).
2. Bấm vào dấu **`+`** ở góc trên bên phải → Chọn **New repository**.
3. Đặt tên gợi ý: **`ngay-ay-bay-gio-20-10`**.
4. Chọn chế độ **Public** (để dùng GitHub Pages miễn phí).
5. **Không** tích chọn bất kỳ ô nào (*Add a README*, *.gitignore*).
6. Bấm nút xanh **Create repository**.

#### Bước 2: Chạy lệnh đẩy code lên GitHub
Mở PowerShell tại thư mục dự án và chạy các lệnh sau (thay `<ten-tai-khoan-github>` bằng username của bạn):

```powershell
git remote add origin https://github.com/<ten-tai-khoan-github>/ngay-ay-bay-gio-20-10.git
git branch -M main
git push -u origin main
```

#### Bước 3: Bật GitHub Pages bằng GitHub Actions (Rất quan trọng!)
1. Tại trang repo trên GitHub, vào tab **Settings** ➜ chọn **Pages** (ở cột bên trái).
2. Tại mục **Build and deployment** ➜ **Source**, chọn:  
   👉 **`GitHub Actions`**
3. Chờ khoảng 1 phút để GitHub Actions chạy xong. Đường link trang web chính thức của bạn sẽ xuất hiện ngay trên đầu trang Pages:  
   👉 **`https://<ten-tai-khoan-github>.github.io/ngay-ay-bay-gio-20-10/`**

---

### 2. Cách thay ảnh thật của gia đình

1. Mở thư mục `images` trên GitHub (hoặc trên máy tính).
2. Đổi tên các bức ảnh thật theo đúng danh sách: `01a.jpg`, `01b.jpg`, `02.jpg`, `03.jpg`, `04.jpg`, `05.jpg`, `06.jpg`.
3. Tải đè lên thư mục `images` trên GitHub và bấm **Commit changes**.
4. Trang web sẽ tự động cập nhật sau khoảng 1 phút!

> 💡 **Mẹo**: Khuyến nghị dung lượng ảnh dưới 500 KB để Mẹ xem bằng 4G cực mượt. Bạn có thể nén ảnh miễn phí tại [tinypng.com](https://tinypng.com/). Nếu ảnh từ iPhone có đuôi `.heic`, hãy đổi sang `.jpg` trước khi tải lên.

---

### 3. Cách chỉnh sửa câu từ trong `config.json`

Mở file **`config.json`** trên GitHub và bấm vào biểu tượng cây bút ✏️ nếu bạn muốn tùy chỉnh thêm lời chúc hoặc những kỷ niệm riêng của hai mẹ con:
- `letter`: Đoạn tâm thư gửi Mẹ
- `timeline`: Tên giai đoạn (`stage`), tiêu đề (`title`) và lời kể (`caption`) cho từng năm
- Sau khi chỉnh sửa, bấm **Commit changes** để lưu lại.

---

### 4. Gửi quà cho Mẹ & Tạo mã QR ý nghĩa

1. **Gửi qua Zalo / Messenger**: Gửi đường link cho Mẹ kèm lời nhắn yêu thương. Link đã được thiết lập sẵn tiêu đề và hình ảnh thiệp xem trước trang nhã.
2. **In mã QR lên hoa tươi hoặc thiệp viết tay**: Vào trang [me-qr.com](https://me-qr.com/) hoặc [qr-code-generator.com](https://www.qr-code-generator.com/), dán link trang web vào để tải mã QR, in ra dán lên bó hoa tươi hoặc thiệp mừng tặng Mẹ!

---

Chúc hai Mẹ con có một ngày 20/10 ngập tràn niềm vui, thật nhiều xúc động và kỷ niệm đẹp khi cùng nhìn lại chặng đường 10 năm tuyệt vời này! 🌸💖
