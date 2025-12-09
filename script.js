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
