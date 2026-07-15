// Language selector
const language = document.getElementById("language");

if (language) {
  language.addEventListener("change", function () {
    alert("Language selected: " + this.value + "\n(Translations will be added in the next step)");
  });
}

// Mobile menu
const menuBtn = document.querySelector(".mobile-btn");
const menu = document.querySelector(".menu");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

// Smooth animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });
});
