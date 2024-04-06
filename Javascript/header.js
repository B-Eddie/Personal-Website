document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll("#navbar a");
    const backgroundSlide = document.getElementById("backgroundSlide");
    let highlightedLink = document.querySelector("#navbar .highlighted");

    // Initialize width and left position based on the initially highlighted link
    const linkWidth = highlightedLink.offsetWidth;
    const linkLeft = highlightedLink.offsetLeft;
    backgroundSlide.style.width = `${linkWidth}px`;
    backgroundSlide.style.left = `${linkLeft}px`;

    navbarLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault(); // Prevent default link behavior

            // Slide the background to the clicked link
            const linkWidth = link.offsetWidth;
            const linkLeft = link.offsetLeft;
            backgroundSlide.style.width = `${linkWidth}px`;

            // Smoothly transition the background position
            backgroundSlide.style.transition = "left 0.05s ease";
            backgroundSlide.style.left = `${linkLeft}px`;

            // Remove the 'highlighted' class from all links
            navbarLinks.forEach(link => {
                link.classList.remove("highlighted");
            });

            // Add the 'highlighted' class to the clicked link
            link.classList.add("highlighted");

            // Update highlightedLink to the clicked link
            highlightedLink = link;

            // Simulate link navigation after animation (optional)
            setTimeout(() => {
                window.location.href = link.href;
            }, 200); // Adjust the timeout duration as needed to match the animation duration

            // Reset transition property after animation

            backgroundSlide.style.transition = "";
        });
    });
});
