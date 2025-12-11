// Animate skill bars when they enter viewport
const progressBars = document.querySelectorAll(".progress");

const animateProgress = (entries) => {
  entries.forEach((entry) => {
    const progress = entry.target;
    const targetWidth = progress.getAttribute("data-progress");

    if (entry.isIntersecting) {
      progress.style.width = targetWidth + "%";
    } else {
      progress.style.width = "0%";
    }
  });
};

const observer = new IntersectionObserver(animateProgress, {
  threshold: 0.5,
});

progressBars.forEach((progressBar) => {
  observer.observe(progressBar);
});

// Typed.js text
new Typed("#element", {
  strings: [
    "Java Full Stack Developer",
    "Backend Developer (Java & Spring Boot)",
    "Frontend Developer (HTML, CSS, JavaScript)",
  ],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
  showCursor: false,
});
const formIframe = document.getElementById('contactFormIframe');
const openFormBtn = document.getElementById('openFormBtn');
const resetFormBtn = document.getElementById('resetFormBtn');

if (openFormBtn) {
  openFormBtn.addEventListener('click', () => {
    const url = formIframe.src.replace('/viewform?embedded=true', '/viewform');
    window.open(url, '_blank');
  });
}
if (resetFormBtn) {
  resetFormBtn.addEventListener('click', () => {
    const old = formIframe.src;
    formIframe.src = 'about:blank';
    setTimeout(() => formIframe.src = old, 250);
  });
}
// ---------- Lazy-load contact iframe ----------
(function () {
  const iframe = document.getElementById('contactFormIframe');
  if (!iframe) return;

  const loadIframe = () => {
    const src = iframe.getAttribute('data-src');
    if (src && iframe.src !== src) {
      iframe.src = src;
    }
  };

  // If IntersectionObserver supported, load when near viewport
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadIframe();
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '300px 0px' }); // preload slightly before user reaches it
    io.observe(iframe);
  } else {
    // fallback: load immediately
    loadIframe();
  }

  // Open / reset helpers
  const openBtn = document.getElementById('openFormBtn');
  const resetBtn = document.getElementById('resetFormBtn');

  if (openBtn) {
    openBtn.addEventListener('click', () => {
      const src = iframe.getAttribute('data-src') || iframe.src;
      const fullUrl = (src || '').replace('/viewform?embedded=true', '/viewform');
      if (fullUrl) window.open(fullUrl, '_blank');
    });
  }
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      const old = iframe.src;
      iframe.src = 'about:blank';
      setTimeout(()=> { iframe.src = old; }, 240);
    });
  }
})();


