/*Navbar link generation*/
document.addEventListener('DOMContentLoaded', () => {
  const labels = [
    "Plan A Visit",
    "Who We Are",
    "Connect",
    "Ministries",
    "Events",
    "Media"
  ];

  const menuList = document.getElementById('main-nav-list');

  labels.forEach(label => {
    const li = document.createElement('li');
    li.className = 'col-auto d-none d-lg-block';

    const a = document.createElement('a');
    a.href = '#';
    a.className = 'text-decoration-none fw-semibold';
    a.textContent = label;

    li.appendChild(a);
    menuList.insertBefore(li, menuList.firstChild);
  });
});

/*Countdown Timer*/
function updateCountdown() {
  const countdown = document.getElementById("countdown");
  const now = new Date();

  const nextSunday = new Date(now);
  nextSunday.setDate(now.getDate() + ((7 - now.getDay()) % 7)); // next Sunday
  nextSunday.setHours(11, 0, 0, 0); // 11:00 AM

  const endService = new Date(nextSunday);
  endService.setHours(13); // 1:00 PM

  if (now >= nextSunday && now < endService) {
  countdown.textContent = "NOW!";
  return;
  }

  if (now > endService) {
  nextSunday.setDate(nextSunday.getDate() + 7); // if past 1PM today, get next Sunday
  }

  const diff = nextSunday - now;

  const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
  const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
  const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');

  countdown.textContent = `${hours}:${minutes}:${seconds}`;
}

  setInterval(updateCountdown, 1000);
  updateCountdown(); // initial call

/*Swiper Carousel logic*/
const swiper = new Swiper(".swiper", {
  slidesPerView: "5",
  loop: true,
  speed: 8000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  freeMode: true,
  freeModeMomentum: false,
});

/*Debug breakpoint info*/
function updateDebugInfo() {
  const breakpoints = ['xxl', 'xl', 'lg', 'md', 'sm'];
  const test = document.createElement('div');
  document.body.appendChild(test);

  let currentBreakpoint = 'xs'; // fallback

  for (const bp of breakpoints) {
    test.className = `d-none d-${bp}-block`;
    if (window.getComputedStyle(test).display === 'block') {
      currentBreakpoint = bp;
      break;
    }
  }

  test.remove();

  const width = window.innerWidth;
  document.getElementById('bp-debug').textContent = `Breakpoint: ${currentBreakpoint} | Width: ${width}px`;
}

window.addEventListener('resize', updateDebugInfo);
window.addEventListener('DOMContentLoaded', updateDebugInfo);

/*Mobile Nav Menu Logic*/
document.querySelector('.menu-toggle').addEventListener('click', function () {
  this.classList.toggle('active');
});
document.addEventListener('click', function (event) {
  const menu = document.getElementById('mobileNav');
  const toggleBtn = document.getElementById('menuToggleBtn');

  const clickedInsideMenu = menu.contains(event.target);
  const clickedToggle = toggleBtn.contains(event.target);

  if (!clickedInsideMenu && !clickedToggle && menu.classList.contains('show')) {
    menu.classList.remove('show'); // Hide the menu
    toggleBtn.classList.remove('active'); // Optional: revert icon animation
  }
});
