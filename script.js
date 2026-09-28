/* =========================================================
   ÉLANE WEDDINGS & EVENTS
   Main JavaScript
   ========================================================= */


/* =========================
   1. MOBILE MENU
   ========================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("mobile-active");
        menuBtn.classList.toggle("active");

    });

}


/* =========================
   2. CLOSE MOBILE MENU
   ========================= */

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("mobile-active");
        menuBtn.classList.remove("active");

    });

});


/* =========================
   3. SCROLL REVEAL
   ========================= */

const animatedElements = document.querySelectorAll(
    ".section, .stat-item, .space-card, .service, .gallery-item"
);

const observer = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);

animatedElements.forEach(element => {

    observer.observe(element);

});


/* =========================
   4. NAVBAR SCROLL EFFECT
   ========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.classList.add("navbar-scrolled");

    } else {

        navbar.classList.remove("navbar-scrolled");

    }

});


/* =========================
   5. SMOOTH ANCHOR SCROLL
   ========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================
   6. HERO PARALLAX EFFECT
   ========================= */

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    if (!hero) return;

    const scrollPosition = window.scrollY;

    if (scrollPosition < window.innerHeight) {

        hero.style.backgroundPosition =
            `center ${scrollPosition * 0.35}px`;

    }

});


/* =========================
   7. GALLERY IMAGE EFFECT
   ========================= */

const galleryItems =
    document.querySelectorAll(".gallery-item");

galleryItems.forEach(item => {

    item.addEventListener("mouseenter", () => {

        item.style.zIndex = "5";

    });

    item.addEventListener("mouseleave", () => {

        item.style.zIndex = "1";

    });

});


/* =========================
   8. BUTTON CLICK EFFECT
   ========================= */

const buttons =
    document.querySelectorAll(".btn, .nav-button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.add("clicked");

        setTimeout(() => {

            button.classList.remove("clicked");

        }, 250);

    });

});


/* =========================
   9. CURRENT YEAR
   ========================= */

const footerYear = document.querySelector(".footer-bottom p");

if (footerYear) {

    const currentYear = new Date().getFullYear();

    footerYear.innerHTML =
        `© ${currentYear} ÉLANE Weddings & Events. All rights reserved.`;

}


/* =========================
   10. PAGE LOAD ANIMATION
   ========================= */

window.addEventListener("load", () => {

    document.body.classList.add("page-loaded");

});