# ⏳ Thư Gửi Mẹ - Dòng Thời Gian "Ngày Ấy & Bây Giờ" 🌸

> Món quà 20/10 đong đầy xúc cảm dành tặng Mẹ kính yêu.  
> Trải nghiệm trên điện thoại: **Mở link → Thấy phong thư sang trọng → Chạm mở thư đọc lời chúc → Bấm sang dòng thời gian "Ngày ấy – Bây giờ" gồm 6 mốc ảnh quan trọng của Mẹ từ quá khứ đến hiện tại.**

---

## 🌟 Điểm Nổi Bật Của Món Quà

- 📱 **Mobile-First chuẩn mực**: Thiết kế chuyên biệt cho điện thoại (360px – 430px), hỗ trợ tai thỏ iPhone (safe-area), không bị tràn ngang.
- 👵 **Thân thiện với người lớn tuổi**: Cỡ chữ to rõ ràng (>= 20px), độ tương phản cao sắc nét (chuẩn WCAG AAA), font chữ tiếng Việt có dấu đẹp mắt, nút bấm to dễ chạm.
- ✉️ **Hiệu ứng mở phong thư chân thực**: Con dấu sáp trái tim, cánh nắp mở 60fps mượt mà kèm tiếng chuông ngân nga dịu êm.
- ⏳ **Dòng thời gian "Ngày ấy – Bây giờ"**: 6 mốc thời gian dọc theo cuộc đời Mẹ (Thuở thanh xuân ➜ Ngày cưới ➜ Khi con chào đời ➜ Những năm tháng vì con ➜ Gia đình sum vầy ➜ BÂY GIỜ). Mốc cuối "BÂY GIỜ" được viền vàng gold sang trọng nổi bật!
- ⚖️ **Chế độ so sánh "Ngày ấy ⇄ Bây giờ"**: Thanh trượt cảm ứng bằng một ngón tay cho phép Mẹ so sánh bức ảnh thuở đôi mươi và bức ảnh hiện tại.
- 🔍 **Xem ảnh phóng to toàn màn hình**: Chạm vào bất kỳ ảnh nào để ngắm rõ từng nụ cười, có nút "✕ Đóng" to rõ.
- 🎵 **Nhạc nền tùy chọn**: Tự động phát nhạc khi Mẹ muốn (đã có sẵn file mẫu trong thư mục `audio/`).

---

## 📂 Cấu Trúc Thư Mục Dự Án

```text
/
├── index.html                   ← Giao diện chính của món quà
├── css/
│   └── style.css                ← Giao diện ấm áp, tương phản cao, tối ưu di động
├── js/
│   └── app.js                   ← Mở thư, cuộn mốc thời gian, bộ so sánh Ngày ấy - Bây giờ
├── images/                      ← THƯ MỤC CHỨA 6 ẢNH KỶ NIỆM CỦA MẸ
│   ├── 01.jpg                   ← Mốc 1: Thuở thanh xuân
│   ├── 02.jpg                   ← Mốc 2: Ngày cưới hạnh phúc
│   ├── 03.jpg                   ← Mốc 3: Khi con chào đời
│   ├── 04.jpg                   ← Mốc 4: Những năm tháng vì con
│   ├── 05.jpg                   ← Mốc 5: Gia đình sum vầy
│   ├── 06.jpg                   ← Mốc 6: BÂY GIỜ (Hiện tại)
│   └── README.txt               ← Hướng dẫn chi tiết về ảnh
├── audio/                       ← THƯ MỤC CHỨA NHẠC NỀN
│   ├── nhac-tang-me.mp3         ← Bài hát tặng Mẹ
│   └── README.txt
├── config.json                  ← TOÀN BỘ nội dung: Lời chúc + 6 mốc thời gian
├── .github/
│   └── workflows/
│       └── deploy.yml           ← Tự động deploy lên GitHub Pages mỗi lần push
└── README.md
```

---

## 🚀 Hướng Dẫn Từng Bước (Cho Người Không Rành Code)

