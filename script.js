// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');
  if(body.classList.contains('dark')) {
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  } else {
    themeIcon.classList.replace('fa-sun', 'fa-moon');
  }
});

// Project Modals
function openModal(id) {
  document.getElementById(id).style.display = 'flex';
}
function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// Close modal on outside click
window.onclick = function(event) {
  document.querySelectorAll('.modal').forEach(modal => {
    if(event.target == modal) modal.style.display = 'none';
  });
}
