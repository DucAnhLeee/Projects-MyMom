/**
 * THƯ GỬI MẸ YÊU THƯƠNG 20/10 - APP JAVASCRIPT
 * Thiết kế Mobile-First, Trải nghiệm mượt mà 60fps, Thân thiện với người lớn tuổi
 */

(function () {
  'use strict';

  // =========================================================================
  // CẤU HÌNH MẶC ĐỊNH (Fallback khi chưa tải được file json)
  // =========================================================================
  const DEFAULT_CONFIG = {
    recipientName: "Mẹ yêu",
    senderName: "Con của Mẹ",
    occasion: "Mừng Ngày Phụ Nữ Việt Nam 20/10",
    date: "Ngày 20 tháng 10",
    letter: {
      greeting: "Gửi Mẹ kính yêu của con,",
      paragraphs: [
        "Nhân ngày Phụ nữ Việt Nam 20/10, con xin gửi đến Mẹ những lời chúc ấm áp và chân thành nhất từ tận đáy lòng con.",
        "Cảm ơn Mẹ vì bao năm tháng qua đã luôn tần tảo, chở che và dành trọn vẹn tình yêu thương vô điều kiện cho gia đình mình. Từng bữa cơm ấm áp, từng lời dặn dò ân cần của Mẹ luôn là hành trang quý giá nhất trong cuộc đời con.",
        "Con chỉ mong Mẹ luôn dồi dào sức khỏe, tâm hồn luôn bình an, mỗi ngày đều ngập tràn niềm vui và nụ cười rạng rỡ.",
        "Dù đi đâu, về đâu, có Mẹ là có bến đỗ bình yên nhất!"
      ],
      closing: "Con yêu Mẹ rất nhiều ❤️",
      signature: "Con của Mẹ"
    },
    slideshow: {
      autoPlay: true,
      intervalMs: 5000,
      heading: "Khoảnh khắc gia đình"
    },
    audio: {
      enabled: true,
      src: "audio/nhac-tang-me.mp3",
      title: "Giai điệu dịu êm"
    },
    captions: {},
    ending: {
      title: "Con yêu Mẹ rất nhiều ❤️",
      message: "Cảm ơn Mẹ đã luôn là người Mẹ tuyệt vời nhất của con. Chúc Mẹ một ngày 20/10 thật hạnh phúc và ngập tràn yêu thương!",
      buttonRestart: "Xem lại từ đầu 🔄",
      buttonLetter: "Đọc lại thư 💌"
    }
  };

  // =========================================================================
  // STATE MANAGEMENT
  // =========================================================================
  const state = {
    config: DEFAULT_CONFIG,
    photos: [],
    currentIndex: 0,
    isPlaying: false,
    autoplayTimer: null,
    isZoomed: false,
    isLetterAnimated: false,
    currentScreen: 'envelope',
    isAudioPlaying: false,
    prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches
  };

  // =========================================================================
  // DOM ELEMENTS
  // =========================================================================
  const dom = {
    canvas: document.getElementById('petal-canvas'),
    musicBtn: document.getElementById('music-toggle-btn'),
    bgAudio: document.getElementById('bg-audio'),

    // Screens
    screenEnvelope: document.getElementById('screen-envelope'),
    screenLetter: document.getElementById('screen-letter'),
    screenSlideshow: document.getElementById('screen-slideshow'),
    modalEnding: document.getElementById('modal-ending'),

    // Envelope
    envelopeWrapper: document.getElementById('envelope-wrapper'),
    openEnvelopeBtn: document.getElementById('open-envelope-btn'),
    envOccasion: document.getElementById('env-occasion'),
    envTitle: document.getElementById('env-title'),

    // Letter
    letterOccasionBadge: document.getElementById('letter-occasion-badge'),
    letterGreeting: document.getElementById('letter-greeting'),
    letterParagraphs: document.getElementById('letter-paragraphs'),
    letterClosing: document.getElementById('letter-closing'),
    letterSignature: document.getElementById('letter-signature'),
    letterDate: document.getElementById('letter-date'),
    skipAnimationBtn: document.getElementById('skip-animation-btn'),
    goToSlideshowBtn: document.getElementById('go-to-slideshow-btn'),

    // Slideshow
    backToLetterBtn: document.getElementById('back-to-letter-btn'),
    currentIndexDisplay: document.getElementById('current-index-display'),
    totalPhotosDisplay: document.getElementById('total-photos-display'),
    zoomToggleBtn: document.getElementById('zoom-toggle-btn'),
    autoplayToggleBtn: document.getElementById('autoplay-toggle-btn'),
    autoplayIcon: document.getElementById('autoplay-icon'),
    autoplayText: document.getElementById('autoplay-text'),
    slideViewport: document.getElementById('slide-viewport'),
    slideBackdrop: document.getElementById('slide-backdrop'),
    mainSlideImg: document.getElementById('main-slide-img'),
    zoomHintPill: document.getElementById('zoom-hint-pill'),
    imageSpinner: document.getElementById('image-loading-spinner'),
    prevPhotoBtn: document.getElementById('prev-photo-btn'),
    nextPhotoBtn: document.getElementById('next-photo-btn'),
    photoCaptionCard: document.getElementById('photo-caption-card'),
    photoCaptionText: document.getElementById('photo-caption-text'),
    photoDots: document.getElementById('photo-dots-indicator'),
    emptyPhotosCard: document.getElementById('empty-photos-card'),
    emptyBackBtn: document.getElementById('empty-back-btn'),

    // Ending modal
    endingTitle: document.getElementById('ending-title'),
    endingMessage: document.getElementById('ending-message'),
    restartSlideshowBtn: document.getElementById('restart-slideshow-btn'),
    endingReadLetterBtn: document.getElementById('ending-read-letter-btn')
  };

  // =========================================================================
  // ÂM THANH DỊU NHẸ TỔNG HỢP (WEB AUDIO API CHIME)
  // Không cần tải file âm thanh ngoài, vẫn có tiếng chuông mở thư êm ái
  // =========================================================================
  function playMagicalChime() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;

      const ctx = new AudioContext();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Hợp âm du dương: C5, E5, G5, B5, C6 (đem lại cảm giác ấm áp, nhiệm màu)
      const notes = [523.25, 659.25, 783.99, 987.77, 1046.50];
      const now = ctx.currentTime;

      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0, now + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.12, now + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.9);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.9);
      });
    } catch (e) {
      console.warn('Web Audio API chime could not play:', e);
    }
  }

  // =========================================================================
  // KHỞI TẠO DỮ LIỆU (FETCH CONFIG & PHOTOS)
  // =========================================================================
  async function loadData() {
    // 1. Tải config.json
    try {
      const configRes = await fetch('config.json');
      if (configRes.ok) {
        state.config = await configRes.json();
      }
    } catch (err) {
      console.warn('Sử dụng cấu hình mặc định (không tải được config.json):', err);
    }

    // 2. Tải photos.json
    try {
      const photosRes = await fetch('photos.json');
      if (photosRes.ok) {
        state.photos = await photosRes.json();
      }
    } catch (err) {
      console.warn('Không tải được photos.json:', err);
      state.photos = [];
    }

    // Áp dụng dữ liệu vào giao diện
    applyConfig();
    setupAudio();
  }

  function applyConfig() {
    const { recipientName, occasion, date, letter, ending } = state.config;

    // Phong thư
    if (dom.envOccasion && occasion) dom.envOccasion.textContent = occasion;
    if (dom.envTitle && recipientName) dom.envTitle.textContent = `Gửi ${recipientName} yêu thương 💌`;

    // Lá thư
    if (dom.letterOccasionBadge && occasion) dom.letterOccasionBadge.textContent = occasion;
    if (dom.letterGreeting && letter.greeting) dom.letterGreeting.textContent = letter.greeting;
    if (dom.letterClosing && letter.closing) dom.letterClosing.textContent = letter.closing;
    if (dom.letterSignature && letter.signature) dom.letterSignature.textContent = letter.signature;
    if (dom.letterDate && date) dom.letterDate.textContent = date;

    // Render các đoạn văn trong thư
    if (dom.letterParagraphs && letter.paragraphs) {
      dom.letterParagraphs.innerHTML = '';
      letter.paragraphs.forEach((pText) => {
        const p = document.createElement('p');
        p.className = 'letter-paragraph';
        p.textContent = pText;
        dom.letterParagraphs.appendChild(p);
      });
    }

    // Modal kết thúc
    if (dom.endingTitle && ending && ending.title) dom.endingTitle.textContent = ending.title;
    if (dom.endingMessage && ending && ending.message) dom.endingMessage.textContent = ending.message;
    if (dom.restartSlideshowBtn && ending && ending.buttonRestart) {
      const textSpan = dom.restartSlideshowBtn.querySelector('.btn-text');
      if (textSpan) textSpan.textContent = ending.buttonRestart;
    }
    if (dom.endingReadLetterBtn && ending && ending.buttonLetter) {
      const textSpan = dom.endingReadLetterBtn.querySelector('.btn-text');
      if (textSpan) textSpan.textContent = ending.buttonLetter;
    }
  }

  // =========================================================================
  // HỆ THỐNG NHẠC NỀN
  // =========================================================================
  function setupAudio() {
    const audioConfig = state.config.audio;
    if (!audioConfig || !audioConfig.enabled || !audioConfig.src) {
      dom.musicBtn.classList.add('hidden');
      return;
    }

    dom.bgAudio.src = audioConfig.src;

    // Kiểm tra xem file audio có tồn tại không
    dom.bgAudio.addEventListener('canplay', () => {
      dom.musicBtn.classList.remove('hidden');
    });

    dom.bgAudio.addEventListener('error', () => {
      // Nếu file nhạc chưa có hoặc lỗi 404, ẩn nút để giao diện sạch sẽ
      console.info('Chưa có file nhạc nền trong thư mục /audio. Đang ẩn nút nhạc.');
      dom.musicBtn.classList.add('hidden');
    });

    dom.musicBtn.addEventListener('click', toggleAudio);
  }

  function toggleAudio() {
    if (dom.bgAudio.paused) {
      dom.bgAudio.play().then(() => {
        state.isAudioPlaying = true;
        dom.musicBtn.classList.add('playing');
        dom.musicBtn.querySelector('.music-text').textContent = 'Đang phát';
      }).catch((err) => {
        console.warn('Không thể phát nhạc nền:', err);
      });
    } else {
      dom.bgAudio.pause();
      state.isAudioPlaying = false;
      dom.musicBtn.classList.remove('playing');
      dom.musicBtn.querySelector('.music-text').textContent = 'Bật nhạc';
    }
  }

  // =========================================================================
  // HIỆU ỨNG CÁNH HOA & TRÁI TIM RƠI TRÊN CANVAS
  // =========================================================================
  class ParticleSystem {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.particles = [];
      this.confettiParticles = [];
      this.maxPetals = 28;
      this.animId = null;
      this.active = true;

      this.resize();
      window.addEventListener('resize', () => this.resize());
      this.initPetals();
      this.loop();
    }

    resize() {
      const dpr = window.devicePixelRatio || 1;
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.canvas.width = this.width * dpr;
      this.canvas.height = this.height * dpr;
      this.ctx.scale(dpr, dpr);
    }

    initPetals() {
      const colors = ['#FFCCD5', '#FFB3C1', '#FF85A1', '#FFE5EC', '#FBB1BD'];
      this.particles = [];
      for (let i = 0; i < this.maxPetals; i++) {
        this.particles.push({
          x: Math.random() * this.width,
          y: Math.random() * this.height,
          size: Math.random() * 9 + 6,
          speedY: Math.random() * 0.9 + 0.6,
          speedX: Math.random() * 0.8 - 0.4,
          rotation: Math.random() * 360,
          rotationSpeed: Math.random() * 1.5 - 0.75,
          color: colors[Math.floor(Math.random() * colors.length)],
          isHeart: Math.random() > 0.65,
          opacity: Math.random() * 0.45 + 0.35
        });
      }
    }

    burstConfetti() {
      const colors = ['#E63956', '#FF85A1', '#FFD166', '#06D6A0', '#118AB2', '#9B5DE5', '#F15BB5'];
      for (let i = 0; i < 90; i++) {
        this.confettiParticles.push({
          x: this.width / 2 + (Math.random() * 100 - 50),
          y: this.height * 0.45 + (Math.random() * 80 - 40),
          size: Math.random() * 8 + 5,
          vx: (Math.random() - 0.5) * 14,
          vy: Math.random() * -12 - 4,
          gravity: 0.32,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 10,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: 1,
          shape: Math.random() > 0.5 ? 'circle' : 'rect'
        });
      }
    }

    drawHeart(x, y, size, color, opacity, angle) {
      this.ctx.save();
      this.ctx.translate(x, y);
      this.ctx.rotate((angle * Math.PI) / 180);
      this.ctx.fillStyle = color;
      this.ctx.globalAlpha = opacity;
      this.ctx.beginPath();
      const topCurveHeight = size * 0.3;
      this.ctx.moveTo(0, topCurveHeight);
      this.ctx.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, topCurveHeight);
      this.ctx.bezierCurveTo(-size / 2, (size + topCurveHeight) / 2, 0, (size + topCurveHeight) / 1.4, 0, size);
      this.ctx.bezierCurveTo(0, (size + topCurveHeight) / 1.4, size / 2, (size + topCurveHeight) / 2, size / 2, topCurveHeight);
      this.ctx.bezierCurveTo(size / 2, 0, 0, 0, 0, topCurveHeight);
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.restore();
    }

    drawPetal(x, y, size, color, opacity, angle) {
      this.ctx.save();
      this.ctx.translate(x, y);
      this.ctx.rotate((angle * Math.PI) / 180);
      this.ctx.fillStyle = color;
      this.ctx.globalAlpha = opacity;
      this.ctx.beginPath();
      this.ctx.ellipse(0, 0, size * 0.6, size * 1.2, 0, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    }

    update() {
      // Cánh hoa rơi liên tục nhẹ nhàng
      this.particles.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin(p.y * 0.015) * 0.6 + p.speedX;
        p.rotation += p.rotationSpeed;

        if (p.y > this.height + 20) {
          p.y = -20;
          p.x = Math.random() * this.width;
        }
        if (p.x > this.width + 20) p.x = -20;
        if (p.x < -20) p.x = this.width + 20;

        if (p.isHeart) {
          this.drawHeart(p.x, p.y, p.size, p.color, p.opacity, p.rotation);
        } else {
          this.drawPetal(p.x, p.y, p.size, p.color, p.opacity, p.rotation);
        }
      });

      // Hạt confetti nổ chúc mừng
      for (let i = this.confettiParticles.length - 1; i >= 0; i--) {
        const c = this.confettiParticles[i];
        c.x += c.vx;
        c.y += c.vy;
        c.vy += c.gravity;
        c.rotation += c.rotationSpeed;
        c.opacity -= 0.009;

        if (c.opacity <= 0 || c.y > this.height + 40) {
          this.confettiParticles.splice(i, 1);
          continue;
        }

        this.ctx.save();
        this.ctx.translate(c.x, c.y);
        this.ctx.rotate((c.rotation * Math.PI) / 180);
        this.ctx.fillStyle = c.color;
        this.ctx.globalAlpha = Math.max(0, c.opacity);

        if (c.shape === 'circle') {
          this.ctx.beginPath();
          this.ctx.arc(0, 0, c.size / 2, 0, Math.PI * 2);
          this.ctx.fill();
        } else {
          this.ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size * 0.7);
        }
        this.ctx.restore();
      }
    }

    loop() {
      if (!state.prefersReducedMotion) {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.update();
      }
      this.animId = requestAnimationFrame(() => this.loop());
    }
  }

  let particleSystem = null;

  // =========================================================================
  // ĐIỀU HƯỚNG MÀN HÌNH (SCREEN TRANSITIONS)
  // =========================================================================
  function switchScreen(targetScreenName) {
    // Ẩn tất cả các màn hình
    dom.screenEnvelope.classList.remove('active');
    dom.screenEnvelope.hidden = true;

    dom.screenLetter.classList.remove('active');
    dom.screenLetter.hidden = true;

    dom.screenSlideshow.classList.remove('active');
    dom.screenSlideshow.hidden = true;

    // Dừng autoplay nếu rời khỏi slideshow
    if (targetScreenName !== 'slideshow') {
      stopAutoplay();
    }

    if (targetScreenName === 'envelope') {
      dom.screenEnvelope.classList.add('active');
      dom.screenEnvelope.hidden = false;
      state.currentScreen = 'envelope';
    } else if (targetScreenName === 'letter') {
      dom.screenLetter.classList.add('active');
      dom.screenLetter.hidden = false;
      state.currentScreen = 'letter';
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Kích hoạt hiệu ứng xuất hiện các đoạn văn
      if (!state.isLetterAnimated) {
        animateLetterText();
      }
    } else if (targetScreenName === 'slideshow') {
      dom.screenSlideshow.classList.add('active');
      dom.screenSlideshow.hidden = false;
      state.currentScreen = 'slideshow';

      // Kiểm tra danh sách ảnh
      if (state.photos.length === 0) {
        dom.emptyPhotosCard.classList.remove('hidden');
        dom.slideStage.classList.add('hidden');
        dom.prevPhotoBtn.classList.add('hidden');
        dom.nextPhotoBtn.classList.add('hidden');
        dom.photoCaptionCard.classList.add('hidden');
        dom.photoDots.classList.add('hidden');
      } else {
        dom.emptyPhotosCard.classList.add('hidden');
        dom.slideStage.classList.remove('hidden');
        dom.prevPhotoBtn.classList.remove('hidden');
        dom.nextPhotoBtn.classList.remove('hidden');
        dom.photoCaptionCard.classList.remove('hidden');
        dom.photoDots.classList.remove('hidden');

        initSlideshow();
      }
    }
  }

  // =========================================================================
  // XỬ LÝ MÀN HÌNH 1: MỞ PHONG THƯ
  // =========================================================================
  function handleOpenEnvelope() {
    if (dom.envelopeWrapper.classList.contains('opening')) return;

    dom.envelopeWrapper.classList.add('opening');
    playMagicalChime();

    // Tự động thử phát nhạc nếu người dùng cho phép sau tương tác đầu tiên
    if (state.config.audio.enabled && dom.bgAudio.src && dom.bgAudio.paused) {
      dom.bgAudio.play().then(() => {
        state.isAudioPlaying = true;
        dom.musicBtn.classList.add('playing');
        dom.musicBtn.querySelector('.music-text').textContent = 'Đang phát';
      }).catch(() => {
        // Trình duyệt có thể vẫn chặn, không sao cả
      });
    }

    // Thời gian hiệu ứng mở phong thư (700ms) trước khi trượt lên màn hình đọc thư
    setTimeout(() => {
      switchScreen('letter');
    }, 700);
  }

  // =========================================================================
  // XỬ LÝ MÀN HÌNH 2: NỘI DUNG LÁ THƯ
  // =========================================================================
  function animateLetterText() {
    state.isLetterAnimated = true;
    const paragraphs = dom.letterParagraphs.querySelectorAll('.letter-paragraph');

    if (state.prefersReducedMotion) {
      paragraphs.forEach((p) => p.classList.add('visible'));
      return;
    }

    paragraphs.forEach((p, idx) => {
      setTimeout(() => {
        p.classList.add('visible');
      }, 250 * (idx + 1));
    });
  }

  function skipLetterAnimation() {
    const paragraphs = dom.letterParagraphs.querySelectorAll('.letter-paragraph');
    paragraphs.forEach((p) => p.classList.add('visible'));
    dom.skipAnimationBtn.style.display = 'none';
  }

  // =========================================================================
  // XỬ LÝ MÀN HÌNH 3: SLIDESHOW ẢNH
  // =========================================================================
  function initSlideshow() {
    dom.totalPhotosDisplay.textContent = state.photos.length;
    renderDots();
    showSlide(state.currentIndex);

    // Kích hoạt autoplay nếu config cho phép
    if (state.config.slideshow.autoPlay) {
      startAutoplay();
    } else {
      updateAutoplayUI(false);
    }
  }

  function renderDots() {
    dom.photoDots.innerHTML = '';
    state.photos.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.className = `dot-btn ${idx === state.currentIndex ? 'active' : ''}`;
      dot.setAttribute('type', 'button');
      dot.setAttribute('aria-label', `Xem ảnh số ${idx + 1}`);
      dot.addEventListener('click', () => {
        showSlide(idx);
        resetAutoplayTimer();
      });
      dom.photoDots.appendChild(dot);
    });
  }

  function updateDots() {
    const dots = dom.photoDots.querySelectorAll('.dot-btn');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === state.currentIndex);
    });
  }

  function showSlide(index) {
    if (state.photos.length === 0) return;

    // Reset zoom khi chuyển ảnh
    resetZoom();

    if (index < 0) {
      state.currentIndex = state.photos.length - 1;
    } else if (index >= state.photos.length) {
      // Đã xem hết ảnh cuối cùng -> hiện màn hình kết thúc chúc mừng
      showEndingModal();
      return;
    } else {
      state.currentIndex = index;
    }

    const photo = state.photos[state.currentIndex];
    dom.currentIndexDisplay.textContent = state.currentIndex + 1;
    updateDots();

    // Hiện loading spinner
    dom.imageSpinner.classList.remove('hidden');
    dom.mainSlideImg.style.opacity = '0';

    // Đổi ảnh nền mờ nghệ thuật
    dom.slideBackdrop.style.backgroundImage = `url('${photo.src}')`;

    // Tải và đổi ảnh chính
    const tempImg = new Image();
    tempImg.onload = () => {
      dom.mainSlideImg.src = photo.src;
      dom.mainSlideImg.alt = photo.alt || `Kỷ niệm gia đình số ${state.currentIndex + 1}`;
      dom.mainSlideImg.style.opacity = '1';
      dom.imageSpinner.classList.add('hidden');
    };
    tempImg.onerror = () => {
      dom.imageSpinner.classList.add('hidden');
      dom.mainSlideImg.style.opacity = '1';
    };
    tempImg.src = photo.src;

    // Hiển thị chú thích ảnh từ config.json nếu có
    const caption = state.config.captions && state.config.captions[photo.filename];
    if (caption) {
      dom.photoCaptionText.textContent = caption;
      dom.photoCaptionCard.classList.remove('hidden');
    } else {
      dom.photoCaptionCard.classList.add('hidden');
    }

    // Preload ảnh tiếp theo để chuyển ảnh siêu mượt
    preloadNextImage();
  }

  function preloadNextImage() {
    const nextIdx = (state.currentIndex + 1) % state.photos.length;
    if (state.photos[nextIdx]) {
      const preloadImg = new Image();
      preloadImg.src = state.photos[nextIdx].src;
    }
  }

  function prevSlide() {
    showSlide(state.currentIndex - 1);
    resetAutoplayTimer();
  }

  function nextSlide() {
    showSlide(state.currentIndex + 1);
    resetAutoplayTimer();
  }

  // Phóng to / Thu nhỏ ảnh
  function toggleZoom() {
    state.isZoomed = !state.isZoomed;
    dom.mainSlideImg.classList.toggle('is-zoomed', state.isZoomed);
    dom.zoomHintPill.style.display = state.isZoomed ? 'none' : 'block';
  }

  function resetZoom() {
    state.isZoomed = false;
    dom.mainSlideImg.classList.remove('is-zoomed');
    dom.zoomHintPill.style.display = 'block';
  }

  // Điều khiển Tự động phát (Autoplay)
  function startAutoplay() {
    stopAutoplay();
    state.isPlaying = true;
    updateAutoplayUI(true);

    const interval = (state.config.slideshow && state.config.slideshow.intervalMs) || 5000;
    state.autoplayTimer = setInterval(() => {
      // Nếu đang phóng to ảnh thì không tự chuyển để mẹ ngắm
      if (!state.isZoomed) {
        nextSlide();
      }
    }, interval);
  }

  function stopAutoplay() {
    state.isPlaying = false;
    if (state.autoplayTimer) {
      clearInterval(state.autoplayTimer);
      state.autoplayTimer = null;
    }
    updateAutoplayUI(false);
  }

  function toggleAutoplay() {
    if (state.isPlaying) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  }

  function resetAutoplayTimer() {
    if (state.isPlaying) {
      startAutoplay();
    }
  }

  function updateAutoplayUI(isPlaying) {
    if (isPlaying) {
      dom.autoplayIcon.textContent = '⏸';
      dom.autoplayText.textContent = 'Tự động';
      dom.autoplayToggleBtn.classList.add('active');
    } else {
      dom.autoplayIcon.textContent = '▶';
      dom.autoplayText.textContent = 'Phát';
      dom.autoplayToggleBtn.classList.remove('active');
    }
  }

  // =========================================================================
  // XỬ LÝ CỬ CHỈ VUỐT TRÊN MÀN HÌNH DI ĐỘNG (TOUCH SWIPE)
  // =========================================================================
  function setupTouchGestures() {
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    const minSwipeDistance = 45; // pixel

    dom.slideViewport.addEventListener('touchstart', (e) => {
      if (state.isZoomed) return; // Cho phép cuộn khi phóng to
      const touch = e.changedTouches[0];
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
    }, { passive: true });

    dom.slideViewport.addEventListener('touchend', (e) => {
      if (state.isZoomed) return;
      const touch = e.changedTouches[0];
      touchEndX = touch.clientX;
      touchEndY = touch.clientY;
      handleSwipeGesture();
    }, { passive: true });

    function handleSwipeGesture() {
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;

      // Đảm bảo là cử chỉ vuốt ngang, không phải vuốt dọc
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
        if (deltaX < 0) {
          // Vuốt sang trái -> Ảnh tiếp theo
          nextSlide();
        } else {
          // Vuốt sang phải -> Ảnh trước đó
          prevSlide();
        }
      }
    }
  }

  // =========================================================================
  // MÀN HÌNH KẾT THÚC / CHÚC MỪNG (ENDING MODAL)
  // =========================================================================
  function showEndingModal() {
    stopAutoplay();
    dom.modalEnding.classList.remove('hidden');

    // Bắn pháo giấy chúc mừng
    if (particleSystem) {
      particleSystem.burstConfetti();
    }
  }

  function hideEndingModal() {
    dom.modalEnding.classList.add('hidden');
  }

  // =========================================================================
  // SỰ KIỆN PHÍM BÀN PHÍM (ACCESSIBILITY KEYBOARD NAVIGATION)
  // =========================================================================
  function setupKeyboardNav() {
    window.addEventListener('keydown', (e) => {
      if (state.currentScreen === 'slideshow' && dom.modalEnding.classList.contains('hidden')) {
        if (e.key === 'ArrowLeft') {
          prevSlide();
        } else if (e.key === 'ArrowRight') {
          nextSlide();
        } else if (e.key === ' ' || e.key === 'Spacebar') {
          e.preventDefault();
          toggleAutoplay();
        } else if (e.key === 'Escape') {
          if (state.isZoomed) resetZoom();
        }
      }
    });
  }

  // =========================================================================
  // GẮN CÁC SỰ KIỆN TƯƠNG TÁC
  // =========================================================================
  function bindEvents() {
    // Mở phong thư
    dom.envelopeWrapper.addEventListener('click', handleOpenEnvelope);
    dom.openEnvelopeBtn.addEventListener('click', handleOpenEnvelope);
    dom.envelopeWrapper.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleOpenEnvelope();
      }
    });

    // Màn hình lá thư
    dom.skipAnimationBtn.addEventListener('click', skipLetterAnimation);
    dom.goToSlideshowBtn.addEventListener('click', () => switchScreen('slideshow'));

    // Màn hình slideshow
    dom.backToLetterBtn.addEventListener('click', () => switchScreen('letter'));
    dom.prevPhotoBtn.addEventListener('click', prevSlide);
    dom.nextPhotoBtn.addEventListener('click', nextSlide);
    dom.mainSlideImg.addEventListener('click', toggleZoom);
    dom.zoomToggleBtn.addEventListener('click', toggleZoom);
    dom.autoplayToggleBtn.addEventListener('click', toggleAutoplay);
    dom.emptyBackBtn.addEventListener('click', () => switchScreen('letter'));

    // Màn hình kết thúc
    dom.restartSlideshowBtn.addEventListener('click', () => {
      hideEndingModal();
      showSlide(0);
      startAutoplay();
    });
    dom.endingReadLetterBtn.addEventListener('click', () => {
      hideEndingModal();
      switchScreen('letter');
    });

    // Cử chỉ chạm vuốt & bàn phím
    setupTouchGestures();
    setupKeyboardNav();
  }

  // =========================================================================
  // KHỞI CHẠY ỨNG DỤNG
  // =========================================================================
  async function init() {
    particleSystem = new ParticleSystem(dom.canvas);
    bindEvents();
    await loadData();
  }

  // Khi tài liệu sẵn sàng
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
