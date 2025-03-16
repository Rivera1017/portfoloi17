document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const section = document.querySelector(this.getAttribute("href"));
        window.scrollTo({ top: section.offsetTop, behavior: "smooth" });
    });
});