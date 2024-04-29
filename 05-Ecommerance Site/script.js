const toggleBtn = document.getElementById("toggle");
const navLinks = document.getElementById("nav-links");
const closeBtn = document.getElementById("close");
const year = document.getElementById("year");

const getYear = new Date().getFullYear();
year.innerText = getYear;

toggleBtn.addEventListener("click", () => {
  navLinks.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  navLinks.style.display = "none";
});