### 1. Cách đưa dự án lên GitHub & Lấy link cho Mẹ

#### Bước 1: Tạo kho lưu trữ (Repository) mới trên GitHub
1. Đăng nhập [GitHub.com](https://github.com/).
2. Bấm vào dấu **`+`** ở góc trên bên phải → Chọn **New repository**.
3. Đặt tên gợi ý: **`ngay-ay-bay-gio-20-10`**.
4. Chọn chế độ **Public** (để dùng GitHub Pages miễn phí).
5. **Không** tích chọn "Add a README file" hay bất kỳ tùy chọn nào khác.
6. Bấm nút xanh **Create repository**.

#### Bước 2: Đẩy mã nguồn từ máy tính lên GitHub
Mở PowerShell tại thư mục dự án và chạy các lệnh sau (thay `<ten-tai-khoan-github>` bằng username của bạn):

```powershell
git remote add origin https://github.com/<ten-tai-khoan-github>/ngay-ay-bay-gio-20-10.git
git branch -M main
git push -u origin main
```

#### Bước 3: Bật GitHub Pages bằng GitHub Actions (Rất quan trọng!)
1. Trên repo GitHub của bạn, bấm vào tab **Settings** (Cài đặt).
2. Ở menu bên trái, tìm mục **Pages** (dưới nhóm *Code and automation*).
3. Tại phần **Build and deployment** → mục **Source**, chọn:  
   👉 **`GitHub Actions`**
4. Chờ khoảng 1 phút để GitHub Actions chạy xong. Đường link trang web sẽ hiển thị ngay trên đầu trang Pages:  
   👉 **`https://<ten-tai-khoan-github>.github.io/ngay-ay-bay-gio-20-10/`**

---

### 2. Cách thay 6 bức ảnh của gia đình (Cực kỳ dễ)

Hệ thống đã định sẵn 6 file ảnh trong thư mục `images/`:
- `01.jpg` – Thuở thanh xuân của Mẹ
- `02.jpg` – Ngày cưới của Ba Mẹ
- `03.jpg` – Lúc Mẹ sinh con đầu lòng
- `04.jpg` – Những năm tháng vất vả nuôi con khôn lớn
- `05.jpg` – Cả gia đình sum vầy bên Mẹ
- `06.jpg` – Bức ảnh đẹp nhất của Mẹ **BÂY GIỜ**

#### Cách thay ảnh trực tiếp trên trình duyệt (không cần cài phần mềm):
1. Vào repo trên GitHub ➜ Bấm vào thư mục **`images`**.
2. Bấm nút **Add file** (góc phải) ➜ Chọn **Upload files**.
3. Chọn 6 bức ảnh thật của gia đình bạn (đặt đúng tên từ `01.jpg` đến `06.jpg`).
4. Kéo thả vào trình duyệt và cuộn xuống bấm nút xanh **Commit changes**.
5. **Xong!** GitHub sẽ tự cập nhật trang web sau khoảng 1 phút.

> 💡 **Mẹo nhỏ về ảnh**:
> - Khuyến nghị ảnh có dung lượng dưới 500 KB để Mẹ mở bằng 4G tải cực nhanh. Nén ảnh miễn phí tại: [tinypng.com](https://tinypng.com/)
> - Nếu ảnh chụp từ iPhone có đuôi `.heic`, hãy đổi sang `.jpg` trước khi tải lên.

---

### 3. Cách sửa lời chúc, năm và lời kể trong `config.json`

Mở file **`config.json`** trên GitHub (bấm vào biểu tượng cây bút ✏️ để sửa trực tiếp):

```json
{
  "recipientName": "Mẹ yêu",
  "senderName": "Con của Mẹ",
  "letter": {
    "greeting": "Gửi Mẹ kính yêu của con,",
    "paragraphs": [
      "Nhân ngày Phụ nữ Việt Nam 20/10, con xin gửi đến Mẹ những lời chúc ấm áp...",
      "Hôm nay, con muốn cùng Mẹ nhìn lại cuốn phim thời gian..."
    ]
  },
  "timeline": [
    {
      "image": "images/01.jpg",
      "year": "1992",
      "stage": "Thuở thanh xuân",
      "title": "Nụ cười rạng rỡ tuổi đôi mươi",
      "caption": "Mẹ của những năm tháng thanh xuân tươi đẹp nhất..."
    },
    ...
    {
      "image": "images/06.jpg",
      "year": "BÂY GIỜ",
      "stage": "BÂY GIỜ",
      "title": "Mẹ mãi là điều tuyệt vời nhất",
      "caption": "Dù mái tóc Mẹ đã điểm thêm sợi bạc, Mẹ vẫn luôn là người phụ nữ đẹp nhất..."
    }
  ]
}
```

- Bạn có thể chỉnh lại số năm (`year`), tên giai đoạn (`stage`), tiêu đề (`title`) và lời tâm sự (`caption`) phù hợp với câu chuyện gia đình mình.
- Sau khi sửa xong, bấm nút **Commit changes** ở góc phải để lưu lại.

---

### 4. Cách bật/tắt nhạc nền

- Dự án đã có sẵn file nhạc mẫu `audio/nhac-tang-me.mp3`.
- Bạn có thể thay bằng bài hát Mẹ yêu thích (ví dụ: *Nhật Ký Của Mẹ*, *Mẹ Yêu*, *Ước Mơ Của Mẹ*...) bằng cách copy file `.mp3` mới vào thư mục `audio/` và giữ nguyên tên `nhac-tang-me.mp3`.
- Nút **"Bật nhạc 🎵"** hiển thị trang nhã ở góc trên bên phải màn hình. Mẹ có thể bấm bật/tắt bất kỳ lúc nào. Nếu không có file nhạc, nút sẽ tự động ẩn đi.

---

### 5. Cách gửi quà cho Mẹ & Tạo mã QR ý nghĩa

1. **Gửi qua Zalo / Messenger**:  
   Gửi đường link cho Mẹ kèm lời nhắn yêu thương. Link đã được cài sẵn ảnh bìa và tiêu đề thiệp đẹp mắt.
2. **In mã QR lên hoa tươi hoặc thiệp viết tay**:  
   Truy cập [me-qr.com](https://me-qr.com/) hoặc [qr-code-generator.com](https://www.qr-code-generator.com/), dán link trang web vào để tạo mã QR. In mã dán lên thiệp mừng tặng Mẹ, hướng dẫn Mẹ dùng camera điện thoại quét để mở quà!

---

## ❓ Câu Hỏi Thường Gặp & Xử Lý Sự Cố

- **Hỏi: Tôi vừa thay ảnh và sửa lời chúc nhưng vào web chưa thấy đổi?**  
  *Đáp*: Trình duyệt thường lưu cache. Bạn hãy:
  1. Vào tab **Actions** trên repo GitHub xem quy trình deploy đã hiện dấu tích xanh ✅ chưa (khoảng 1 phút).
  2. Mở web bằng tab ẩn danh (Private/Incognito) trên điện thoại hoặc vuốt kéo xuống để tải lại trang.

- **Hỏi: Một ảnh bị lỗi không tải được thì có bị trang trắng không?**  
  *Đáp*: Không! Trang web có cơ chế bảo vệ tự động: nếu ảnh nào bị lỗi, hệ thống sẽ hiện một khung thiệp hoa ấm áp ghi rõ mốc thời gian thay vì để ô trống hay bị gián đoạn.

- **Hỏi: Tính riêng tư của ảnh thế nào?**  
  *Đáp*: Vì GitHub Pages miễn phí yêu cầu kho lưu trữ Public, bất kỳ ai có đường link đều xem được. Bạn nên chọn lọc những bức ảnh kỷ niệm vui tươi, ấm áp và phù hợp với gia đình nhé!

---

Chúc Mẹ của bạn có một ngày 20/10 ngập tràn nụ cười, hạnh phúc và xúc động khi cùng con nhìn lại hành trình tuyệt vời này! 🌸💖
