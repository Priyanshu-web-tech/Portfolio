var savedTheme = localStorage.getItem("theme");
var icon = document.querySelector("#switch-icon");
var logoImg = document.getElementById("logo-img");
if (savedTheme) {
    document.body.classList.add(savedTheme);
    logoImg.src="./assets/light-logo.png";

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

    // Change the logo image source based on the theme
    logoImg.src = document.body.classList.contains("light-theme")
        ? "./assets/light-logo.png"
        : "./assets/logo.png";
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

// Loader
window.onload = function () {
  var loader = document.getElementById("loader");
  var container = document.getElementById("container");
  var originalOverflow = document.body.style.overflow;

  if (savedTheme) document.body.style.background = "#fff";
  else document.body.style.background = "#111";

  document.body.style.overflow = "hidden";
  setTimeout(function () {
    document.body.style.overflow = originalOverflow;

    loader.style.display = "none";
    container.classList.add("fade-in");
  }, 1500);
};

// Load Lottie animation Hero
const animation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './assets/man.json', // Adjust the path to your JSON file
});

// Load Lottie animation Contact
const animation2 = lottie.loadAnimation({
  container: document.getElementById('lottie-animation2'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './assets/contact.json', // Update the path accordingly
});

