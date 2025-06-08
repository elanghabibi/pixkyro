function initAOS() {
  const elements = document.querySelectorAll(".aos");

  const checkAOS = () => {
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("aos-active");
      }
    });
  };

  window.addEventListener("scroll", checkAOS);
  window.addEventListener("load", checkAOS);
}

initAOS();
