// Hamburger menu for mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('show'));
    });
}

// Scroll to schedule/contact section on nav or floating button click
const scheduleSection = document.getElementById('schedule');
const contactBtn = document.getElementById('contactBtn');
const bookBtn = document.getElementById('bookBtn');
const floatingScheduleBtn = document.getElementById('floatingScheduleBtn');

function smoothScrollToSchedule(e) {
    if (e) e.preventDefault();
    if (scheduleSection) {
        scheduleSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

if (contactBtn) contactBtn.addEventListener('click', smoothScrollToSchedule);
if (bookBtn) bookBtn.addEventListener('click', smoothScrollToSchedule);
if (floatingScheduleBtn) floatingScheduleBtn.addEventListener('click', smoothScrollToSchedule);

// Contact form logic (unchanged)
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        formMsg.textContent = 'Thank you for contacting us! We will get back to you soon.';
        formMsg.style.color = 'green';
        setTimeout(() => { formMsg.textContent = ""; contactForm.reset(); }, 2000);
    });
}

// Animate on scroll
function revealOnScroll() {
    let animatedEls = document.querySelectorAll('.fade-in, .slide-up');
    const trigger = window.innerHeight * 0.93;
    animatedEls.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if(top < trigger) {
            el.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);