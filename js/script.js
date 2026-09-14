const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-nav");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector(".form-status");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const open = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      formStatus.textContent = "Please fill in name, email, and a message.";
      return;
    }

    contactForm.reset();
    formStatus.textContent =
      "Saved locally. Hook this form to an API when you add a backend.";
  });
}
