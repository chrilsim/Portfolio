const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// ================= MOBILE MENU =================

menuToggle.addEventListener("click", () => {

navMenu.classList.toggle("open");

const icon = menuToggle.querySelector("i");

if (navMenu.classList.contains("open")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
} else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
}


});

// Close menu when clicking a link

navLinks.forEach(link => {


link.addEventListener("click", () => {

    navMenu.classList.remove("open");

    const icon = menuToggle.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

});


});

// ================= ACTIVE NAVIGATION =================

const sections = document.querySelectorAll("section[id]");

function updateActiveLink() {
const scrollPosition = window.scrollY + 150;

sections.forEach(section => {

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
    ) {

        navLinks.forEach(link => {
            link.classList.remove("active");
        });

        const activeLink = document.querySelector(
            `.nav-link[href="#${sectionId}"]`
        );

        if (activeLink) {
            activeLink.classList.add("active");
        }

    }

});


}

window.addEventListener("scroll", updateActiveLink);

// ================= SCROLL TOP =================

const scrollTopButton = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {


if (window.scrollY > 500) {

    scrollTopButton.classList.add("show");

} else {

    scrollTopButton.classList.remove("show");

}

});

scrollTopButton.addEventListener("click", () => {


window.scrollTo({
    top: 0,
    behavior: "smooth"
});


});

// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {


event.preventDefault();

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const subject = document.getElementById("subject").value.trim();
const message = document.getElementById("message").value.trim();


if (!name || !email || !subject || !message) {

    alert("Please fill in all fields.");

    return;

}


const mailTo = "your@email.com";

const body =
    `Name: ${name}%0D%0A` +
    `Email: ${email}%0D%0A%0D%0A` +
    `${message}`;


const mailLink =
    `mailto:${mailTo}` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${body}`;


window.location.href = mailLink;


});

// ================= SIMPLE REVEAL ANIMATION =================

const revealElements = document.querySelectorAll(
".skill-card, .project-card, .timeline-item, .about-grid, .contact-grid"
);

const revealObserver = new IntersectionObserver(
(entries, observer) => {


    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

            observer.unobserve(entry.target);

        }

    });

},
{
    threshold: 0.1
}


);

revealElements.forEach(element => {


element.style.opacity = "0";
element.style.transform = "translateY(25px)";
element.style.transition = "opacity .6s ease, transform .6s ease";

revealObserver.observe(element);


});
