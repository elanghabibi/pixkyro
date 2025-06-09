let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let overlay = document.getElementById("overlay");

menuIcon.onclick = () => {
  const isActive = navbar.classList.contains("active");

  menuIcon.classList.toggle("bx-x", !isActive);
  menuIcon.classList.toggle("bx-menu", isActive);

  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

overlay.onclick = () => {
  navbar.classList.remove("active");
  overlay.classList.remove("active");

  menuIcon.classList.remove("bx-x");
  menuIcon.classList.add("bx-menu");
};
