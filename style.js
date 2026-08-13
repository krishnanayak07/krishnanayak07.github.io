// ================================
// MOBILE MENU
// ================================

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");

    if (navLinks) {
        navLinks.classList.toggle("show");
    }
}


// ================================
// COPYRIGHT YEAR
// ================================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// ================================
// BUY BUTTON
// ================================

function showMessage(phoneName) {

    alert(
        "Thank you for your interest in " +
        phoneName +
        "!\n\nPlease contact Krishna Mobiles at 7850900832 to check availability and place your order."
    );
}


// ================================
// CONTACT FORM
// ================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        const formMessage = document.getElementById("formMessage");

        if (name === "" || phone === "" || message === "") {

            formMessage.textContent =
                "Please fill in all the fields.";

            formMessage.style.color = "red";

            return;
        }

        formMessage.textContent =
            "Thank you, " + name +
            "! Your enquiry has been received. Please call 7850900832 for further assistance.";

        formMessage.style.color = "green";

        contactForm.reset();

    });
}


// ================================
// CLOSE MOBILE MENU
// ================================

const menuLinks = document.querySelectorAll(".nav-links a");

menuLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        const navLinks = document.getElementById("navLinks");

        if (navLinks) {
            navLinks.classList.remove("show");
        }

    });

});
