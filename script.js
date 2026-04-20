// Simple smooth scroll (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


const container = document.querySelector(".container");

  function showProjects() {
    container.style.transform = "translateX(-100vw)";
  }

  function showAbout() {
    container.style.transform = "translateX(0)";
  }