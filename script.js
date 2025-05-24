// Hamburger menu for mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
    // Close menu on link click (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('show'));
    });
}

// Contact popup logic
const contactBtn = document.getElementById('contactBtn');
const bookBtn = document.getElementById('bookBtn');
const contactPopup = document.getElementById('contactPopup');
const closePopup = document.getElementById('closePopup');
const popupContactForm = document.getElementById('popupContactForm');
const popupFormMsg = document.getElementById('popupFormMsg');
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

// Popup logic
function openPopup(e) {
    if (e) e.preventDefault();
    contactPopup.style.display = 'block';
    setTimeout(() => {
        contactPopup.querySelector('input, textarea').focus();
    }, 200);
}
function closeModal() {
    contactPopup.style.display = 'none';
    if (popupContactForm) popupContactForm.reset();
    if (popupFormMsg) popupFormMsg.textContent = '';
}

if (contactBtn) contactBtn.addEventListener('click', openPopup);
if (bookBtn) bookBtn.addEventListener('click', openPopup);
if (closePopup) closePopup.addEventListener('click', closeModal);

window.onclick = function(event) {
    if (event.target == contactPopup) { closeModal(); }
}

if (popupContactForm) {
    popupContactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        popupFormMsg.textContent = 'Thank you for contacting us! We will get back to you soon.';
        popupFormMsg.style.color = 'green';
        setTimeout(closeModal, 2000);
    });
}

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
