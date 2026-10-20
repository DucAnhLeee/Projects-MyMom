/**
 * scripts/generate-photos.js
 * Quét thư mục /images và tự động tạo photos.json
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const IMAGES_DIR = path.join(ROOT_DIR, 'images');
const OUTPUT_FILE = path.join(ROOT_DIR, 'photos.json');

const VALID_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.svg', '.gif']);

function generatePhotosList() {
  console.log('🔍 Đang quét thư mục ảnh:', IMAGES_DIR);

  if (!fs.existsSync(IMAGES_DIR)) {
    console.warn('⚠️ Thư mục /images chưa tồn tại. Đang tạo mới...');
    fs.mkdirSync(IMAGES_DIR, { recursive: true });
  }

  const entries = fs.readdirSync(IMAGES_DIR, { withFileTypes: true });

  const photoFiles = entries
    .filter(entry => {
      if (!entry.isFile()) return false;
      const ext = path.extname(entry.name).toLowerCase();
      return VALID_EXTENSIONS.has(ext);
    })
    .map(entry => entry.name)
    // Sắp xếp tự nhiên (1, 2, 10 thay vì 1, 10, 2)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

  const photosData = photoFiles.map((filename, index) => {
    // Tên file bỏ phần đuôi và thay gạch ngang thành khoảng trắng để làm alt text mặc định
    const rawName = path.parse(filename).name.replace(/^[0-9]+[_\-\s]*/, '').replace(/[-_]+/g, ' ').trim();
    const cleanAlt = rawName || `Kỷ niệm gia đình ${index + 1}`;

    return {
      src: `images/${filename}`,
      filename: filename,
      alt: cleanAlt
    };
  });

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(photosData, null, 2), 'utf-8');

  console.log(`✅ Đã tìm thấy ${photosData.length} ảnh hợp lệ.`);
  console.log(`📄 Đã cập nhật file: ${OUTPUT_FILE}`);
  photosData.forEach((p, i) => console.log(`   [${i + 1}] ${p.filename}`));
}

try {
  generatePhotosList();
} catch (error) {
  console.error('❌ Lỗi khi quét thư mục ảnh:', error);
  process.exit(1);
}
