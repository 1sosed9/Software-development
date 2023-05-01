// Smooth scroll 
(function () {
    const anchors = document.querySelectorAll('a[href*="#"]');
    for (const anchor of anchors) {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            let blockID = anchor.getAttribute("href");
            let chooseElement = document.getElementById(blockID.split("").slice(1).join(""));
            window.scrollTo({
                top: chooseElement.offsetTop,
                left: 0,
                behavior: "smooth",
            });
        })
    }
}());