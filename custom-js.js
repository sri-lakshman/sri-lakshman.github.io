// ----- Mobile Menu Toggle -----
const toggleBtn = document.getElementById('menu-toggle');
const menu = document.getElementById('mobile-menu');

let isOpen = false;

function openMenu() {
  menu.classList.remove('hidden');
  toggleBtn.innerHTML = '×'; // Change to close icon
  isOpen = true;
}

function closeMenu() {
  menu.classList.add('hidden');
  toggleBtn.innerHTML = '☰'; // Change back to hamburger
  isOpen = false;
}

toggleBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent immediate outside click from firing
  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

// Close when clicking outside
document.addEventListener('click', (e) => {
  if (isOpen && !menu.contains(e.target) && !toggleBtn.contains(e.target)) {
    closeMenu();
  }
});

// Optional: Close on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && isOpen) {
    closeMenu();
  }
});

// ----- Project Slider Scroll -----
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('projectSlider');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');

  function scrollSlider(direction) {
    const slide = slider.querySelector('.snap-start');
    if (!slide) return;

    const slideStyles = window.getComputedStyle(slide);
    const slideWidth = slide.offsetWidth + parseInt(slideStyles.marginRight || 24);
    slider.scrollBy({ left: direction * slideWidth, behavior: 'smooth' });
  }

  nextBtn.addEventListener('click', () => scrollSlider(1));
  prevBtn.addEventListener('click', () => scrollSlider(-1));
});

