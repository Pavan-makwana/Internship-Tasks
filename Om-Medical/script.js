function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
    document.getElementById("navLinks").classList.remove("active");
  });
});

