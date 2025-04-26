const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll("#navbar a");

//make it so when you press a section, it also turns on active
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

window.addEventListener("scroll", () => {
  let currentSectionId = null;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100; // buffer for navbar height
    const sectionBottom = sectionTop + section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    const href = link.getAttribute("href").replace("#", "");
    if (href === currentSectionId) {
      link.classList.add("active");
    }
    
    if (href === "#skills") {
      link.classList.add("active");
    }
    
  });
});