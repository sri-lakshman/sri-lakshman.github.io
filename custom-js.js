// ----- Mobile Menu Toggle -----
const toggleBtn = document.getElementById('menu-toggle');
const menu = document.getElementById('mobile-menu');
let isOpen = false;

function openMenu() {
  menu.classList.remove('hidden');
  toggleBtn.innerHTML = '×'; // Close icon
  isOpen = true;
}

function closeMenu() {
  menu.classList.add('hidden');
  toggleBtn.innerHTML = '☰'; // Hamburger icon
  isOpen = false;
}

if (toggleBtn && menu) {
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    isOpen ? closeMenu() : openMenu();
  });

  document.addEventListener('click', (e) => {
    if (isOpen && !menu.contains(e.target) && !toggleBtn.contains(e.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) {
      closeMenu();
    }
  });
}

// ----- Image Modal Logic -----
function openModal() {
  const modal = document.getElementById('imageModal');
  modal?.classList.remove('hidden');
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  modal?.classList.add('hidden');
}

function handleOverlayClick(e) {
  const modal = document.getElementById('imageModal');
  if (e.target === modal) {
    closeModal();
  }
}

document.addEventListener('click', handleOverlayClick);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// ----- Project Slider Scroll -----
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('projectSlider');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');

  if (slider && nextBtn && prevBtn) {
    const scrollSlider = (direction) => {
      const slide = slider.querySelector('.snap-start');
      if (!slide) return;

      const slideStyles = window.getComputedStyle(slide);
      const slideWidth = slide.offsetWidth + parseInt(slideStyles.marginRight || 24);
      slider.scrollBy({ left: direction * slideWidth, behavior: 'smooth' });
    };

    nextBtn.addEventListener('click', () => scrollSlider(1));
    prevBtn.addEventListener('click', () => scrollSlider(-1));
  }
});

// ----- Cursor -----
const cursor = document.getElementById('cursor');

let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  // Smooth follow
  currentX += (mouseX - currentX) * 0.15;
  currentY += (mouseY - currentY) * 0.15;

  cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

  requestAnimationFrame(animateCursor);
}

animateCursor();

// Add hover effects
const hoverTargets = document.querySelectorAll('.sl-btn');

hoverTargets.forEach(target => {
  target.addEventListener('mouseenter', () => {
    cursor.classList.add('invert-mode');
  });
  target.addEventListener('mouseleave', () => {
    cursor.classList.remove('invert-mode');
  });
});
