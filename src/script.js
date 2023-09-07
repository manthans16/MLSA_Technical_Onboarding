

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
});
