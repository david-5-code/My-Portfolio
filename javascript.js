const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("change", function () {
    document.body.classList.toggle("white-mode", this.checked);
});


function copyText(text) {
    navigator.clipboard.writeText(text);

    document.getElementById("copied").style.display = "block";

    setTimeout(function() {
        document.getElementById("copied").style.display = "none";
    }, 1500);
}


document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");

    const sections = document.querySelectorAll(
        "#home, #resume, #portfolio, #certification, #contact"
    );

    function updateActiveLink() {
        let currentSection = "home";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {
                currentSection = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.toggle(
                "active",
                link.getAttribute("href") === "#" + currentSection
            );
        });
    }

    window.addEventListener("scroll", updateActiveLink);
    window.addEventListener("resize", updateActiveLink);

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    updateActiveLink();
});
