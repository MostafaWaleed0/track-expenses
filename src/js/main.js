/*==================== SHOW MENU ====================*/
const headMiddle = document.getElementById('head-middle'),
  navToggle = document.getElementById('nav-toggle'),
  toggleIcon = document.getElementById('toggle-icon');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
navToggle.addEventListener('click', () => {
  const visibility = headMiddle.getAttribute('data-visible');

  console.log(visibility);
  if (visibility == 'false') {
    headMiddle.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
    navToggle.setAttribute('aria-label', 'Close navigation');
    toggleIcon.classList = 'bi bi-x';
  } else if (visibility == 'true') {
    headMiddle.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
    navToggle.setAttribute('aria-label', 'Open navigation');
    toggleIcon.classList = 'bi bi-list';
  }
});
