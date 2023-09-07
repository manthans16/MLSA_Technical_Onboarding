document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
        box.addEventListener("mouseenter", function () {
            box.style.boxShadow = "0 8px 16px 0 rgba(0, 0, 0, 0.4)";
        });

        box.addEventListener("mouseleave", function () {
            box.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)";
        });
    });

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth",
                });
            }
        });
    });
});
