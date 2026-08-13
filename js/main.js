document.addEventListener("DOMContentLoaded", () => {

    /*
     * Simple page-load reveal
     */

    document.body.classList.add("loaded");


    /*
     * Mark the current navigation page
     */

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".nav-links a").forEach(link => {

        const linkPage =
            link.getAttribute("href").split("/").pop();

        if (linkPage === currentPage) {
            link.classList.add("active");
        }

    });


    /*
     * Current year
     */

    const year = document.querySelector(".footer-copy");

    if (year) {
        year.textContent =
            `© ${new Date().getFullYear()} S NISHAANTH`;
    }

});
