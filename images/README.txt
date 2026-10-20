===========================================================
  HƯỚNG DẪN THÊM ẢNH GIA ĐÌNH VÀO DỰ ÁN (THƯ MỤC /images)
===========================================================

1. CÁCH THÊM ẢNH:
   - Bạn chỉ cần copy/paste ảnh của gia đình vào thư mục này (`images/`).
   - Nếu dùng GitHub trên trình duyệt: Vào thư mục `images` trên repo -> bấm nút "Add file" -> "Upload files" -> Kéo thả ảnh vào rồi bấm "Commit changes".
   - GitHub Actions sẽ TỰ ĐỘNG quét tất cả ảnh và đưa vào slideshow, bạn KHÔNG cần sửa bất kỳ dòng code nào!

2. CÁC ĐỊNH DẠNG HỖ TRỢ:
   - .jpg, .jpeg, .png, .webp, .svg, .gif
   - Lưu ý: Ảnh chụp từ iPhone có đuôi .heic hoặc .heif thì vui lòng đổi sang .jpg trước khi bỏ vào để mọi điện thoại đều xem được nhé.

3. ĐẶT TÊN FILE ĐỂ SẮP XẾP THỨ TỰ:
   - Hệ thống sẽ hiển thị ảnh theo thứ tự tên file từ A đến Z.
   - Bạn nên đặt tên ảnh có số thứ tự ở đầu, ví dụ:
     01-gia-dinh.jpg
     02-me-va-con.jpg
     03-ba-me-du-lich.jpg
     04-chuc-mung-me.jpg

4. KÍCH THƯỚC VÀ DUNG LƯỢNG KHUYẾN NGHỊ:
   - Cạnh dài nhất của ảnh: khoảng 1200px - 1600px là cực kỳ nét trên điện thoại.
   - Dung lượng mỗi ảnh: dưới 500 KB (hoặc dưới 1 MB) để mẹ mở bằng 4G tải vù vù, không bị chậm.
   - Bạn có thể nén ảnh miễn phí nhanh chóng tại: https://tinypng.com/ hoặc https://squoosh.app/

5. THÊM CHÚ THÍCH DƯỚI TỪNG BỨC ẢNH (TÙY CHỌN):
   - Mở file `config.json` ở thư mục gốc.
   - Trong mục "captions", điền tên file ảnh và câu chú thích tương ứng, ví dụ:
     "captions": {
       "01-gia-dinh.jpg": "Cả nhà mình đi chơi Đà Lạt 🌸",
       "02-me-va-con.jpg": "Khoảnh khắc tuyệt vời bên Mẹ yêu ❤️"
     }
   - Nếu ảnh nào không có chú thích, hệ thống sẽ tự động không hiển thị chữ, chỉ hiện ảnh trọn vẹn.

6. XÓA ẢNH MẪU MINH HỌA:
   - Khi bạn đã có ảnh thật của gia đình, bạn có thể xóa các file:
     01-gia-dinh-hanh-phuc.svg
     02-me-va-con.svg
     03-ky-niem-am-ap.svg
     04-chuc-mung-20-10.svg
   - Sau đó push lên GitHub, trang web sẽ chỉ hiển thị ảnh của gia đình bạn!
