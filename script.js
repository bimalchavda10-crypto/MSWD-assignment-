
  const menu = document.getElementById("menu");
const menuBtn = document.querySelector(".menu-btn");

// Toggle menu when clicking the button
menuBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent the click from triggering document click
  menu.classList.toggle("open");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
    menu.classList.remove("open");
  }
});

// Optional: prevent menu clicks from closing it
menu.addEventListener("click", (e) => {
  e.stopPropagation();
});



function showSection(id) {
  const sections = document.querySelectorAll(".section");

  sections.forEach(section => {
    if (section.id === id) {
      section.style.display = "block";
      setTimeout(() => {
        section.classList.add("active");
      }, 10); // fade-in
    } else {
      section.classList.remove("active");
      setTimeout(() => {
        section.style.display = "none";
      }, 500); // fade-out
    }
  });

  document.getElementById("menu").style.left = "-260px"; // close menu
}
