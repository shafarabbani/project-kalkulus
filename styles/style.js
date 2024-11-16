// Select the burger menu and the nav element
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav ul");

// Toggle navigation on burger menu click
burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");

  // Burger animation
  burger.classList.toggle("toggle");
});

// Smooth scrolling for all anchor links
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Get the target section
    const targetId = e.target.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    // Scroll to the section smoothly
    window.scrollTo({
      top: targetSection.offsetTop - 50, // Adjust offset for fixed header
      behavior: "smooth",
    });
  });
});

// Close mobile navigation when a link is clicked (for single-page apps)
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("nav-active");
    burger.classList.remove("toggle");
  });
});
