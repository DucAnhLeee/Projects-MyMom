/**
 * THƯ GỬI MẸ YÊU THƯƠNG 20/10 - "NGÀY ẤY & BÂY GIỜ"
 * JavaScript thuần (Vanilla JS), Tối ưu Mobile-First, Trải nghiệm 60fps mượt mà
 */

(function () {
  'use strict';

  // =========================================================================
  // DỮ LIỆU CẤU HÌNH MẶC ĐỊNH (Fallback khi chưa tải được file json)
  // =========================================================================
  const DEFAULT_CONFIG = {
    recipientName: "Mẹ yêu",
    senderName: "Con của Mẹ (sinh năm 2006)",
    occasion: "Mừng Ngày Phụ Nữ Việt Nam 20/10",
    date: "Ngày 20 tháng 10 năm 2026",
    letter: {
      greeting: "Gửi Mẹ kính yêu của con,",
      paragraphs: [
        "Nhân ngày Phụ nữ Việt Nam 20/10, con xin gửi đến Mẹ những lời chúc ấm áp nhất và lòng biết ơn sâu sắc từ tận đáy lòng con.",
        "Con sinh năm 2006, thấm thoát năm nay con đã tròn 20 tuổi. Suốt 20 năm qua, từng bữa cơm ấm áp, từng lời dặn dò ân cần của Mẹ luôn là hành trang quý giá nhất giúp con khôn lớn nên người.",
        "Hôm nay, con muốn cùng Mẹ mở lại cuốn phim thời gian ghi dấu 10 năm qua (từ 2016 đến nay). Nhìn lại từng chặng đường hai mẹ con mình đi qua, con càng thấu hiểu và trân trọng hơn bao hy sinh, tần tảo thầm lặng của Mẹ.",
        "Con đã lớn khôn rồi Mẹ nhé, từ nay hãy để con trở thành điểm tựa vững chãi và mang lại thật nhiều niềm vui cho Mẹ!"
      ],
      closing: "Con yêu Mẹ rất nhiều ❤️",
      signature: "Con của Mẹ"
    },
    audio: {
      enabled: true,
      src: "audio/nhac-tang-me.mp3",
      title: "Giai điệu tặng Mẹ"
    },
    timelineTitle: "Ngày ấy – Bây giờ",
    timelineSubtitle: "Hành trình 10 năm yêu thương: Từ ngày con 10 tuổi (2016) đến khi con 20 tuổi (2026)",
    timeline: [
      {
        images: ["images/01a.jpg", "images/01b.jpg"],
        image: "images/01a.jpg",
        year: "2016",
        stage: "Tuổi thơ bên Mẹ (Con 10 tuổi)",
        title: "Nét dịu hiền của Mẹ",
        caption: "Năm 2016 khi con tròn 10 tuổi. Trong ký ức tuổi thơ của con, Mẹ luôn là người phụ nữ đẹp nhất, nụ cười hiền hậu và bàn tay Mẹ luôn ấp ôm, chăm lo cho con từng chút một."
      },
      {
        image: "images/02.jpg",
        year: "2018",
        stage: "Con 12 tuổi",
        title: "Khoảnh khắc hai Mẹ con",
        caption: "Năm 2018, con bước vào tuổi thiếu niên với bao điều mới lạ. Đứng bên Mẹ, con dần cảm nhận được bờ vai Mẹ đã vì con mà gánh vác bao lo toan thường nhật."
      },
      {
        image: "images/03.jpg",
        year: "2020",
        stage: "Con 14 tuổi",
        title: "Điểm tựa bình yên nhất",
        caption: "Năm 2020, những năm tháng học trò nhiều bỡ ngỡ. Dù cuộc sống ngoài kia có bao biến động, trở về bên Mẹ con luôn tìm thấy sự bình yên và ấm áp nhất."
      },
      {
        image: "images/04.jpg",
        year: "2021",
        stage: "Con 15 tuổi",
        title: "Con dần khôn lớn",
        caption: "Năm 2021, con bước vào cấp 3 và bắt đầu cao lớn hơn Mẹ. Nhưng dù con có lớn đến đâu, trong ánh mắt dịu dàng của Mẹ, con vẫn mãi là đứa con bé bỏng ngày nào."
      },
      {
        image: "images/05.jpg",
        year: "2025",
        stage: "Con 19 tuổi",
        title: "Hành trang bước vào đời",
        caption: "Năm 2025, con 19 tuổi bước những bước đi vững chãi đầu tiên vào đời. Hành trang quý giá nhất con mang theo chính là tình thương bao la và niềm tin Mẹ trao cho con."
      },
      {
        image: "images/06.jpg",
        year: "BÂY GIỜ",
        stage: "BÂY GIỜ (2026 - Con 20 tuổi)",
        title: "Con đã lớn, để con là điểm tựa của Mẹ! ❤️",
        caption: "Năm 2026 - Con tròn 20 tuổi! Cảm ơn Mẹ đã dành trọn 20 năm thanh xuân vì con. Giờ đây con đã trưởng thành, con chỉ mong Mẹ luôn mạnh khỏe, an yên và mãi nở nụ cười rạng rỡ!"
      }
    ],
    comparison: {
      buttonText: "Ngày ấy ⇄ Bây giờ",
      title: "Ngày ấy & Bây giờ",
      subtitle: "Hành trình 10 năm (2016 – 2026): Con đã lớn khôn, và Mẹ vẫn mãi là người phụ nữ tuyệt vời nhất đời con!",
      labelBefore: "Năm 2016",
      labelAfter: "Bây giờ (2026)"
    },
    ending: {
      title: "Con yêu Mẹ rất nhiều ❤️",
      message: "Cảm ơn Mẹ vì 20 năm qua đã luôn là người Mẹ tuyệt vời nhất của con. Chúc Mẹ ngày 20/10 ngập tràn niềm vui, dồi dào sức khỏe và luôn hạnh phúc!",
      buttonRestart: "Xem lại từ đầu 🔄",
      buttonLetter: "Đọc lại thư 💌"
    }
  };

  // =========================================================================
  // TRẠNG THÁI ỨNG DỤNG (STATE)
  // =========================================================================
  const state = {
    config: DEFAULT_CONFIG,
    currentScreen: 'envelope',
    isLetterAnimated: false,
    isAudioPlaying: false,
    hasConfettiPlayed: false,
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
    screenTimeline: document.getElementById('screen-timeline'),

    // Screen 1: Envelope
    envelopeWrapper: document.getElementById('envelope-wrapper'),
    openEnvelopeBtn: document.getElementById('open-envelope-btn'),
    envOccasion: document.getElementById('env-occasion'),
    envTitle: document.getElementById('env-title'),

    // Screen 2: Letter
    letterOccasionBadge: document.getElementById('letter-occasion-badge'),
    letterGreeting: document.getElementById('letter-greeting'),
    letterParagraphs: document.getElementById('letter-paragraphs'),
    letterClosing: document.getElementById('letter-closing'),
    letterSignature: document.getElementById('letter-signature'),
    letterDate: document.getElementById('letter-date'),
    skipAnimationBtn: document.getElementById('skip-animation-btn'),
    goToTimelineBtn: document.getElementById('go-to-timeline-btn'),

    // Screen 3: Timeline Sticky Bar & Content
    timelineBackLetterBtn: document.getElementById('timeline-back-letter-btn'),
    currentStageNum: document.getElementById('current-stage-num'),
    totalStageNum: document.getElementById('total-stage-num'),
    openCompareBtn: document.getElementById('open-compare-btn'),
    scrollProgressBar: document.getElementById('scroll-progress-bar'),
    timelineHeadingTitle: document.getElementById('timeline-heading-title'),
    timelineHeadingSubtitle: document.getElementById('timeline-heading-subtitle'),
    timelineContainer: document.getElementById('timeline-container'),
    spineLineFill: document.getElementById('spine-line-fill'),
    timelineItemsList: document.getElementById('timeline-items-list'),
    timelineEndCard: document.getElementById('timeline-end-card'),
    endCompareBtn: document.getElementById('end-compare-btn'),
    endRestartBtn: document.getElementById('end-restart-btn'),
    endReadLetterBtn: document.getElementById('end-read-letter-btn'),

    // Lightbox Modal
    lightboxModal: document.getElementById('lightbox-modal'),
    closeLightboxBtn: document.getElementById('close-lightbox-btn'),
    lightboxImg: document.getElementById('lightbox-img'),
    lightboxYear: document.getElementById('lightbox-year'),
    lightboxTitle: document.getElementById('lightbox-title'),
    lightboxCaption: document.getElementById('lightbox-caption'),

    // Compare Modal
    compareModal: document.getElementById('compare-modal'),
    closeCompareBtn: document.getElementById('close-compare-btn'),
    compareSliderContainer: document.getElementById('compare-slider-container'),
    compareBeforeImg: document.getElementById('compare-before-img'),
    compareAfterImg: document.getElementById('compare-after-img'),
    compareAfterLayer: document.getElementById('compare-after-layer'),
    compareDivider: document.getElementById('compare-divider'),
    compareBeforeLabel: document.getElementById('compare-before-label'),
    compareAfterLabel: document.getElementById('compare-after-label'),
    toggleCompareModeBtn: document.getElementById('toggle-compare-mode-btn'),
    compareSideBySide: document.getElementById('compare-side-by-side'),
    sideBeforeImg: document.getElementById('side-before-img'),
    sideAfterImg: document.getElementById('side-after-img'),
    sideBeforeYear: document.getElementById('side-before-year'),
    sideAfterYear: document.getElementById('side-after-year')
  };

  // =========================================================================
  // ÂM THANH CHUÔNG MỞ THƯ DIỆU KỲ (WEB AUDIO API)
  // =========================================================================
  function playMagicalChime() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;

      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') ctx.resume();

      const notes = [523.25, 659.25, 783.99, 987.77, 1046.50];
      const now = ctx.currentTime;

      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0, now + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.12, now + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.85);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.85);
      });
    } catch (e) {
      console.warn('Audio chime warning:', e);
    }
  }

  // =========================================================================
  // TẢI DỮ LIỆU TỪ CONFIG.JSON
  // =========================================================================
  async function loadData() {
    try {
      const res = await fetch('config.json');
      if (res.ok) {
        state.config = await res.json();
      }
    } catch (err) {
      console.warn('Sử dụng dữ liệu mặc định:', err);
    }

    applyConfig();
    setupAudio();
    renderTimeline();
    setupTimelineObserver();
  }

  function applyConfig() {
    const { recipientName, occasion, date, letter, timelineTitle, timelineSubtitle, comparison } = state.config;

    // Phong thư
    if (dom.envOccasion && occasion) dom.envOccasion.textContent = occasion;
    if (dom.envTitle && recipientName) dom.envTitle.textContent = `Gửi ${recipientName} yêu thương 💌`;

    // Lá thư
    if (dom.letterOccasionBadge && occasion) dom.letterOccasionBadge.textContent = occasion;
    if (dom.letterGreeting && letter.greeting) dom.letterGreeting.textContent = letter.greeting;
    if (dom.letterClosing && letter.closing) dom.letterClosing.textContent = letter.closing;
    if (dom.letterSignature && letter.signature) dom.letterSignature.textContent = letter.signature;
    if (dom.letterDate && date) dom.letterDate.textContent = date;

    // Render các đoạn văn trong lá thư
    if (dom.letterParagraphs && letter.paragraphs) {
      dom.letterParagraphs.innerHTML = '';
      letter.paragraphs.forEach((pText) => {
        const p = document.createElement('p');
        p.className = 'letter-paragraph';
        p.textContent = pText;
        dom.letterParagraphs.appendChild(p);
      });
    }

    // Tiêu đề dòng thời gian
    if (dom.timelineHeadingTitle && timelineTitle) dom.timelineHeadingTitle.textContent = timelineTitle;
    if (dom.timelineHeadingSubtitle && timelineSubtitle) dom.timelineHeadingSubtitle.textContent = timelineSubtitle;

    // Nhãn nút so sánh
    if (dom.openCompareBtn && comparison && comparison.buttonText) {
      const label = dom.openCompareBtn.querySelector('.btn-label');
      if (label) label.textContent = comparison.buttonText;
    }
  }

  // =========================================================================
  // NHẠC NỀN TÙY CHỌN
  // =========================================================================
  function setupAudio() {
    const audioConfig = state.config.audio;
    if (!audioConfig || !audioConfig.enabled || !audioConfig.src) {
      dom.musicBtn.classList.add('hidden');
      return;
    }

    dom.bgAudio.src = audioConfig.src;

    dom.bgAudio.addEventListener('canplay', () => {
      dom.musicBtn.classList.remove('hidden');
    });

    dom.bgAudio.addEventListener('error', () => {
      // File nhạc chưa tồn tại -> ẩn nút để giao diện sạch sẽ
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
        console.warn('Chưa thể phát nhạc tự động:', err);
      });
    } else {
      dom.bgAudio.pause();
      state.isAudioPlaying = false;
      dom.musicBtn.classList.remove('playing');
      dom.musicBtn.querySelector('.music-text').textContent = 'Bật nhạc';
    }
  }

  // =========================================================================
  // HIỆU ỨNG HOA RƠI & PHÁO GIẤY TRÊN CANVAS
  // =========================================================================
  class ParticleSystem {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.petals = [];
      this.confetti = [];
      this.maxPetals = 26;
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
      this.petals = [];
      for (let i = 0; i < this.maxPetals; i++) {
        this.petals.push({
          x: Math.random() * this.width,
          y: Math.random() * this.height,
          size: Math.random() * 9 + 6,
          speedY: Math.random() * 0.9 + 0.5,
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
        this.confetti.push({
          x: this.width / 2 + (Math.random() * 120 - 60),
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
      this.petals.forEach((p) => {
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

      for (let i = this.confetti.length - 1; i >= 0; i--) {
        const c = this.confetti[i];
        c.x += c.vx;
        c.y += c.vy;
        c.vy += c.gravity;
        c.rotation += c.rotationSpeed;
        c.opacity -= 0.009;

        if (c.opacity <= 0 || c.y > this.height + 40) {
          this.confetti.splice(i, 1);
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
      requestAnimationFrame(() => this.loop());
    }
  }

  let particleSystem = null;

  // =========================================================================
  // CHUYỂN ĐỔI MÀN HÌNH (SCREEN TRANSITIONS)
  // =========================================================================
  function switchScreen(targetScreenName) {
    dom.screenEnvelope.classList.remove('active');
    dom.screenEnvelope.hidden = true;

    dom.screenLetter.classList.remove('active');
    dom.screenLetter.hidden = true;

    dom.screenTimeline.classList.remove('active');
    dom.screenTimeline.hidden = true;

    if (targetScreenName === 'envelope') {
      dom.screenEnvelope.classList.add('active');
      dom.screenEnvelope.hidden = false;
      state.currentScreen = 'envelope';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (targetScreenName === 'letter') {
      dom.screenLetter.classList.add('active');
      dom.screenLetter.hidden = false;
      state.currentScreen = 'letter';
      window.scrollTo({ top: 0, behavior: 'smooth' });

      if (!state.isLetterAnimated) {
        animateLetterText();
      }
    } else if (targetScreenName === 'timeline') {
      dom.screenTimeline.classList.add('active');
      dom.screenTimeline.hidden = false;
      state.currentScreen = 'timeline';
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Cập nhật lại thanh cuộn
      updateScrollProgress();
    }
  }

  // =========================================================================
  // XỬ LÝ MÀN HÌNH 1: MỞ PHONG THƯ
  // =========================================================================
  function handleOpenEnvelope() {
    if (dom.envelopeWrapper.classList.contains('opening')) return;

    dom.envelopeWrapper.classList.add('opening');
    playMagicalChime();

    // Thử phát nhạc nếu có
    if (state.config.audio.enabled && dom.bgAudio.src && dom.bgAudio.paused) {
      dom.bgAudio.play().then(() => {
        state.isAudioPlaying = true;
        dom.musicBtn.classList.add('playing');
        dom.musicBtn.querySelector('.music-text').textContent = 'Đang phát';
      }).catch(() => {});
    }

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
  // RENDER DÒNG THỜI GIAN "NGÀY ẤY – BÂY GIỜ" (MÀN HÌNH 3)
  // =========================================================================
  function renderTimeline() {
    const timeline = state.config.timeline || [];
    dom.totalStageNum.textContent = timeline.length;
    dom.timelineItemsList.innerHTML = '';

    timeline.forEach((item, index) => {
      const isLast = index === timeline.length - 1;
      const isFirst = index === 0;

      const itemEl = document.createElement('article');
      itemEl.className = `timeline-item ${isLast ? 'is-now' : ''}`;
      itemEl.id = `milestone-${index + 1}`;
      itemEl.setAttribute('data-index', index + 1);

      // Điểm mút trên trục spine
      const dotEl = document.createElement('div');
      dotEl.className = 'timeline-dot';
      dotEl.setAttribute('aria-hidden', 'true');
      dotEl.textContent = isLast ? '👑' : `${index + 1}`;
      itemEl.appendChild(dotEl);

      // Thẻ nội dung mốc
      const cardEl = document.createElement('div');
      cardEl.className = `timeline-card ${index < 3 ? 'vintage-look' : ''}`;

      // Đầu thẻ: Năm & Giai đoạn
      const headerBadge = document.createElement('div');
      headerBadge.className = 'card-header-badge';

      const yearBadge = document.createElement('span');
      yearBadge.className = 'timeline-year-badge';
      yearBadge.innerHTML = isLast ? '✨ BÂY GIỜ ✨' : `Năm ${item.year}`;

      const stageTag = document.createElement('span');
      stageTag.className = 'timeline-stage-tag';
      stageTag.textContent = item.stage;

      headerBadge.appendChild(yearBadge);
      headerBadge.appendChild(stageTag);
      cardEl.appendChild(headerBadge);

      // Xác định danh sách ảnh của mốc (Hỗ trợ 1 ảnh hoặc nhiều ảnh, vd: 2016 có 2 ảnh của Mẹ)
      const photoList = Array.isArray(item.images) && item.images.length > 0 
        ? item.images 
        : (item.image ? [item.image] : []);

      function createImgWrap(imgSrc, subIndex, totalSub) {
        const wrap = document.createElement('div');
        wrap.className = 'timeline-img-wrap';
        wrap.setAttribute('role', 'button');
        wrap.setAttribute('tabindex', '0');
        const photoLabel = totalSub > 1 
          ? `${item.title || item.stage} (Ảnh ${subIndex + 1}/${totalSub})`
          : (item.title || item.stage);
        wrap.setAttribute('aria-label', `Xem ảnh phóng to: ${photoLabel}`);

        const img = document.createElement('img');
        img.className = 'timeline-img';
        img.src = imgSrc;
        img.alt = photoLabel;
        if (!isFirst) {
          img.loading = 'lazy';
        }

        img.onerror = function () {
          this.style.display = 'none';
          const fallbackBox = document.createElement('div');
          fallbackBox.className = 'img-fallback-box';
          fallbackBox.innerHTML = `
            <span class="fallback-icon">📷</span>
            <span class="fallback-title">${item.stage} (${item.year})</span>
            <span class="fallback-sub">${totalSub > 1 ? `Ảnh ${subIndex + 1}` : 'Hình ảnh kỷ niệm'}</span>
          `;
          wrap.appendChild(fallbackBox);
        };

        const hintPill = document.createElement('div');
        hintPill.className = 'img-zoom-hint';
        hintPill.innerHTML = `🔍 Chạm phóng to`;

        wrap.appendChild(img);
        wrap.appendChild(hintPill);

        const openHandler = () => {
          openLightbox({
            ...item,
            image: imgSrc,
            title: totalSub > 1 ? `${item.title} (Ảnh ${subIndex + 1})` : item.title
          });
        };
        wrap.addEventListener('click', openHandler);
        wrap.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openHandler();
          }
        });

        return wrap;
      }

      if (photoList.length > 1) {
        // Nhiều ảnh trong 1 mốc (Hiển thị dạng lưới đẹp mắt)
        const multiGrid = document.createElement('div');
        multiGrid.className = 'timeline-multi-img-grid';
        photoList.forEach((src, idx) => {
          multiGrid.appendChild(createImgWrap(src, idx, photoList.length));
        });
        cardEl.appendChild(multiGrid);
      } else if (photoList.length === 1) {
        // 1 ảnh đơn
        cardEl.appendChild(createImgWrap(photoList[0], 0, 1));
      }

      // Tiêu đề & Lời kể
      if (item.title) {
        const titleEl = document.createElement('h3');
        titleEl.className = 'timeline-card-title';
        titleEl.textContent = item.title;
        cardEl.appendChild(titleEl);
      }

      if (item.caption) {
        const captionEl = document.createElement('p');
        captionEl.className = 'timeline-card-caption';
        captionEl.textContent = item.caption;
        cardEl.appendChild(captionEl);
      }

      itemEl.appendChild(cardEl);
      dom.timelineItemsList.appendChild(itemEl);
    });

    setupComparisonData();
  }

  // =========================================================================
  // INTERSECTION OBSERVER & CUỘN DÒNG THỜI GIAN
  // =========================================================================
  function setupTimelineObserver() {
    const cards = document.querySelectorAll('.timeline-card');
    const milestoneItems = document.querySelectorAll('.timeline-item');

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      });

      cards.forEach((card) => observer.observe(card));

      // Quan sát để cập nhật số thứ tự mốc trên thanh sticky bar
      const stageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = entry.target.getAttribute('data-index');
            if (idx) dom.currentStageNum.textContent = idx;
          }
        });
      }, {
        threshold: 0.4
      });

      milestoneItems.forEach((item) => stageObserver.observe(item));

      // Quan sát thẻ kết thúc để bắn pháo giấy chúc mừng
      const endCardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !state.hasConfettiPlayed) {
            state.hasConfettiPlayed = true;
            if (particleSystem) {
              particleSystem.burstConfetti();
            }
          }
        });
      }, { threshold: 0.3 });

      if (dom.timelineEndCard) {
        endCardObserver.observe(dom.timelineEndCard);
      }
    } else {
      // Fallback cho trình duyệt cũ
      cards.forEach((card) => card.classList.add('in-view'));
    }

    // Lắng nghe sự kiện cuộn trang để cập nhật vạch tiến trình
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
  }

  function updateScrollProgress() {
    if (state.currentScreen !== 'timeline') return;

    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100)) : 0;

    if (dom.scrollProgressBar) {
      dom.scrollProgressBar.style.width = `${progress}%`;
    }

    if (dom.spineLineFill) {
      dom.spineLineFill.style.height = `${progress}%`;
    }
  }

  // =========================================================================
  // LIGHTBOX: XEM ẢNH PHÓNG TO
  // =========================================================================
  function openLightbox(item) {
    dom.lightboxImg.src = item.image;
    dom.lightboxImg.alt = item.title || item.stage;
    dom.lightboxYear.textContent = item.year === 'BÂY GIỜ' ? 'BÂY GIỜ' : `Năm ${item.year}`;
    dom.lightboxTitle.textContent = item.title || item.stage;
    dom.lightboxCaption.textContent = item.caption || '';

    if (typeof dom.lightboxModal.showModal === 'function') {
      dom.lightboxModal.showModal();
    } else {
      dom.lightboxModal.setAttribute('open', '');
    }
  }

  function closeLightbox() {
    if (typeof dom.lightboxModal.close === 'function') {
      dom.lightboxModal.close();
    } else {
      dom.lightboxModal.removeAttribute('open');
    }
  }

  // =========================================================================
  // CHẾ ĐỘ SO SÁNH "NGÀY ẤY ⇄ BÂY GIỜ" (TRƯỢT BẰNG 1 NGÓN TAY)
  // =========================================================================
  function setupComparisonData() {
    const timeline = state.config.timeline || [];
    if (timeline.length < 2) return;

    const firstItem = timeline[0];
    const lastItem = timeline[timeline.length - 1];
    const comparisonConfig = state.config.comparison || {};

    const firstImg = (Array.isArray(firstItem.images) && firstItem.images[0]) || firstItem.image;
    const lastImg = (Array.isArray(lastItem.images) && lastItem.images[lastItem.images.length - 1]) || lastItem.image;

    // Cập nhật ảnh cho bộ so sánh
    dom.compareBeforeImg.src = firstImg;
    dom.compareAfterImg.src = lastImg;
    dom.compareBeforeLabel.textContent = comparisonConfig.labelBefore || `Ngày ấy (${firstItem.year})`;
    dom.compareAfterLabel.textContent = comparisonConfig.labelAfter || 'Bây giờ';

    // Cập nhật tiêu đề & lời giải thích của modal so sánh nếu có trong config
    const modalTitle = dom.compareModal.querySelector('.compare-title');
    const modalSub = dom.compareModal.querySelector('.compare-sub');
    if (modalTitle && comparisonConfig.title) modalTitle.textContent = comparisonConfig.title;
    if (modalSub && comparisonConfig.subtitle) modalSub.textContent = comparisonConfig.subtitle;

    // Cập nhật ảnh cho chế độ 2 ảnh cạnh nhau
    dom.sideBeforeImg.src = firstImg;
    dom.sideAfterImg.src = lastImg;
    dom.sideBeforeYear.textContent = `${firstItem.stage} (${firstItem.year})`;
    dom.sideAfterYear.textContent = `${lastItem.stage} (Hiện tại)`;

    initCompareSlider();
  }

  function initCompareSlider() {
    const container = dom.compareSliderContainer;
    const afterLayer = dom.compareAfterLayer;
    const divider = dom.compareDivider;

    let isDragging = false;

    function setSliderPosition(clientX) {
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      let percentage = (x / rect.width) * 100;
      percentage = Math.max(5, Math.min(95, percentage));

      afterLayer.style.width = `${percentage}%`;
      divider.style.left = `${percentage}%`;
    }

    // Touch events cho điện thoại di động
    container.addEventListener('touchstart', (e) => {
      isDragging = true;
      setSliderPosition(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      setSliderPosition(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });

    // Mouse events cho máy tính
    container.addEventListener('mousedown', (e) => {
      isDragging = true;
      setSliderPosition(e.clientX);
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      setSliderPosition(e.clientX);
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    // Mặc định ở vị trí 50%
    afterLayer.style.width = '50%';
    divider.style.left = '50%';
  }

  function openCompareModal() {
    if (typeof dom.compareModal.showModal === 'function') {
      dom.compareModal.showModal();
    } else {
      dom.compareModal.setAttribute('open', '');
    }
  }

  function closeCompareModal() {
    if (typeof dom.compareModal.close === 'function') {
      dom.compareModal.close();
    } else {
      dom.compareModal.removeAttribute('open');
    }
  }

  function toggleCompareMode() {
    const isSideHidden = dom.compareSideBySide.classList.contains('hidden');
    if (isSideHidden) {
      dom.compareSideBySide.classList.remove('hidden');
      dom.compareSliderContainer.classList.add('hidden');
      dom.toggleCompareModeBtn.textContent = '🔄 Đổi sang thanh kéo trượt';
    } else {
      dom.compareSideBySide.classList.add('hidden');
      dom.compareSliderContainer.classList.remove('hidden');
      dom.toggleCompareModeBtn.textContent = '🔄 Đổi sang xem 2 ảnh cạnh nhau';
    }
  }

  // =========================================================================
  // GẮN SỰ KIỆN TƯƠNG TÁC
  // =========================================================================
  function bindEvents() {
    // Phong thư
    dom.envelopeWrapper.addEventListener('click', handleOpenEnvelope);
    dom.openEnvelopeBtn.addEventListener('click', handleOpenEnvelope);
    dom.envelopeWrapper.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleOpenEnvelope();
      }
    });

    // Lá thư
    dom.skipAnimationBtn.addEventListener('click', skipLetterAnimation);
    dom.goToTimelineBtn.addEventListener('click', () => switchScreen('timeline'));

    // Dòng thời gian
    dom.timelineBackLetterBtn.addEventListener('click', () => switchScreen('letter'));
    dom.openCompareBtn.addEventListener('click', openCompareModal);
    dom.endCompareBtn.addEventListener('click', openCompareModal);
    dom.endRestartBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    dom.endReadLetterBtn.addEventListener('click', () => switchScreen('letter'));

    // Lightbox Modal
    dom.closeLightboxBtn.addEventListener('click', closeLightbox);
    dom.lightboxModal.addEventListener('click', (e) => {
      if (e.target === dom.lightboxModal) closeLightbox();
    });

    // Compare Modal
    dom.closeCompareBtn.addEventListener('click', closeCompareModal);
    dom.compareModal.addEventListener('click', (e) => {
      if (e.target === dom.compareModal) closeCompareModal();
    });
    dom.toggleCompareModeBtn.addEventListener('click', toggleCompareMode);

    // Phím Escape để đóng modal
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
        closeCompareModal();
      }
    });
  }

  // =========================================================================
  // KHỞI CHẠY ỨNG DỤNG
  // =========================================================================
  async function init() {
    particleSystem = new ParticleSystem(dom.canvas);
    bindEvents();
    await loadData();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

