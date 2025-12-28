function openMenu() {
  document.getElementById("menu").style.left = "0px";
}

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
