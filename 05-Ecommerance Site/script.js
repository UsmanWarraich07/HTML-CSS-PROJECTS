const toggleBtn = document.getElementById("toggle");
const navLinks = document.getElementById("nav-links");
const closeBtn = document.getElementById("close")
toggleBtn.addEventListener('click', () => {
  navLinks.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  navLinks.style.display = 'none';
})