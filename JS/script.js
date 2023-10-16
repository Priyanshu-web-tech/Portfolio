var savedTheme = localStorage.getItem("theme");
var icon = document.querySelector("#switch-icon");
var logoImg = document.getElementById("logo-img");

// Set the background color based on the saved theme
document.body.style.background = savedTheme === "light-theme" ? "#fff" : "#111";
if (savedTheme) {
  document.body.classList.add(savedTheme);

  logoImg.src = document.body.classList.contains("light-theme")
    ? "./assets/light-logo.png"
    : "./assets/logo.png";
}

icon.src = document.body.classList.contains("light-theme")
  ? "../assets/moon.png"
  : "../assets/sun.png";

icon.onclick = function () {
  document.body.classList.toggle("light-theme");
  var currentTheme = document.body.classList.contains("light-theme")
    ? "light-theme"
    : "";
  localStorage.setItem("theme", currentTheme);

  icon.src = document.body.classList.contains("light-theme")
    ? "../assets/moon.png"
    : "../assets/sun.png";

  logoImg.src = document.body.classList.contains("light-theme")
    ? "./assets/light-logo.png"
    : "./assets/logo.png";
};

// Loader
window.onload = function () {
  var loader = document.getElementById("loader");
  var container = document.getElementById("container");
  var originalOverflow = document.body.style.overflow;

  document.body.style.overflow = "hidden";
  setTimeout(function () {
    document.body.style.overflow = originalOverflow;

    loader.style.display = "none";
    container.classList.add("fade-in");
  }, 1500);
};

// Navbar toggle
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const toggleIcon = document.getElementById("toggle-icon");
const body = document.body;

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  toggleIcon.src = menu.classList.contains("active")
    ? "./assets/close.png"
    : "./assets/open.png";
  body.classList.toggle("menu-open", menu.classList.contains("active"));
});

document.querySelectorAll(".menu li").forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.remove("active");
    toggleIcon.src = "./assets/open.png";
    body.classList.remove("menu-open");
  });
});

// CURSOR
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");
const specialElements = document.querySelectorAll(
  'a, input[type="text"], input[type="email"], input[type="number"], input[type="submit"], input[type="image"], label[for], select, textarea, button, .link, h1'
);

const enlargeOutlineSize = 20;
cursorOutline.style.transition = "width 0.3s ease, height 0.3s ease";

specialElements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    cursorOutline.style.width = `${40 + enlargeOutlineSize}px`;
    cursorOutline.style.height = `${40 + enlargeOutlineSize}px`;
  });

  element.addEventListener("mouseleave", () => {
    cursorOutline.style.width = "40px";
    cursorOutline.style.height = "40px";
  });
});

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 500, fill: "forwards" }
  );
});

// Load Lottie animation Hero
const animation = lottie.loadAnimation({
  container: document.getElementById("lottie-animation"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "./assets/man.json",
});

// Load Lottie animation Contact
const animation2 = lottie.loadAnimation({
  container: document.getElementById("lottie-animation2"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "./assets/contact.json",
});

//Animations
document.addEventListener("DOMContentLoaded", function () {
  const projectsSection = document.querySelector(".inner-project");
  const skillsSection = document.querySelector(".skills-content");
  const aboutSection = document.querySelector(".about-inner");

  const observeSection = (section, threshold = 0) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("in-view");
          } else {
            section.classList.remove("in-view");
          }
        });
      },
      { threshold }
    );

    observer.observe(section);
  };

  observeSection(projectsSection);
  observeSection(skillsSection, 0.2);
  observeSection(aboutSection);

  const headings = document.querySelectorAll(
    ".aboutme h1, .skills h1, .projects h1, .contact h1"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const heading = entry.target;
        if (entry.isIntersecting) {
          heading.classList.add("in-view");
        } else {
          heading.classList.remove("in-view");
        }
      });
    },
    { threshold: 0.5 }
  );

  headings.forEach((heading) => {
    heading.classList.add("in-view");
    observer.observe(heading);
  });
});
