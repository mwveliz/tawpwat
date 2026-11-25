(function () {
  function boot() {
    if (window.TAWPWAT_I18N && typeof window.TAWPWAT_I18N.initI18n === "function") {
      try {
        window.TAWPWAT_I18N.initI18n();
      } catch (err) {
        console.error("i18n init error:", err);
      }
    }
    initStarfield();
    initOscilloscope();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  function initStarfield() {
    const canvas = document.getElementById("starfield-bg");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let stars = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from({ length: 85 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.6 + 0.4,
        speed: Math.random() * 0.35 + 0.08,
        hue: Math.random() > 0.5 ? "155, 93, 229" : "0, 245, 212"
      }));
    }

    resize();
    window.addEventListener("resize", resize);

    function frame() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const s of stars) {
        s.y -= s.speed;
        if (s.y < 0) {
          s.y = canvas.height;
          s.x = Math.random() * canvas.width;
        }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.hue}, 0.55)`;
        ctx.fill();
      }
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  function initOscilloscope() {
    const canvas = document.getElementById("oscilloscope-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const freqInput = document.getElementById("slider-freq");
    const phaseInput = document.getElementById("slider-phase");
    const ampInput = document.getElementById("slider-amp");
    const freqVal = document.getElementById("val-freq");
    const phaseVal = document.getElementById("val-phase");
    const ampVal = document.getElementById("val-amp");
    const statusEl = document.getElementById("scope-status");
    const resetBtn = document.getElementById("btn-scramble");

    if (!freqInput || !phaseInput || !ampInput) return;

    const TARGET = { freq: 64, phase: 180, amp: 75 };
    let t = 0;

    function syncCanvasSize() {
      const rect = canvas.getBoundingClientRect();
      const targetW = Math.max(300, Math.round(rect.width || 540));
      const targetH = Math.max(180, Math.round(rect.height || 220));
      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW;
        canvas.height = targetH;
      }
    }

    function isLocked() {
      const f = Number(freqInput.value);
      const p = Number(phaseInput.value);
      const a = Number(ampInput.value);
      return (
        Math.abs(f - TARGET.freq) <= 4 &&
        Math.abs(p - TARGET.phase) <= 15 &&
        Math.abs(a - TARGET.amp) <= 6
      );
    }

    function updateLabels() {
      if (freqVal) freqVal.textContent = `${freqInput.value} Hz`;
      if (phaseVal) phaseVal.textContent = `${phaseInput.value}°`;
      if (ampVal) ampVal.textContent = `${ampInput.value}%`;

      const translations = (window.TAWPWAT_I18N && window.TAWPWAT_I18N.TRANSLATIONS) || {};
      const lang = document.documentElement.lang || "en";
      const dict = translations[lang] || translations.en || {};
      const locked = isLocked();

      if (statusEl) {
        statusEl.classList.toggle("unlocked", locked);
        statusEl.textContent = locked
          ? dict["demo.unlocked"] || "RESONANCE LOCKED — PUPPY TRAIL DETECTED"
          : dict["demo.locked"] || "PORTAL LOCKED — TUNE RESONANCE";
      }
    }

    [freqInput, phaseInput, ampInput].forEach((el) => {
      el.addEventListener("input", updateLabels);
      el.addEventListener("change", updateLabels);
    });

    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        freqInput.value = 32;
        phaseInput.value = 60;
        ampInput.value = 40;
        updateLabels();
      });
    }

    window.addEventListener("tawpwat:langchange", updateLabels);
    window.addEventListener("resize", syncCanvasSize);
    syncCanvasSize();
    updateLabels();

    function draw() {
      syncCanvasSize();
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Phosphor grid
      ctx.strokeStyle = "rgba(0, 245, 212, 0.09)";
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 32) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += 32) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Center baseline
      ctx.strokeStyle = "rgba(155, 93, 229, 0.25)";
      ctx.beginPath();
      ctx.moveTo(0, h / 2);
      ctx.lineTo(w, h / 2);
      ctx.stroke();

      // Target reference wave (dashed amber)
      ctx.save();
      ctx.beginPath();
      ctx.setLineDash([6, 5]);
      ctx.strokeStyle = "rgba(245, 166, 35, 0.72)";
      ctx.lineWidth = 2;
      for (let x = 0; x <= w; x += 3) {
        const norm = x / w;
        const y =
          h / 2 +
          Math.sin(norm * (TARGET.freq / 10) * Math.PI * 2 + (TARGET.phase * Math.PI) / 180 + t) *
            (h * 0.36 * (TARGET.amp / 100));
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();

      // Live player wave
      const f = Number(freqInput.value);
      const p = Number(phaseInput.value);
      const a = Number(ampInput.value);
      const locked = isLocked();

      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = locked ? "#00f5d4" : "#b388ff";
      ctx.lineWidth = locked ? 3.2 : 2.6;
      ctx.shadowBlur = locked ? 14 : 8;
      ctx.shadowColor = locked ? "#00f5d4" : "#9b5de5";
      for (let x = 0; x <= w; x += 3) {
        const norm = x / w;
        const y =
          h / 2 +
          Math.sin(norm * (f / 10) * Math.PI * 2 + (p * Math.PI) / 180 + t) *
            (h * 0.36 * (a / 100));
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();

      t += 0.045;
      requestAnimationFrame(draw);
    }

    requestAnimationFrame(draw);
  }
})();
